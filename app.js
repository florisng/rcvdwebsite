import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import pkg from 'pg';
import bcrypt from 'bcrypt';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/admin-create-user', (req, res) => {
  res.render('admin-create-user', { message: null, messageType: null });
});
app.get('/admin', (req, res) => {
  res.render('admin', { error: null });
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

app.get('/admin-dashboard', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, firstname, lastname, username, created_at FROM users ORDER BY id DESC'
    );

    res.render('admin-dashboard', {
      users: result.rows,
      error: null
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.render('admin-dashboard', {
      users: [],
      error: 'Failed to load users.'
    });
  }
});


// Contact form POST
app.use(express.json()); // needed for JSON parsing

// POST: Handle login form
app.post('/admin-login', (req, res) => {
  const { email, password } = req.body;

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // ✅ Login successful
    return res.redirect('/admin-dashboard');
  } else {
    // ❌ Invalid credentials – stay on same page
    return res.render('admin', { error: 'Invalid email or password' });
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from RCVD website`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send(`Thank you, ${name}! Your message has been sent.`);
  } catch (error) {
    console.error(error);
    res.send(`Oops! Something went wrong. Please check your internet connexion and try again.`);
  }
});

// Handle POST request
app.post('/admin-create-user', async (req, res) => {
  const { firstname, lastname, username, password, type } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users (firstname, lastname, username, password, type) 
       VALUES ($1, $2, $3, $4, $5)`,
      [firstname, lastname, username, hashedPassword, type]
    );

    res.render('admin-create-user', { message: 'User created successfully!', messageType: 'success' });

  } catch (err) {
    console.error(err);
    let errorMessage = 'Error creating user';

    // Check for duplicate username
    if (err.code === '23505') { // unique_violation
      errorMessage = 'Username already exists!';
    }

    res.render('admin-create-user', { message: errorMessage, messageType: 'error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
