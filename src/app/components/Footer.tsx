import Image from "next/image";
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
    <footer id="footer" className="h-[240px] lg:h-[540px] flex flex-col justify-center items-center"
    >
      <div className="relative w-screen h-[240px] lg:h-[540px]">
        <Image
          src="/images/footer.jpg"
          alt="hero image"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-sage flex items-center justify-center"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className={`text-2xl lg:text-4xl text-center ${fontClass}`}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {footerTranslations[language].text}
          </motion.h2>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;