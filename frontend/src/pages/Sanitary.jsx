import Reveal from "../Reveal";
import "./css/sanitary.css";

function Sanitary() {
  return (
    <main className="rcvd-sanitary-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Sanitary</span>
              </div>

              <h1>Sanitary</h1>

              <p>
                Information and guidance related to veterinary sanitary
                responsibilities, professional standards, and the protection of
                animal and public health in Rwanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-sanitary-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Veterinary Practice</span>

              <h2>Veterinary Sanitary Standards</h2>

              <p>
                Veterinary professionals play an important role in protecting
                animal health, public health, food safety, and the environment.
                This section will provide relevant sanitary information and
                professional guidance.
              </p>
            </div>
          </Reveal>

          <div className="rcvd-sanitary-grid">
            <Reveal direction="left" delay={0.1}>
              <article className="rcvd-sanitary-card">
                <div className="rcvd-sanitary-icon">01</div>

                <div>
                  <h3>Animal Health</h3>

                  <p>
                    Guidance and information supporting responsible veterinary
                    practice and the prevention and control of animal diseases.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <article className="rcvd-sanitary-card">
                <div className="rcvd-sanitary-icon">02</div>

                <div>
                  <h3>Public Health</h3>

                  <p>
                    Veterinary professionals contribute to protecting
                    communities through disease prevention, surveillance, and
                    responsible veterinary services.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <article className="rcvd-sanitary-card">
                <div className="rcvd-sanitary-icon">03</div>

                <div>
                  <h3>Food Safety</h3>

                  <p>
                    Information related to veterinary responsibilities in food
                    safety and the protection of consumers will be published
                    here.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <article className="rcvd-sanitary-card">
                <div className="rcvd-sanitary-icon">04</div>

                <div>
                  <h3>Professional Guidance</h3>

                  <p>
                    Official sanitary guidance, resources, and relevant
                    professional documents will be made available here.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="rcvd-sanitary-notice">
              <strong>Official information coming soon</strong>

              <p>
                RCVD sanitary guidelines, documents, and other relevant
                resources will be published on this page as they become
                available.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Sanitary;
