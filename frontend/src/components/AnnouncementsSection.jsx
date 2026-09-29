import Reveal from "../Reveal";
import "./css/announcements-section.css";

function AnnouncementsSection() {
  const announcements = [
    {
      date: "08/09/2026",
      category: "Announcement",
      title: "ITANGAZO RIREBANA N'ABAKOZE IKIZAMINI",
      description:
        "Important announcement regarding candidates who took the veterinary examination.",
      pdfUrl: "#",
      registrationUrl: null,
    },
    {
      date: "28/08/2026",
      category: "Announcement",
      title: "FINAL LIST OF REGISTERED CANDIDATES",
      description:
        "Official final list of candidates registered for the relevant RCVD examination.",
      pdfUrl: "#",
      registrationUrl: null,
    },
    {
      date: "29/07/2026",
      category: "Official Notice",
      title: "Ref No: 143/RCVD/2026",
      description:
        "Official communication from the Rwanda Council of Veterinary Doctors.",
      pdfUrl: "#",
      registrationUrl: null,
    },
    {
      date: "20/02/2026",
      category: "Registration",
      title: "Ref No: 060/RCVD/2026",
      description:
        "Official RCVD communication with an available registration opportunity.",
      pdfUrl: "#",
      registrationUrl: "#",
    },
  ];

  return (
    <section className="rcvd-announcements-section" id="announcements">
      <div className="container">
        <Reveal direction="up">
          <div className="rcvd-section-heading">
            <span className="rcvd-section-label">Stay Informed</span>

            <h2>Latest Announcements</h2>

            <p>
              Keep up to date with RCVD announcements, notices, professional
              information, and important updates.
            </p>
          </div>
        </Reveal>

        <div className="row g-4">
          {announcements.map((announcement, index) => (
            <div className="col-lg-4" key={index}>
              <Reveal direction="up" delay={index * 0.12}>
                <article className="rcvd-announcement-card">
                  <div className="rcvd-announcement-meta">
                    <span>{announcement.category}</span>
                    <time>{announcement.date}</time>
                  </div>

                  <h3>{announcement.title}</h3>

                  <p>{announcement.description}</p>

                  <div className="rcvd-announcement-actions">
                    <a
                      href={announcement.pdfUrl}
                      className="rcvd-announcement-link"
                    >
                      <span>📄</span>
                      View PDF
                    </a>

                    {announcement.registrationUrl && (
                      <a
                        href={announcement.registrationUrl}
                        className="rcvd-announcement-register"
                      >
                        <span>📝</span>
                        Register
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal direction="up" delay={0.25}>
          <div className="rcvd-announcements-footer">
            <a href="/announcements" className="rcvd-announcements-button">
              View All Announcements
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AnnouncementsSection;
