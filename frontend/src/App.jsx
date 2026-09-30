import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import InstitutionalSection from "./components/InstitutionalSection";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CpdSection from "./components/CpdSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import ValuesSection from "./components/ValuesSection";
import LearningSection from "./components/LearningSection";
import PartnersSection from "./components/PartnersSection";
import NewsSection from "./components/NewsSection";
import ContactCtaSection from "./components/ContactCtaSection";
import LegalDocuments from "./pages/LegalDocuments";
import Jobs from "./pages/Jobs";
import ServiceProviders from "./pages/ServiceProviders";
import PcdForums from "./pages/PcdForums";
import CpdGuidelines from "./pages/CpdGuidelines";
import Sanitary from "./pages/Sanitary";
import Mandate from "./pages/Mandate";
import Footer from "./components/Footer";

import "./components/css/go-to-top.css";

import BoardMembers from "./pages/BoardMembers";

function Home() {
  return (
    <main>
      <InstitutionalSection />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CpdSection />
      <AnnouncementsSection />
      <ValuesSection />
      <LearningSection />
      <PartnersSection />
      <NewsSection />
      <ContactCtaSection />
    </main>
  );
}

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const scrollToElement = () => {
      const element = document.getElementById(hash.substring(1));

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    setTimeout(scrollToElement, 100);
  }, [hash]);

  return null;
}

function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <button
      className="go-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Go to top"
    >
      Top
    </button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board-members" element={<BoardMembers />} />
        <Route path="/legal-documents" element={<LegalDocuments />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/service-providers" element={<ServiceProviders />} />
        <Route path="/pcd-forums" element={<PcdForums />} />
        <Route path="/cpd-guidelines" element={<CpdGuidelines />} />
        <Route path="/sanitary" element={<Sanitary />} />
        <Route path="/mandate" element={<Mandate />} />
      </Routes>

      <Footer />
      <GoToTop />
    </Router>
  );
}

export default App;
