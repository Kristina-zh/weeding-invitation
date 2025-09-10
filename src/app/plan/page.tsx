"use client"
import EventsMX from "../components/Plan";
import { LanguageProvider } from "../context/LanguageContext";

const MainPage = () => {
  return (
    <LanguageProvider>
      <main>
        <EventsMX />
      </main>
    </LanguageProvider>
  );
};

export default MainPage;