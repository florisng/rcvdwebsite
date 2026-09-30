import rcvdLogo from "../assets/rcvd-logo.png";
import "./css/footer.css";

function Footer() {
  return (
    <footer className="rcvd-footer">
      <div className="container">
        <div className="rcvd-footer-main">
          {/* ========================================
              COLUMN 1 — BRAND & CONTACT
          ======================================== */}

          <div className="rcvd-footer-brand">
            <div className="rcvd-footer-brand-header">
              <img
                src={rcvdLogo}
                alt="Rwanda Council of Veterinary Doctors"
                className="rcvd-footer-logo"
              />

              <h3>
                Rwanda Council
                <span>of Veterinary Doctors</span>
              </h3>
            </div>

            <p className="rcvd-footer-description">
              Promoting professional standards, continuous development, and
              quality veterinary services for a healthier Rwanda.
            </p>

            <div className="rcvd-footer-contact">
              <a href="mailto:info@rcvd.rw">
                <span className="rcvd-footer-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <span>info@rcvd.rw</span>
              </a>

              <a href="tel:+250788883525">
                <span className="rcvd-footer-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                <span>+250 788 88 35 25</span>
              </a>

              <span>
                <span className="rcvd-footer-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span>Kigali, Rwanda</span>
              </span>
            </div>

            {/* ========================================
                SOCIAL MEDIA
            ======================================== */}

            <div className="rcvd-footer-social">
              <a
                href="https://www.facebook.com/RwandaVetsDoctors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@rcvdrw/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z" />
                </svg>
              </a>

              <a
                href="https://x.com/RwandaVets1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="rcvd-x-icon"
                  aria-hidden="true"
                >
                  <path d="M5 4l14 16M19 4 5 20" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================
              COLUMN 2 — NAVIGATION
          ======================================== */}

          <div className="rcvd-footer-navigation">
            <div className="rcvd-footer-nav-group">
              <h4>Quick Links</h4>

              <a href="/">Home</a>
              <a href="/#about">About RCVD</a>
              <a href="/#services">Services</a>
              <a href="/board-members">Board Members</a>
              <a href="/#contact">Contact Us</a>
            </div>

            <div className="rcvd-footer-nav-group">
              <h4>Publication</h4>

              <a href="/#announcements">Announcements</a>
              <a href="/legal-documents">Legal Documents</a>
              <a href="/jobs">Jobs</a>
            </div>

            <div className="rcvd-footer-nav-group">
              <h4>CPD</h4>

              <a href="/service-providers">Service Providers</a>
              <a href="/pcd-forums">CPD Forums</a>
              <a href="/cpd-guidelines">CPD Guidelines</a>

              <a
                href="https://rcvd-elearning.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Learning
              </a>
            </div>
          </div>

          {/* ========================================
              COLUMN 3 — MAP
          ======================================== */}

          <div className="rcvd-footer-map">
            <h4>Our Location</h4>

            <div className="rcvd-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5301824894195!2d30.085928274050133!3d-1.9405414366892562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6bfebc910bd%3A0x6261e51cfaaa7f7d!2sMinistry%20of%20Agriculture%20and%20Animal%20Resources!5e0!3m2!1sen!2srw!4v1790749723695!5m2!1sen!2srw"
                title="Rwanda Council of Veterinary Doctors location"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="rcvd-footer-bottom">
          <span>
            © 2026 Rwanda Council of Veterinary Doctors. All rights reserved.
          </span>

          <span>Professional Veterinary Regulation in Rwanda</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
