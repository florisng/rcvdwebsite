import Reveal from "../Reveal";
import minagriLogo from "../assets/minagri.jpeg";
import rabLogo from "../assets/rab.png";
import urLogo from "../assets/ur.png";
import "./css/partners-section.css";

function PartnersSection() {
  const partners = [
    {
      name: "MINAGRI",
      description: "Ministry of Agriculture and Animal Resources",
      logo: minagriLogo,
    },
    {
      name: "RAB",
      description: "Rwanda Agriculture and Animal Resources Development Board",
      logo: rabLogo,
    },
    {
      name: "University of Rwanda",
      description: "Supporting veterinary education and professional training",
      logo: urLogo,
    },
    {
      name: "Veterinary Professionals",
      description: "Veterinary doctors and professionals across Rwanda",
      logo: null,
    },
  ];

  return (
    <section className="rcvd-partners-section">
      <div className="container">
        <Reveal direction="up">
          <div className="rcvd-section-heading">
            <span className="rcvd-section-label">Our Network</span>

            <h2>Working Together for Veterinary Excellence</h2>

            <p>
              RCVD works with institutions, professionals, and stakeholders to
              strengthen veterinary practice and animal health services in
              Rwanda.
            </p>
          </div>
        </Reveal>

        <div className="rcvd-partners-grid">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} direction="up" delay={index * 0.15}>
              <div className="rcvd-partner-item">
                <div className="rcvd-partner-mark">
                  {partner.logo ? (
                    <img src={partner.logo} alt={`${partner.name} logo`} />
                  ) : (
                    partner.name.charAt(0)
                  )}
                </div>

                <div>
                  <h3>{partner.name}</h3>

                  <p>{partner.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
