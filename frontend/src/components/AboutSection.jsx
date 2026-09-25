import "../css/about-section.css";

function AboutSection() {
  return (
    <section className="rcvd-about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="rcvd-about-content">
              <span className="rcvd-section-label">Who We Are</span>

              <h2>Advancing Veterinary Practice in Rwanda</h2>

              <p className="rcvd-about-lead">
                The Rwanda Council of Veterinary Doctors (RCVD) is dedicated to
                promoting professionalism, ethical practice, and quality
                standards within the veterinary profession.
              </p>

              <p>
                Through professional regulation, continuous professional
                development, and collaboration with stakeholders, RCVD
                contributes to strengthening veterinary services and supporting
                the professionals who provide them.
              </p>

              <a href="/about" className="rcvd-about-link">
                Discover RCVD
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rcvd-about-highlight">
              <div className="rcvd-about-highlight-item">
                <div className="rcvd-about-icon">✓</div>

                <div>
                  <strong>Professionalism</strong>
                  <span>
                    Promoting high professional and ethical standards in
                    veterinary practice.
                  </span>
                </div>
              </div>

              <div className="rcvd-about-highlight-item">
                <div className="rcvd-about-icon">+</div>

                <div>
                  <strong>Continuous Development</strong>
                  <span>
                    Supporting veterinary professionals through continuous
                    learning and CPD opportunities.
                  </span>
                </div>
              </div>

              <div className="rcvd-about-highlight-item">
                <div className="rcvd-about-icon">◎</div>

                <div>
                  <strong>Quality &amp; Excellence</strong>
                  <span>
                    Working towards quality veterinary services that benefit
                    animals, communities, and public health.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
