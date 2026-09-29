import Reveal from "../Reveal";
import "./css/board-members.css";

function BoardMembers() {
  return (
    <div className="rcvd-board-page">
      <main>
        <section className="rcvd-page-hero">
          <div className="container">
            <Reveal direction="left">
              <div className="rcvd-page-hero-content">
                <div className="rcvd-page-breadcrumb">
                  <a href="/">Home</a>
                  <span>/</span>
                  <span>Board Members</span>
                </div>

                <h1>Board Members</h1>

                <p>
                  Meet the leadership responsible for guiding the Rwanda Council
                  of Veterinary Doctors and supporting the advancement of
                  professional veterinary practice in Rwanda.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="rcvd-board-content">
          <div className="container">
            <Reveal direction="up">
              <div className="rcvd-section-heading">
                <span>Leadership</span>

                <h2>RCVD Board of Directors</h2>

                <p>
                  The RCVD Board provides leadership and oversight in fulfilling
                  the Council's mandate and promoting high standards of
                  veterinary professionalism.
                </p>
              </div>
            </Reveal>

            <div className="rcvd-board-grid">
              <Reveal direction="up" delay={0.1}>
                <article className="rcvd-board-card">
                  <div className="rcvd-board-photo">RCVD</div>

                  <div className="rcvd-board-card-content">
                    <h3>Board Member</h3>
                    <p>Information coming soon</p>
                  </div>
                </article>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <article className="rcvd-board-card">
                  <div className="rcvd-board-photo">RCVD</div>

                  <div className="rcvd-board-card-content">
                    <h3>Board Member</h3>
                    <p>Information coming soon</p>
                  </div>
                </article>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <article className="rcvd-board-card">
                  <div className="rcvd-board-photo">RCVD</div>

                  <div className="rcvd-board-card-content">
                    <h3>Board Member</h3>
                    <p>Information coming soon</p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BoardMembers;
