import "../css/learning-section.css";

function LearningSection() {
  return (
    <section className="rcvd-learning-section" id="learning">
      <div className="container">
        <div className="rcvd-learning-content">
          <div className="rcvd-learning-text">
            <span className="rcvd-learning-label">RCVD E-Learning</span>

            <h2>
              Continue Your Professional
              <span>Learning Journey</span>
            </h2>

            <p>
              Access online courses, complete assessments, and continue
              developing your professional knowledge through the RCVD E-learning
              platform.
            </p>

            <div className="rcvd-learning-actions">
              <a
                href="https://rcvd-elearning.netlify.app/"
                className="rcvd-learning-primary"
                target="_blank"
              >
                Start Learning
                <span>→</span>
              </a>

              <a href="#cpd" className="rcvd-learning-secondary">
                Explore CPD
              </a>
            </div>
          </div>

          <div className="rcvd-learning-stat">
            <span className="rcvd-learning-stat-number">CPD</span>

            <span className="rcvd-learning-stat-text">
              Learn, develop, and advance your veterinary profession.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
