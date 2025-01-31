import { createContext, useState, useContext, ReactNode } from "react";

const flags = {
  English: { title: "English", flag: "/images/flags/uk.png" },
  Spanish: { title: "Español", flag: "/images/flags/mexico.png" },
  Russian: { title: "Русский", flag: "/images/flags/russia.png" },
  Ukrainian: { title: "Українська", flag: "/images/flags/ukraine.png" },
};

export const menus = {
  English: ["Home", "Our Story", "Wedding Details", "Accommodation", "RSVP"],
  Spanish: ["Inicio", "Nuestra Historia", "Cronograma", "Hospedaje", "Confirmar Asistencia"],
  Russian: ["Главная", "Наша История", "Программа", "Проживание", "Регистрация"],
  Ukrainian: ["Головна", "Наша Історія", "Програма", "Проживання", "Реєстрація"],
};

interface LanguageContextType {
  language: keyof typeof flags; // "English" | "Spanish" | "Russian" | "Ukrainian"
  setLanguage: React.Dispatch<React.SetStateAction<keyof typeof flags>>;
  flags: typeof flags;
  menus: typeof menus;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<keyof typeof flags>("English");
  const value = { language, setLanguage, flags, menus };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};