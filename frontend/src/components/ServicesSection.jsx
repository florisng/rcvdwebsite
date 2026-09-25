import "../css/services-section.css";

function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Professional Regulation",
      description:
        "Promoting professional standards, ethical practice, and responsible veterinary services in Rwanda.",
    },
    {
      number: "02",
      title: "Continuous Professional Development",
      description:
        "Supporting veterinary professionals with opportunities to strengthen their knowledge, skills, and professional practice.",
    },
    {
      number: "03",
      title: "Professional Registration",
      description:
        "Supporting the registration and recognition of veterinary professionals in accordance with applicable requirements.",
    },
    {
      number: "04",
      title: "Veterinary Practice Standards",
      description:
        "Contributing to quality standards and good practices within the veterinary profession.",
    },
    {
      number: "05",
      title: "Professional Guidance",
      description:
        "Providing information, guidance, and resources relevant to veterinary professionals and stakeholders.",
    },
    {
      number: "06",
      title: "Stakeholder Collaboration",
      description:
        "Working with institutions and partners to strengthen the veterinary profession and animal health sector.",
    },
  ];

  return (
    <section className="rcvd-services-section" id="services">
      <div className="container">
        <div className="rcvd-section-heading">
          <span className="rcvd-section-label">What We Do</span>

          <h2>Our Services</h2>

          <p>
            RCVD supports the veterinary profession through regulation,
            professional development, guidance, and collaboration.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.number}>
              <div className="rcvd-service-card">
                <span className="rcvd-service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/services" className="rcvd-service-link">
                  Learn More
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
