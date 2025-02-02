"use client"
import Header from "./components/Header";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import WeddingDetails from "./components/Wedding";
import Accommodations from "./components/Accomodation";
import Registration from "./components/RSVP";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import useActiveSection from './useActiveSection';

const MainPage = () => {
  const sectionIds = ["home", "our-story", "wedding-details", "accommodation", "rsvp", "footer"];
  const activeSection = useActiveSection(sectionIds) as string;

  return (
    <LanguageProvider>
      <Header activeSection={activeSection} />
      <main className="max-w-[2000px]">
        <Home />
        <OurStory />
        <WeddingDetails />
        <Accommodations />
        <Registration />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default MainPage;