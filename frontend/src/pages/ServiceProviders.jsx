import Reveal from "../Reveal";
import "./css/service-providers.css";

function ServiceProviders() {
  return (
    <main className="rcvd-service-providers-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Service Providers</span>
              </div>

              <h1>CPD Service Providers</h1>

              <p>
                Discover approved continuing professional development service
                providers supporting veterinary professionals in maintaining and
                advancing their knowledge and skills.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-service-providers-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Continuous Professional Development</span>

              <h2>Approved Service Providers</h2>

              <p>
                This section will provide information about organizations and
                institutions offering recognized CPD activities and programs for
                veterinary professionals.
              </p>
            </div>
          </Reveal>

          <div className="rcvd-providers-grid">
            <Reveal direction="left" delay={0.1}>
              <article className="rcvd-provider-card">
                <div className="rcvd-provider-icon">CPD</div>

                <div className="rcvd-provider-content">
                  <h3>Service Provider Information</h3>

                  <p>
                    Approved CPD service provider information will be published
                    here.
                  </p>

                  <span className="rcvd-provider-status">
                    Information coming soon
                  </span>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <article className="rcvd-provider-card">
                <div className="rcvd-provider-icon">CPD</div>

                <div className="rcvd-provider-content">
                  <h3>Service Provider Information</h3>

                  <p>
                    Approved CPD service provider information will be published
                    here.
                  </p>

                  <span className="rcvd-provider-status">
                    Information coming soon
                  </span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceProviders;
