import rcvdLogo from "../assets/rcvd-logo.png";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="rcvd-footer">
      <div className="container">
        <div className="rcvd-footer-main">
          <div className="rcvd-footer-brand">
            <img
              src={rcvdLogo}
              alt="Rwanda Council of Veterinary Doctors"
              className="rcvd-footer-logo"
            />

            <h3>
              Rwanda Council of
              <span>Veterinary Doctors</span>
            </h3>

            <p>
              Promoting professional standards, continuous development, and
              quality veterinary services for a healthier Rwanda.
            </p>
          </div>

          <div className="rcvd-footer-column">
            <h4>Quick Links</h4>

            <a href="/">Home</a>
            <a href="/about">About RCVD</a>
            <a href="/services">Services</a>
            <a href="/board-members">Board Members</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="rcvd-footer-column">
            <h4>Publication</h4>

            <a href="/announcements">Announcements</a>
            <a href="/legal-documents">Legal Documents</a>
            <a href="/jobs">Jobs</a>
          </div>

          <div className="rcvd-footer-column">
            <h4>CPD</h4>

            <a href="/cpd/providers">Service Providers</a>
            <a href="/cpd/forums">CPD Forums</a>
            <a href="/cpd/guidelines">CPD Guidelines</a>
            <a href="https://rcvd-elearning.netlify.app/">Start Learning</a>
          </div>

          <div className="rcvd-footer-column rcvd-footer-contact">
            <h4>Contact</h4>

            <a href="mailto:info@rcvd.rw">info@rcvd.rw</a>

            <a href="tel:+250788883525">+250 788 88 35 25</a>

            <span>Kigali, Rwanda</span>
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
