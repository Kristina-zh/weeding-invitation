import { createContext, useState, useContext, ReactNode } from "react";

const flags = {
  English: { title: "English", flag: "/images/flags/uk.png" },
  Spanish: { title: "Español", flag: "/images/flags/mexico.png" },
  Russian: { title: "Русский", flag: "/images/flags/russia.png" },
  Ukrainian: { title: "Українська", flag: "/images/flags/ukraine.png" },
};

export const menus = {
  English: ["Home", "Our Story", "Wedding Details", "Accommodation"],
  Spanish: ["Inicio", "Nuestra Historia", "Detalles de la Boda", "Hospedaje"],
  Russian: ["Главная", "Наша История", "Детали Свадьбы", "Проживание"],
  Ukrainian: ["Головна", "Наша Історія", "Деталі Весілля", "Проживання"],
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
  initialLanguage?: keyof typeof flags;
}

export const LanguageProvider = ({ children, initialLanguage = "English" }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<keyof typeof flags>(initialLanguage);
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