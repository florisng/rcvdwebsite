import Reveal from "../Reveal";
import "./css/announcements-section.css";

function AnnouncementsSection() {
  const announcements = [
    {
      date: "22/10/2026",
      category: "Official Announcement",
      reference: "Ref No: 190/RCVD/2026",
      title: "ITANGAZO RY'IKIZAMINI.",
      description:
        "Itangazo ryemewe n'Urugaga rw'Abaganga b'Amatungo rirebana n'ikizamini cyo kwiyandikisha mu rugagarw'abaganga.",
      pdfUrl: "/documents/itangazo-190-rcvd-2026.pdf",
      registrationUrl: "https://ee.minagri.gov.rw/x/zkBTDHKL",
      isLatest: true,
    },
    {
      date: "08/09/2026",
      category: "Announcement",
      title: "ITANGAZO RIREBANA N'ABAKOZE IKIZAMINI.",
      description:
        "Important announcement regarding candidates who took the veterinary examination.",
      pdfUrl: "/documents/itangazo-165-rcvd-2026.pdf",
      registrationUrl: "https://ee.minagri.gov.rw/x/zkBTDHKL",
    },
    {
      date: "28/08/2026",
      category: "Announcement",
      title: "FINAL LIST OF REGISTERED CANDIDATES.",
      description:
        "Official final list of candidates registered for the relevant RCVD examination.",
      pdfUrl: "/documents/itangazo-final-list.pdf",
      registrationUrl: "https://ee.minagri.gov.rw/x/zkBTDHKL",
    },
    {
      date: "29/07/2026",
      category: "Official Notice",
      title: "Ref No: 143/RCVD/2026",
      description:
        "Official communication from the Rwanda Council of Veterinary Doctors.",
      pdfUrl: "/documents/itangazo-143-rcvd-2026.pdf",
      registrationUrl: "https://ee.minagri.gov.rw/x/zkBTDHKL",
    },
    {
      date: "20/02/2026",
      category: "Registration",
      title: "Ref No: 060/RCVD/2026",
      description:
        "Official RCVD communication with an available registration opportunity.",
      pdfUrl: "/documents/itangazo-60-rcvd-2026.pdf",
      registrationUrl: "https://ee.minagri.gov.rw/x/zkBTDHKL",
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
            <div
              className={announcement.isLatest ? "col-12" : "col-lg-4"}
              key={announcement.reference || announcement.title}
            >
              <Reveal direction="up" delay={index * 0.12}>
                <article
                  className={`rcvd-announcement-card ${
                    announcement.isLatest ? "rcvd-announcement-card-latest" : ""
                  }`}
                >
                  <div className="rcvd-announcement-meta">
                    <span>{announcement.category}</span>
                    <time>{announcement.date}</time>
                  </div>

                  {announcement.isLatest && (
                    <span className="rcvd-announcement-latest-badge">
                      NEW ANNOUNCEMENT
                    </span>
                  )}

                  {announcement.reference && (
                    <p className="rcvd-announcement-reference">
                      {announcement.reference}
                    </p>
                  )}

                  <h3>{announcement.title}</h3>

                  <p>{announcement.description}</p>

                  <div className="rcvd-announcement-actions">
                    <a
                      href={announcement.pdfUrl}
                      className="rcvd-announcement-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>📄</span>
                      View Official PDF
                      <span aria-hidden="true">↗</span>
                    </a>

                    {announcement.registrationUrl && (
                      <a
                        href={announcement.registrationUrl}
                        className="rcvd-announcement-register"
                        target="_blank"
                        rel="noopener noreferrer"
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
