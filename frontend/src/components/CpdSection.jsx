import "../css/cpd-section.css";

function CpdSection() {
  return (
    <section className="rcvd-cpd-section" id="cpd">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="rcvd-cpd-content">
              <span className="rcvd-section-label">
                Continuous Professional Development
              </span>

              <h2>Keep Learning. Keep Growing. Keep Improving.</h2>

              <p className="rcvd-cpd-lead">
                RCVD supports veterinary professionals in maintaining and
                strengthening their knowledge, skills, and professional practice
                through continuous professional development.
              </p>

              <p>
                Access professional learning opportunities, CPD activities,
                guidelines, forums, and resources designed to support veterinary
                professionals throughout their careers.
              </p>

              <a href="#learning" className="rcvd-cpd-button">
                Explore Learning
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rcvd-cpd-panel">
              <div className="rcvd-cpd-panel-header">
                <span>RCVD CPD</span>
                <strong>Professional Development</strong>
              </div>

              <div className="rcvd-cpd-item">
                <div className="rcvd-cpd-icon">01</div>

                <div>
                  <strong>Learn</strong>
                  <span>
                    Access relevant professional learning opportunities.
                  </span>
                </div>
              </div>

              <div className="rcvd-cpd-item">
                <div className="rcvd-cpd-icon">02</div>

                <div>
                  <strong>Develop</strong>
                  <span>
                    Strengthen your knowledge and professional skills.
                  </span>
                </div>
              </div>

              <div className="rcvd-cpd-item">
                <div className="rcvd-cpd-icon">03</div>

                <div>
                  <strong>Advance</strong>
                  <span>
                    Continue growing throughout your veterinary career.
                  </span>
                </div>
              </div>

              <div className="rcvd-cpd-panel-footer">
                <span>Professional growth through continuous learning</span>
                <span>✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CpdSection;
