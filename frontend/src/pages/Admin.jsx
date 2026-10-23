import { useCallback, useEffect, useState } from "react";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/$/, "");

const emptyAnnouncement = {
  date: new Date().toLocaleDateString("en-CA"),
  category: "Announcement",
  reference: "",
  title: "",
  description: "",
  pdfUrl: "",
  registrationUrl: "",
  isLatest: false,
  isPublished: true,
};

export default function Admin() {
  const [token, setToken] = useState(
    () => sessionStorage.getItem("rcvd_admin_token") || "",
  );
  const [username, setUsername] = useState("rcvdadmin");
  const [password, setPassword] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [form, setForm] = useState(emptyAnnouncement);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (path, options = {}) => {
      const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...options.headers,
        },
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 401 && token) {
          sessionStorage.removeItem("rcvd_admin_token");
          setToken("");
        }
        throw new Error(data.message || "The request failed.");
      }

      return data;
    },
    [token],
  );

  const loadAnnouncements = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await request("/api/admin/announcements");
      setAnnouncements(data);
    } catch (err) {
      setError(err.message || "Could not load announcements.");
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    if (token) {
      loadAnnouncements();
    }
  }, [token, loadAnnouncements]);

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const data = await request("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      sessionStorage.setItem("rcvd_admin_token", data.token);
      setToken(data.token);
      setPassword("");
      setMessage("Login successful.");
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function resetForm() {
    setForm({
      ...emptyAnnouncement,
      date: new Date().toLocaleDateString("en-CA"),
    });
    setEditingId(null);
  }

  function startEditing(item) {
    setForm({
      date: item.date || new Date().toLocaleDateString("en-CA"),
      category: item.category || "Announcement",
      reference: item.reference || "",
      title: item.title || "",
      description: item.description || "",
      pdfUrl: item.pdfUrl || "",
      registrationUrl: item.registrationUrl || "",
      isLatest: Boolean(item.isLatest),
      isPublished: Boolean(item.isPublished),
    });

    setEditingId(item.id);
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSave(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const path = editingId
        ? `/api/admin/announcements/${editingId}`
        : "/api/admin/announcements";

      const data = await request(path, {
        method: editingId ? "PUT" : "POST",
        body: JSON.stringify(form),
      });

      setMessage(data.message || "Announcement saved.");
      resetForm();
      await loadAnnouncements();
    } catch (err) {
      setError(err.message || "Could not save announcement.");
    } finally {
      setLoading(false);
    }
  }

  async function togglePublished(item) {
    setError("");
    setMessage("");

    try {
      const data = await request(`/api/admin/announcements/${item.id}`, {
        method: "PUT",
        body: JSON.stringify({
          date: item.date,
          category: item.category,
          reference: item.reference || "",
          title: item.title,
          description: item.description || "",
          pdfUrl: item.pdfUrl || "",
          registrationUrl: item.registrationUrl || "",
          isLatest: Boolean(item.isLatest),
          isPublished: !item.isPublished,
        }),
      });

      setMessage(data.message || "Publication status updated.");
      await loadAnnouncements();
    } catch (err) {
      setError(err.message || "Could not update publication status.");
    }
  }

  async function deleteAnnouncement(item) {
    if (!window.confirm(`Delete "${item.title}" permanently?`)) {
      return;
    }

    setError("");
    setMessage("");

    try {
      const data = await request(`/api/admin/announcements/${item.id}`, {
        method: "DELETE",
      });

      if (editingId === item.id) resetForm();

      setMessage(data.message || "Announcement deleted.");
      await loadAnnouncements();
    } catch (err) {
      setError(err.message || "Could not delete announcement.");
    }
  }

  function logout() {
    sessionStorage.removeItem("rcvd_admin_token");
    setToken("");
    setAnnouncements([]);
    resetForm();
    setMessage("");
    setError("");
  }

  if (!token) {
    return (
      <main className="container py-5" style={{ maxWidth: "480px" }}>
        <div className="text-center mb-4">
          <h1 className="h3">RCVD Administration</h1>
          <p className="text-muted">Sign in to manage website announcements.</p>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        <form onSubmit={handleLogin} className="card card-body shadow-sm">
          <div className="mb-3">
            <label htmlFor="login-username" className="form-label">
              Username
            </label>
            <input
              id="login-username"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="container-fluid py-4 px-3 px-lg-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="h3 mb-1">RCVD Admin</h1>
          <p className="text-muted mb-0">Manage website announcements.</p>
        </div>
        <button className="btn btn-outline-secondary" onClick={logout}>
          Log out
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <section className="card shadow-sm mb-4">
        <div className="card-header bg-white py-3">
          <h2 className="h5 mb-0">
            {editingId ? "Edit announcement" : "Add announcement"}
          </h2>
        </div>

        <div className="card-body">
          <form onSubmit={handleSave}>
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label" htmlFor="announcement-date">
                  Date
                </label>
                <input
                  id="announcement-date"
                  type="date"
                  name="date"
                  className="form-control"
                  value={form.date}
                  onChange={updateField}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="announcement-category">
                  Category
                </label>
                <input
                  id="announcement-category"
                  name="category"
                  className="form-control"
                  value={form.category}
                  onChange={updateField}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="announcement-reference">
                  Reference number
                </label>
                <input
                  id="announcement-reference"
                  name="reference"
                  className="form-control"
                  value={form.reference}
                  onChange={updateField}
                />
              </div>

              <div className="col-12">
                <label className="form-label" htmlFor="announcement-title">
                  Title
                </label>
                <input
                  id="announcement-title"
                  name="title"
                  className="form-control"
                  value={form.title}
                  onChange={updateField}
                  maxLength={300}
                  required
                />
              </div>

              <div className="col-12">
                <label
                  className="form-label"
                  htmlFor="announcement-description"
                >
                  Description
                </label>
                <textarea
                  id="announcement-description"
                  name="description"
                  className="form-control"
                  rows="3"
                  value={form.description}
                  onChange={updateField}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="announcement-pdf">
                  PDF URL
                </label>
                <input
                  id="announcement-pdf"
                  name="pdfUrl"
                  type="url"
                  className="form-control"
                  placeholder="/documents/announcement.pdf"
                  value={form.pdfUrl}
                  onChange={updateField}
                />
              </div>

              <div className="col-md-6">
                <label
                  className="form-label"
                  htmlFor="announcement-registration"
                >
                  Registration URL
                </label>
                <input
                  id="announcement-registration"
                  name="registrationUrl"
                  type="url"
                  className="form-control"
                  placeholder="https://..."
                  value={form.registrationUrl}
                  onChange={updateField}
                />
              </div>

              <div className="col-md-6">
                <div className="form-check">
                  <input
                    id="announcement-latest"
                    type="checkbox"
                    name="isLatest"
                    className="form-check-input"
                    checked={form.isLatest}
                    onChange={updateField}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="announcement-latest"
                  >
                    Mark as latest announcement
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-check">
                  <input
                    id="announcement-published"
                    type="checkbox"
                    name="isPublished"
                    className="form-check-input"
                    checked={form.isPublished}
                    onChange={updateField}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="announcement-published"
                  >
                    Published on public website
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <button className="btn btn-primary" disabled={loading}>
                {loading
                  ? "Saving..."
                  : editingId
                    ? "Save changes"
                    : "Add announcement"}
              </button>

              {editingId && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={resetForm}
                >
                  Cancel editing
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="card shadow-sm">
        <div className="card-header bg-white py-3">
          <h2 className="h5 mb-0">Announcements ({announcements.length})</h2>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Status</th>
                <th style={{ minWidth: "220px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((item) => (
                <tr key={item.id}>
                  <td className="text-nowrap">{item.date}</td>
                  <td>
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-muted">
                      {item.category}
                      {item.reference ? ` · ${item.reference}` : ""}
                    </small>
                  </td>
                  <td className="text-nowrap">
                    <span
                      className={`badge ${
                        item.isPublished
                          ? "text-bg-success"
                          : "text-bg-secondary"
                      }`}
                    >
                      {item.isPublished ? "Published" : "Draft"}
                    </span>
                    {item.isLatest && (
                      <span className="badge text-bg-primary ms-1">Latest</span>
                    )}
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-2">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => startEditing(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => togglePublished(item)}
                      >
                        {item.isPublished ? "Unpublish" : "Publish"}
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteAnnouncement(item)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {!loading && announcements.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No announcements found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {loading && (
          <div className="text-muted text-center py-3">Loading...</div>
        )}
      </section>
    </main>
  );
}
