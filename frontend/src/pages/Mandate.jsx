import Reveal from "../Reveal";
import "./css/mandate.css";

function Mandate() {
  return (
    <main className="rcvd-mandate-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Mandate</span>
              </div>

              <h1>RCVD Mandate</h1>

              <p>
                Learn about the mandate of the Rwanda Council of Veterinary
                Doctors and its role in regulating and promoting professional
                veterinary practice in Rwanda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-mandate-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-mandate-intro">
              <span>Veterinary Regulation</span>

              <h2>Our Mandate</h2>

              <p>
                The Rwanda Council of Veterinary Doctors serves to support
                professional standards, ethical practice, and the development of
                the veterinary profession in Rwanda.
              </p>
            </div>
          </Reveal>

          <div className="rcvd-mandate-grid">
            <Reveal direction="left" delay={0.1}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">01</div>

                <h3>Professional Regulation</h3>

                <p>
                  Supporting the regulation of veterinary practice and promoting
                  compliance with applicable professional requirements.
                </p>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">02</div>

                <h3>Professional Standards</h3>

                <p>
                  Promoting high standards of competence, professionalism, and
                  ethical conduct among veterinary professionals.
                </p>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">03</div>

                <h3>Continuous Development</h3>

                <p>
                  Supporting continuous professional development and lifelong
                  learning within the veterinary profession.
                </p>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">04</div>

                <h3>Public Interest</h3>

                <p>
                  Contributing to the protection of animal health, public
                  health, food safety, and the wider interests of society.
                </p>
              </article>
            </Reveal>

            <Reveal direction="left" delay={0.5}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">05</div>

                <h3>Professional Guidance</h3>

                <p>
                  Providing information, guidance, and resources that support
                  veterinary professionals in their responsibilities.
                </p>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.6}>
              <article className="rcvd-mandate-card">
                <div className="rcvd-mandate-number">06</div>

                <h3>Stakeholder Collaboration</h3>

                <p>
                  Working with relevant institutions and stakeholders to
                  strengthen veterinary services and professional practice in
                  Rwanda.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="rcvd-mandate-notice">
              <strong>Official mandate information</strong>

              <p>
                Official RCVD mandate documents and applicable legal references
                will be published here as they become available.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Mandate;
