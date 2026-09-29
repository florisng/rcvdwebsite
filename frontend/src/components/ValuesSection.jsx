import Reveal from "../Reveal";
import "./css/values-section.css";

function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "Professionalism",
      description:
        "Promoting high professional standards and ethical veterinary practice.",
    },
    {
      number: "02",
      title: "Integrity",
      description:
        "Encouraging honesty, responsibility, and ethical conduct in professional practice.",
    },
    {
      number: "03",
      title: "Accountability",
      description:
        "Supporting responsible practice and commitment to professional obligations.",
    },
    {
      number: "04",
      title: "Excellence in Service",
      description:
        "Striving for quality and continuous improvement in veterinary services.",
    },
    {
      number: "05",
      title: "Teamwork & Collaboration",
      description:
        "Working with professionals, institutions, and partners to strengthen veterinary practice.",
    },
  ];

  return (
    <section className="rcvd-values-section" id="values">
      <div className="container">
        <Reveal direction="up">
          <div className="rcvd-section-heading">
            <span className="rcvd-section-label">Our Values</span>

            <h2>Principles That Guide Our Work</h2>

            <p>
              RCVD is guided by professional values that support responsible,
              ethical, and high-quality veterinary practice.
            </p>
          </div>
        </Reveal>

        <div className="rcvd-values-grid">
          {values.map((value, index) => (
            <Reveal
              key={value.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.12}
            >
              <div className="rcvd-value-item">
                <span className="rcvd-value-number">{value.number}</span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
