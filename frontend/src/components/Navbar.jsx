import { useState } from "react";
import rcvdLogo from "../assets/rcvd-logo.png";
import "./css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="rcvd-header">
      <div className="rcvd-navigation">
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

            <nav className={`rcvd-nav ${menuOpen ? "open" : ""}`}>
              <a href="/" className="rcvd-nav-link active">
                Home
              </a>

              <div className="rcvd-nav-dropdown">
                <button className="rcvd-nav-link" type="button">
                  About Us
                  <span className="rcvd-chevron"></span>
                </button>

                <div className="rcvd-dropdown-menu">
                  <a href="/#about">RCVD</a>
                  <a href="/#services">Services</a>
                  <a href="/board-members">Board Members</a>
                  <a href="/#contact">Contact Us</a>
                </div>
              </div>

              <div className="rcvd-nav-dropdown">
                <button className="rcvd-nav-link" type="button">
                  Publication
                  <span className="rcvd-chevron"></span>
                </button>

                <div className="rcvd-dropdown-menu">
                  <a href="/#announcements">Announcements</a>
                  <a href="/legal-documents">Legal Documents</a>
                  <a href="/jobs">Jobs</a>
                </div>
              </div>

              <div className="rcvd-nav-dropdown">
                <button className="rcvd-nav-link" type="button">
                  CPD
                  <span className="rcvd-chevron"></span>
                </button>

                <div className="rcvd-dropdown-menu">
                  <a href="/service-providers">Service Providers</a>
                  <a href="/pcd-forums">CPD Forums</a>
                  <a href="/cpd-guidelines">CPD Guidelines</a>
                </div>
              </div>

              <div className="rcvd-nav-dropdown">
                <button className="rcvd-nav-link" type="button">
                  Veterinary
                  <span className="rcvd-chevron"></span>
                </button>

                <div className="rcvd-dropdown-menu">
                  <a href="/sanitary">Sanitary</a>
                  <a href="/mandate">Mandate</a>
                </div>
              </div>

              <div className="rcvd-nav-dropdown">
                <button className="rcvd-nav-link" type="button">
                  English
                  <span className="rcvd-chevron"></span>
                </button>

                <div className="rcvd-dropdown-menu">
                  <a href="#ki">Ikinyarwanda</a>
                  <a href="/#fr">Francais</a>
                </div>
              </div>
            </nav>

            <a
              href="https://rcvd-elearning.netlify.app/"
              className="rcvd-learning-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Learning
              <span>→</span>
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
    </header>
  );
}

export default Navbar;
