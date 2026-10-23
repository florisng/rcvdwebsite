const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("./config/db");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL
      ? process.env.FRONTEND_URL.split(",").map((url) => url.trim())
      : true,
  }),
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS announcements (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL DEFAULT CURRENT_DATE,
      category VARCHAR(150) NOT NULL DEFAULT 'Announcement',
      reference VARCHAR(150),
      title VARCHAR(300) NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      pdf_url TEXT,
      registration_url TEXT,
      is_latest BOOLEAN NOT NULL DEFAULT FALSE,
      is_published BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : "";

  if (!token) {
    return res.status(401).json({ message: "Admin login required." });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (payload.username !== ADMIN_USERNAME) {
      return res.status(403).json({ message: "Access denied." });
    }

    next();
  } catch {
    return res
      .status(401)
      .json({ message: "Session expired. Please log in again." });
  }
}

function validateAnnouncement(body) {
  const title = String(body.title || "").trim();
  const category = String(body.category || "Announcement").trim();
  const description = String(body.description || "").trim();

  if (!title) return "Title is required.";
  if (title.length > 300) return "Title must be 300 characters or fewer.";
  if (!category) return "Category is required.";
  if (category.length > 150) return "Category must be 150 characters or fewer.";

  return null;
}

function announcementValues(body) {
  return [
    body.date || new Date().toISOString().slice(0, 10),
    String(body.category || "Announcement").trim(),
    String(body.reference || "").trim() || null,
    String(body.title || "").trim(),
    String(body.description || "").trim(),
    String(body.pdfUrl || "").trim() || null,
    String(body.registrationUrl || "").trim() || null,
    body.isLatest === true,
    body.isPublished === true,
  ];
}

app.get("/", (req, res) => {
  res.json({ message: "RCVD Website API is running" });
});

app.get("/api/announcements", async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        TO_CHAR(date, 'DD/MM/YYYY') AS date,
        category,
        reference,
        title,
        description,
        pdf_url AS "pdfUrl",
        registration_url AS "registrationUrl",
        is_latest AS "isLatest"
      FROM announcements
      WHERE is_published = TRUE
      ORDER BY is_latest DESC, date DESC, id DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error("Public announcements error:", error.message);
    res.status(500).json({ message: "Could not load announcements." });
  }
});

app.post("/api/admin/login", async (req, res) => {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH || !JWT_SECRET) {
    return res.status(503).json({
      message: "Admin authentication is not configured on the server.",
    });
  }

  const username = String(req.body.username || "");
  const password = String(req.body.password || "");

  if (
    username !== ADMIN_USERNAME ||
    !(await bcrypt.compare(password, ADMIN_PASSWORD_HASH))
  ) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  const token = jwt.sign({ username: ADMIN_USERNAME }, JWT_SECRET, {
    expiresIn: "8h",
  });

  res.json({ token, username: ADMIN_USERNAME });
});

app.get("/api/admin/announcements", requireAdmin, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        TO_CHAR(date, 'YYYY-MM-DD') AS date,
        category,
        reference,
        title,
        description,
        pdf_url AS "pdfUrl",
        registration_url AS "registrationUrl",
        is_latest AS "isLatest",
        is_published AS "isPublished"
      FROM announcements
      ORDER BY date DESC, id DESC
    `);

    res.json(rows);
  } catch (error) {
    console.error("Admin announcements error:", error.message);
    res.status(500).json({ message: "Could not load announcements." });
  }
});

app.post("/api/admin/announcements", requireAdmin, async (req, res) => {
  const validationError = validateAnnouncement(req.body);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const values = announcementValues(req.body);

    if (values[7]) {
      await client.query("UPDATE announcements SET is_latest = FALSE");
    }

    const { rows } = await client.query(
      `INSERT INTO announcements
        (date, category, reference, title, description, pdf_url,
         registration_url, is_latest, is_published)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id`,
      values,
    );

    await client.query("COMMIT");
    res.status(201).json({ message: "Announcement created.", id: rows[0].id });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Create announcement error:", error.message);
    res.status(500).json({ message: "Could not create announcement." });
  } finally {
    client.release();
  }
});

app.put("/api/admin/announcements/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  const validationError = validateAnnouncement(req.body);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid announcement ID." });
  }

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const values = announcementValues(req.body);

    if (values[7]) {
      await client.query(
        "UPDATE announcements SET is_latest = FALSE WHERE id <> $1",
        [id],
      );
    }

    const { rowCount } = await client.query(
      `UPDATE announcements SET
        date = $1,
        category = $2,
        reference = $3,
        title = $4,
        description = $5,
        pdf_url = $6,
        registration_url = $7,
        is_latest = $8,
        is_published = $9,
        updated_at = NOW()
       WHERE id = $10`,
      [...values, id],
    );

    if (rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Announcement not found." });
    }

    await client.query("COMMIT");
    res.json({ message: "Announcement updated." });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Update announcement error:", error.message);
    res.status(500).json({ message: "Could not update announcement." });
  } finally {
    client.release();
  }
});

app.delete("/api/admin/announcements/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Invalid announcement ID." });
  }

  try {
    const { rowCount } = await pool.query(
      "DELETE FROM announcements WHERE id = $1",
      [id],
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Announcement not found." });
    }

    res.json({ message: "Announcement deleted." });
  } catch (error) {
    console.error("Delete announcement error:", error.message);
    res.status(500).json({ message: "Could not delete announcement." });
  }
});

app.get("/api/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch {
    res.status(503).json({ status: "error", database: "unavailable" });
  }
});

async function startServer() {
  if (!JWT_SECRET) {
    console.error("Missing JWT_SECRET environment variable.");
    process.exit(1);
  }

  try {
    await initializeDatabase();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`RCVD Website API listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Could not initialize PostgreSQL:", error.message);
    process.exit(1);
  }
}

startServer();
