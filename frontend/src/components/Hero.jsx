import "../css/hero.css";

function Hero() {
  return (
    <section className="rcvd-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="rcvd-hero-content">
              <span className="rcvd-hero-badge">
                Rwanda Council of Veterinary Doctors
              </span>

              <h1>
                Advancing Veterinary
                <span> Excellence in Rwanda</span>
              </h1>

              <p>
                Promoting professional standards, continuous development, and
                quality veterinary services for a healthier Rwanda.
              </p>

              <div className="rcvd-hero-actions">
                <a href="#about" className="rcvd-btn-primary">
                  Discover RCVD
                </a>

                <a
                  href="https://rcvd-elearning.netlify.app/"
                  className="rcvd-btn-outline"
                >
                  Start Learning
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="rcvd-hero-visual">
              <div className="rcvd-hero-card">
                <div className="rcvd-hero-card-icon">✓</div>

                <div>
                  <strong>Professional Excellence</strong>
                  <span>Supporting veterinary professionals across Rwanda</span>
                </div>
              </div>

              <div className="rcvd-hero-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
