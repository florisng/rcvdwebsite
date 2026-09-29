import Reveal from "../Reveal";
import "./css/cpd-guidelines.css";

function CpdGuidelines() {
  return (
    <main className="rcvd-cpd-guidelines-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>CPD Guidelines</span>
              </div>

              <h1>CPD Guidelines</h1>

              <p>
                Access guidance and information supporting veterinary
                professionals and CPD service providers in meeting continuing
                professional development requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-cpd-guidelines-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Continuous Professional Development</span>

              <h2>CPD Guidelines &amp; Requirements</h2>

              <p>
                RCVD CPD guidelines provide a framework for professional
                development activities and help veterinary professionals
                maintain and strengthen their knowledge, skills, and
                competencies.
              </p>
            </div>
          </Reveal>

          <div className="rcvd-guidelines-grid">
            <Reveal direction="left" delay={0.1}>
              <article className="rcvd-guideline-card">
                <div className="rcvd-guideline-number">01</div>

                <div className="rcvd-guideline-content">
                  <h3>CPD Requirements</h3>

                  <p>
                    Information about CPD requirements and professional
                    development expectations will be provided here.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <article className="rcvd-guideline-card">
                <div className="rcvd-guideline-number">02</div>

                <div className="rcvd-guideline-content">
                  <h3>Approved Activities</h3>

                  <p>
                    Guidance on recognized CPD activities and learning
                    opportunities for veterinary professionals will be published
                    here.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <article className="rcvd-guideline-card">
                <div className="rcvd-guideline-number">03</div>

                <div className="rcvd-guideline-content">
                  <h3>CPD Records</h3>

                  <p>
                    Information on recording, maintaining, and demonstrating
                    professional development activities will be available here.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <article className="rcvd-guideline-card">
                <div className="rcvd-guideline-number">04</div>

                <div className="rcvd-guideline-content">
                  <h3>Service Provider Guidance</h3>

                  <p>
                    Guidance for organizations providing recognized CPD
                    activities to veterinary professionals will be published
                    here.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="rcvd-guidelines-notice">
              <strong>Guidelines and documents coming soon</strong>

              <p>
                Official RCVD CPD guidelines and related documents will be made
                available on this page when published.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default CpdGuidelines;
