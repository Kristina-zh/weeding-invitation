"use client"
import Schedule from "../components/Schedule";
import { LanguageProvider } from "../context/LanguageContext";

const MainPage = () => {
  return (
    <LanguageProvider>
      <main>
        <Schedule />
      </main>
    </LanguageProvider>
  );
};

export default MainPage;