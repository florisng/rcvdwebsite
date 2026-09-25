import Navbar from "./components/Navbar";
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
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
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
      <Footer />
    </>
  );
}

export default App;
