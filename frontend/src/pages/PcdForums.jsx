import Reveal from "../Reveal";
import "./css/pcd-forums.css";

function PcdForums() {
  return (
    <main className="rcvd-pcd-forums-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>CPD Forums</span>
              </div>

              <h1>CPD Forums</h1>

              <p>
                Stay informed about continuing professional development forums,
                discussions, and learning opportunities for veterinary
                professionals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-pcd-forums-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Continuous Professional Development</span>

              <h2>CPD Forums</h2>

              <p>
                RCVD CPD forums provide opportunities for veterinary
                professionals to share knowledge, discuss emerging issues, and
                strengthen professional practice.
              </p>
            </div>
          </Reveal>

          <div className="rcvd-forums-grid">
            <Reveal direction="left" delay={0.1}>
              <article className="rcvd-forum-card">
                <div className="rcvd-forum-date">
                  <span>CPD</span>
                </div>

                <div className="rcvd-forum-content">
                  <span className="rcvd-forum-label">Forum</span>

                  <h3>CPD Forum Information</h3>

                  <p>
                    Information about upcoming CPD forums and related activities
                    will be published here.
                  </p>

                  <span className="rcvd-forum-status">
                    Information coming soon
                  </span>
                </div>
              </article>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <article className="rcvd-forum-card">
                <div className="rcvd-forum-date">
                  <span>CPD</span>
                </div>

                <div className="rcvd-forum-content">
                  <span className="rcvd-forum-label">Forum</span>

                  <h3>Professional Discussion</h3>

                  <p>
                    Future professional discussions and CPD events will be
                    announced on this page.
                  </p>

                  <span className="rcvd-forum-status">
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

export default PcdForums;
