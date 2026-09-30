import { useEffect, useState } from "react";
import Reveal from "../Reveal";

import image1 from "../assets/homepage/image-1.jfif";
import image2 from "../assets/homepage/image-2.jfif";
import image3 from "../assets/homepage/image-3.jfif";
import image4 from "../assets/homepage/image-4.jfif";
import image5 from "../assets/homepage/image-5.jpg";

import "./css/institutional-section.css";

const images = [image1, image2, image3, image4, image5];

function InstitutionalSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  };

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % images.length);
  };

  return (
    <section className="rcvd-institutional">
      {/* <Reveal direction="up"> */}
      <div className="rcvd-institutional-slider">
        <div className="rcvd-institutional-slides">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Veterinary professionals in Rwanda - ${index + 1}`}
              className={`rcvd-institutional-slide ${
                index === currentImage ? "active" : ""
              }`}
            />
          ))}

          <div className="rcvd-institutional-overlay"></div>

          <div className="rcvd-institutional-content">
            <span className="rcvd-section-label">RCVD</span>

            <h2>Rwanda Council of Veterinary Doctors</h2>

            <p>
              Regulating, supporting, and advancing the veterinary profession in
              Rwanda.
            </p>
          </div>

          <button
            type="button"
            className="rcvd-slider-arrow rcvd-slider-prev"
            onClick={previousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            className="rcvd-slider-arrow rcvd-slider-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="rcvd-slider-dots">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`rcvd-slider-dot ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Show image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      {/* </Reveal> */}

      <div className="container">
        <div className="row g-4 rcvd-institutional-cards">
          <div className="col-lg-4">
            {/* <Reveal direction="left" delay={0.1}> */}
            <article className="rcvd-institutional-card">
              <div className="rcvd-institutional-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M12 3L4 7v5c0 4.8 3.4 7.8 8 9 4.6-1.2 8-4.2 8-9V7l-8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>

              <h3>Veterinary Professional Regulation</h3>

              <p>
                Promoting professional standards, ethical practice, and
                accountability among veterinary professionals in Rwanda.
              </p>

              <a href="/mandate" className="rcvd-institutional-link">
                Read more <span>→</span>
              </a>
            </article>
            {/* </Reveal> */}
          </div>

          <div className="col-lg-4">
            {/* <Reveal direction="up" delay={0.2}> */}
            <article className="rcvd-institutional-card">
              <div className="rcvd-institutional-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M4 19h16" />
                  <path d="M6 17V7l6-4 6 4v10" />
                  <path d="M9 17v-4h6v4" />
                  <path d="M9 9h.01M12 9h.01M15 9h.01" />
                </svg>
              </div>

              <h3>Continuous Professional Development</h3>

              <p>
                Supporting veterinary professionals through CPD programmes,
                learning opportunities, professional forums, and skills
                development.
              </p>

              <a href="/cpd-guidelines" className="rcvd-institutional-link">
                Read more <span>→</span>
              </a>
            </article>
            {/* </Reveal> */}
          </div>

          <div className="col-lg-4">
            {/* <Reveal direction="right" delay={0.3}> */}
            <article className="rcvd-institutional-card">
              <div className="rcvd-institutional-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M12 3l8 4v5c0 4.8-3.4 7.8-8 9-4.6-1.2-8-4.2-8-9V7l8-4z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>

              <h3>Veterinary Standards &amp; Services</h3>

              <p>
                Supporting quality veterinary practice through professional
                guidance, standards, certification, and collaboration with
                relevant institutions.
              </p>

              <a href="/service-providers" className="rcvd-institutional-link">
                Read more <span>→</span>
              </a>
            </article>
            {/* </Reveal> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstitutionalSection;
