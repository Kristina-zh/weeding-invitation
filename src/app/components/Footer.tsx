import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { footerTranslations } from "../translations";

const Footer = () => {
  const { language } = useLanguage()

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <footer id="footer" className="bg-black w-screen max-w-[2000px] h-[100px] lg:h-[200px] flex flex-col justify-center items-center"
    >
      <motion.div
        className="flex items-center justify-center"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className={`text-white text-2xl lg:text-4xl text-center ${fontClass}`}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {footerTranslations[language].text}
        </motion.h2>
      </motion.div>
    </footer>
  );
};

export default Footer;