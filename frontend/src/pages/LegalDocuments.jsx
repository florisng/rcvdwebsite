import Reveal from "../Reveal";
import "./css/legal-documents.css";

function LegalDocuments() {
  return (
    <main className="rcvd-legal-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Legal Documents</span>
              </div>

              <h1>Legal Documents</h1>

              <p>
                Access official legal documents, regulations, policies, and
                professional resources issued by the Rwanda Council of
                Veterinary Doctors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-legal-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Resources</span>

              <h2>Official Legal Documents</h2>

              <p>
                This section will provide access to important documents relevant
                to veterinary professionals and stakeholders.
              </p>
            </div>
          </Reveal>

          <Reveal direction="zoom" delay={0.2}>
            <div className="rcvd-legal-empty">
              <div className="rcvd-legal-empty-icon">📄</div>

              <h3>Documents Coming Soon</h3>

              <p>
                Official RCVD legal documents and related resources will be
                published here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default LegalDocuments;
