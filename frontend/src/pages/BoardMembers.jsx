import Reveal from "../Reveal";
import "./css/board-members.css";

function BoardMembers() {
  const boardMembers = [
    {
      image: "/staff/img-1.webp",
      name: "Dr KAYUMBA Charles",
      role: "Chairperson",
    },
    {
      image: "/staff/img-2.webp",
      name: "Dr MPATSWENUMUGABO MUGANGA Jean Pierre, PhD",
      role: "Vice Chairperson",
    },
    {
      image: "/staff/img-3.webp",
      name: "Dr UWITONZE Marie Louise",
      role: "Secretary",
    },
    {
      image: "/staff/img-4.webp",
      name: "Dr NSHIMIYUKIZA Ossniel",
      role: "Treasurer",
    },
    {
      image: "/staff/img-5.webp",
      name: "Dr NDIKUMANA Bonaventure",
      role: "NCB-RCB South",
    },
    {
      image: "/staff/img-6.webp",
      name: "Dr SINGANDA Joseph",
      role: "NCB-RCB South",
    },
    {
      image: "/staff/img-7.webp",
      name: "Dr NIYONSABA Oscar",
      role: "NCB-RCB West",
    },
    {
      image: "/staff/img-8.webp",
      name: "Dr MBAGA Daniel",
      role: "NCB-RCB North",
    },
    {
      image: "/staff/img-9.webp",
      name: "Dr MUSABYEMARIYA Winfride",
      role: "NCB-RCB North",
    },
    {
      image: "/staff/img-10.webp",
      name: "Dr RUTAGANIRA Wilson",
      role: "NCB-RCB CoK",
    },
  ];

  const executiveStaff = [
    {
      image: "/staff/img-11.webp",
      name: "Dr NSHIMIYIMANA Alphonse M.",
      role: "Executive Secretary",
      phone: "0788 506 713",
      email: "namumc@yahoo.fr",
    },
    {
      image: "/staff/img-12.webp",
      name: "Dr NTAMUGABUMWE Laurien",
      role: "Head of Department of Research & Professional Development",
      phone: "0788 604 614",
      email: "nlaurien2017@gmail.com",
    },
    {
      image: "/staff/img-13.webp",
      name: "Mrs UWONKUNDA Ancille",
      role: "Accountant",
      email: "ancillarw@yahoo.fr",
    },
    {
      image: "/staff/img-14.webp",
      name: "Mr NIYOKWIZERWA Elisa",
      role: "Assistant Accountant Secretary",
      phone: "0788 336 729",
      email: "info@rcvd.rw",
    },
    {
      image: "/staff/img-15.webp",
      name: "Mrs TWAMUGIZE Christiane",
      role: "Customer Care & In Charge of Logistics",
      email: "twamuchristine@gmail.com",
    },
    {
      image: "/staff/img-16.webp",
      name: "Mr KAZENGA Hervé",
      role: "Driver",
      email: "info@rcvd.rw",
    },
  ];

  return (
    <div className="rcvd-board-page">
      <main>
        {/* ========================================
            PAGE HERO
        ======================================== */}

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

        {/* ========================================
            BOARD MEMBERS
        ======================================== */}

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
              {boardMembers.map((member, index) => (
                <Reveal
                  key={member.name}
                  direction="up"
                  delay={0.1 + index * 0.08}
                >
                  <article className="rcvd-board-card">
                    <div className="rcvd-board-photo-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rcvd-board-photo"
                      />
                    </div>

                    <div className="rcvd-board-card-content">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
            EXECUTIVE SECRETARIAT
        ======================================== */}

        <section className="rcvd-staff-content">
          <div className="container">
            <Reveal direction="up">
              <div className="rcvd-section-heading">
                <span>Executive Secretariat</span>

                <h2>The Staff of the Executive Secretariat</h2>

                <p>
                  The Executive Secretariat supports the Council's daily
                  operations and the implementation of its professional and
                  administrative responsibilities.
                </p>
              </div>
            </Reveal>

            <div className="rcvd-staff-grid">
              {executiveStaff.map((staff, index) => (
                <Reveal
                  key={staff.name}
                  direction="up"
                  delay={0.1 + index * 0.08}
                >
                  <article className="rcvd-staff-card">
                    <div className="rcvd-staff-photo-wrapper">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="rcvd-staff-photo"
                      />
                    </div>

                    <div className="rcvd-staff-card-content">
                      <h3>{staff.name}</h3>

                      <p className="rcvd-staff-role">{staff.role}</p>

                      {staff.phone && (
                        <a href={`tel:${staff.phone.replace(/\s/g, "")}`}>
                          {staff.phone}
                        </a>
                      )}

                      <a href={`mailto:${staff.email}`}>{staff.email}</a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BoardMembers;
