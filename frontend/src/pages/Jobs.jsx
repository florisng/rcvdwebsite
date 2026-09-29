import Reveal from "../Reveal";
import "./css/jobs.css";

function Jobs() {
  return (
    <main className="rcvd-jobs-page">
      <section className="rcvd-page-hero">
        <div className="container">
          <Reveal direction="left">
            <div className="rcvd-page-hero-content">
              <div className="rcvd-page-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <span>Jobs</span>
              </div>

              <h1>Jobs</h1>

              <p>
                Explore career opportunities, vacancies, and professional
                opportunities published by the Rwanda Council of Veterinary
                Doctors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rcvd-jobs-content">
        <div className="container">
          <Reveal direction="up">
            <div className="rcvd-section-heading">
              <span>Careers</span>

              <h2>Career Opportunities</h2>

              <p>
                Find current employment opportunities and other professional
                opportunities relevant to the veterinary sector.
              </p>
            </div>
          </Reveal>

          <Reveal direction="zoom" delay={0.2}>
            <div className="rcvd-jobs-empty">
              <div className="rcvd-jobs-empty-icon">💼</div>

              <h3>No Current Vacancies</h3>

              <p>
                There are currently no job vacancies published by RCVD. Please
                check this page regularly for new opportunities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Jobs;
