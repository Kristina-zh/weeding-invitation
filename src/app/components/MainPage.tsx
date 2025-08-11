import Header from "./Header";
import Home from "./Home";
import OurStory from "./OurStory";
import WeddingDetails from "./Wedding";
import Accommodations from "./Accomodation";
import Registration from "./RSVP";
import Footer from "./Footer";
import useActiveSection from '../useActiveSection';

const MainPage = () => {
  const sectionIds = ["home", "our-story", "wedding-details", "accommodation", "rsvp", "footer"];
  const activeSection = useActiveSection(sectionIds) as string;

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="max-w-[2000px]">
        <Home />
        <OurStory />
        <WeddingDetails />
        <Accommodations />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;