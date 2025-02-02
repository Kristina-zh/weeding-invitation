'use client';
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";

import Timer from "./common/Timer/Timer";
import { useLanguage } from "../context/LanguageContext";
import { headerTranslations } from "../translations";

const formatLink = (link: string) => {
  if (link == "Q&A") return "q-and-a"

  return link.toLowerCase().replace(/ /g, "-");
};

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const { language, setLanguage, flags, menus } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageSwitcherOpen, setIsLanguageSwitcherOpen] = useState(false);

  const menuRef = useRef<HTMLLIElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsLanguageSwitcherOpen(false)
  };

  const handleLanguageChange = (lang: keyof typeof flags) => {
    setLanguage(lang);
    setIsLanguageSwitcherOpen(false)
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const englishLinks = menus.English;

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.header
      className="fixed top-0 w-full bg-white shadow-md z-50 max-w-[2000px]"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <div className="max-w-xl lg:max-w-6xl mx-auto flex justify-between items-center">
          <div className="h-[80px] lg:w-[240px] relative">
            <p className="text-sm font-nunito absolute top-1 ml-[46px] lg:ml-0">{headerTranslations[language].countdownText}:</p>
            <div className="ml-[-40px] lg:ml-[-85px] mt-2 lg:mt-0">
              <Timer date="2025-10-25T14:00:00" />
            </div>
          </div>

          <ul className="hidden lg:flex space-x-8 items-center font-nunito">
            {menus[language].map((item, index) => {
              const englishLink = englishLinks[index];
              const sectionId = formatLink(englishLink);

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ScrollLink
                      to={sectionId}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className={`cursor-pointer transition-all duration-300 ${activeSection === sectionId
                        ? `text-green-700 text-2xl ${fontClass}`
                        : 'text-black hover:text-green-700'
                        }`}
                    >
                      {item}
                    </ScrollLink>
                  </motion.div>
                </motion.li>
              );
            })}

            <li ref={menuRef} className="relative">
              <button
                onClick={() => setIsLanguageSwitcherOpen(!isLanguageSwitcherOpen)}
                className="flex items-center space-x-2 hover:text-green-700 transition"
              >
                <Image
                  src={flags[language].flag}
                  alt={language}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>{flags[language].title}</span>
                <span className="text-sm">▼</span>
              </button>

              {isLanguageSwitcherOpen && (
                <ul className="absolute right-0 bg-white shadow-lg mt-2 py-2 w-40 rounded-lg">
                  {Object.entries(flags).map(([lang, { flag, title }]) => (
                    <li
                      key={lang}
                      className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange(lang as keyof typeof flags)}
                    >
                      <Image
                        src={flag}
                        alt={lang}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full mr-2"
                      />
                      {title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="lg:hidden text-3xl hover:text-green-700 transition flex-1"
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <ul className="lg:hidden bg-white shadow-md rounded-lg pb-6 space-y-4 text-center font-nunito">
            {menus[language].map((item, index) => {
              const englishLink = englishLinks[index];
              const sectionId = formatLink(englishLink);

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ScrollLink
                      to={sectionId}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="block text-lg text-black hover:text-green-700 transition"
                    >
                      {item}
                    </ScrollLink>
                  </motion.div>
                </motion.li>
              );
            })}

            <li ref={menuRef} className="relative">
              <button
                onClick={() => setIsLanguageSwitcherOpen(!isLanguageSwitcherOpen)}
                className="flex items-center space-x-2 hover:text-green-700 transition mx-auto"
              >
                <Image
                  src={flags[language].flag}
                  alt={language}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full"
                />
                <span>{flags[language].title}</span>
                <span className="text-sm">▼</span>
              </button>

              {isLanguageSwitcherOpen && (
                <ul className="absolute right-0 bg-white shadow-custom mt-2 py-2 w-40 rounded-lg left-[40%]">
                  {Object.entries(flags).map(([lang, { flag, title }]) => (
                    <li
                      key={lang}
                      className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange(lang as keyof typeof flags)}
                    >
                      <Image
                        src={flag}
                        alt={lang}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full mr-2"
                      />
                      {title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;