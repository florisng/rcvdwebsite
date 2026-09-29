import Reveal from "../Reveal";
import "./css/news-section.css";

function NewsSection() {
  const news = [
    {
      date: "09 Sep 2026",
      category: "News",
      title: "RCVD Continues Strengthening Veterinary Professional Standards",
      description:
        "RCVD continues to support professional development, responsible practice, and quality veterinary services across Rwanda.",
    },
    {
      date: "28 Aug 2026",
      category: "Event",
      title: "Veterinary Professionals and Stakeholders Engagement",
      description:
        "An opportunity for veterinary professionals and stakeholders to connect, share knowledge, and strengthen collaboration.",
    },
    {
      date: "20 Feb 2026",
      category: "CPD",
      title: "Continuous Professional Development Opportunities",
      description:
        "Explore professional learning and development opportunities available to veterinary professionals through RCVD.",
    },
  ];

  return (
    <section className="rcvd-news-section" id="news">
      <div className="container">
        <Reveal direction="up">
          <div className="rcvd-news-header">
            <div>
              <span className="rcvd-section-label">News &amp; Events</span>

              <h2>Latest Updates from RCVD</h2>
            </div>

            <a href="/announcements" className="rcvd-news-view-all">
              View All Updates
              <span>→</span>
            </a>
          </div>
        </Reveal>

        <div className="row g-4">
          {news.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <Reveal direction="zoom" delay={index * 0.15}>
                <article className="rcvd-news-card">
                  <div className="rcvd-news-card-top">
                    <span className="rcvd-news-category">{item.category}</span>

                    <span className="rcvd-news-date">{item.date}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="/announcements" className="rcvd-news-link">
                    Read More
                    <span>→</span>
                  </a>
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
