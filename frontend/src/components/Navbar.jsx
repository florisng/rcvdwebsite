import { useState } from "react";
import rcvdLogo from "../assets/rcvd-logo.png";
import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="rcvd-header">
      <div className="rcvd-topbar">
        <div className="container">
          <div className="rcvd-topbar-content">
            <div className="rcvd-contact-info">
              <span>✉ info@rcvd.rw</span>
              <span>☎ +250 788 88 35 25</span>
            </div>

            <div className="rcvd-topbar-links">
              <a href="/announcements">Announcements</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="rcvd-main-header">
        <div className="container">
          <div className="rcvd-header-inner">
            <a href="/" className="rcvd-brand">
              <img
                src={rcvdLogo}
                alt="Rwanda Council of Veterinary Doctors"
                className="rcvd-logo"
              />

              <div className="rcvd-brand-name">
                <strong>Rwanda Council</strong>
                <span>of Veterinary Doctors</span>
              </div>
            </a>

            <button
              className="rcvd-menu-toggle"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`rcvd-navigation ${menuOpen ? "open" : ""}`}>
        <div className="container">
          <nav className="rcvd-nav">
            <a href="/" className="rcvd-nav-link active">
              Home
            </a>

            <div className="rcvd-nav-dropdown">
              <button className="rcvd-nav-link">
                About Us
                <span className="rcvd-chevron"></span>
              </button>

              <div className="rcvd-dropdown-menu">
                <a href="/about">RCVD</a>
                <a href="/services">Services</a>
                <a href="/board-members">Board Members</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>

            <div className="rcvd-nav-dropdown">
              <button className="rcvd-nav-link">
                Publication
                <span className="rcvd-chevron"></span>
              </button>

              <div className="rcvd-dropdown-menu">
                <a href="/announcements">Announcements</a>
                <a href="/legal-documents">Legal Documents</a>
                <a href="/jobs">Jobs</a>
              </div>
            </div>

            <div className="rcvd-nav-dropdown">
              <button className="rcvd-nav-link">
                CPD
                <span className="rcvd-chevron"></span>
              </button>

              <div className="rcvd-dropdown-menu">
                <a href="/cpd/providers">Service Providers</a>
                <a href="/cpd/forums">CPD Forums</a>
                <a href="/cpd/guidelines">CPD Guidelines</a>
              </div>
            </div>

            <div className="rcvd-nav-dropdown">
              <button className="rcvd-nav-link">
                Veterinary
                <span className="rcvd-chevron"></span>
              </button>

              <div className="rcvd-dropdown-menu">
                <a href="/veterinary/sanitary">Sanitary</a>
                <a href="/veterinary/mandate">Mandate</a>
              </div>
            </div>

            <a
              href="https://rcvd-elearning.netlify.app/"
              className="rcvd-learning-link"
              target="_blank"
            >
              Start Learning
              <span>→</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
