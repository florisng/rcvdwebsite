import Reveal from "../Reveal";
import "./css/contact-cta-section.css";

function ContactCtaSection() {
  return (
    <section className="rcvd-contact-cta-section" id="contact">
      <div className="container">
        <div className="rcvd-contact-cta">
          <Reveal direction="left">
            <div className="rcvd-contact-cta-content">
              <span className="rcvd-contact-cta-label">Get in Touch</span>

              <h2>Have a Question or Need Assistance?</h2>

              <p>
                Contact the Rwanda Council of Veterinary Doctors for
                information, professional guidance, or assistance regarding
                veterinary services and professional development.
              </p>

              <div className="rcvd-contact-cta-info">
                <div className="rcvd-contact-info-item">
                  <span className="rcvd-contact-info-label">Email</span>

                  <a href="mailto:info@rcvd.rw">info@rcvd.rw</a>
                </div>

                <div className="rcvd-contact-info-item">
                  <span className="rcvd-contact-info-label">Phone</span>

                  <a href="tel:+250788883525">+250 788 88 35 25</a>
                </div>

                <div className="rcvd-contact-info-item">
                  <span className="rcvd-contact-info-label">Location</span>

                  <span>Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="rcvd-contact-form-wrapper">
              <form className="rcvd-contact-form">
                <div className="rcvd-contact-form-row">
                  <div className="rcvd-contact-form-group">
                    <label htmlFor="contact-name">Full Name</label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="rcvd-contact-form-group">
                    <label htmlFor="contact-email">Email Address</label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="rcvd-contact-form-group">
                  <label htmlFor="contact-subject">Subject</label>

                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="What is your message about?"
                  />
                </div>

                <div className="rcvd-contact-form-group">
                  <label htmlFor="contact-message">Message</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="rcvd-contact-form-submit">
                  Send Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
