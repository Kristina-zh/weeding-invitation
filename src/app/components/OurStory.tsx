'use client';
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { ourStoryTranslations } from "../translations";

const OurStory = () => {
  const { language, menus } = useLanguage()

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.2, scale: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.section
      id="our-story"
      className="bg-sage h-full p-10 lg:p-20 flex items-center justify-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.5,
          },
        },
      }}
    >
      <motion.h2
        variants={titleVariants}
        className={`absolute top-0 pr-5 right-0 lg:right-10 text-[40px] lg:text-[100px] text-gray-500 ${fontClass}`}
      >
        {menus[language][1]}
      </motion.h2>

      <div className="flex flex-col lg:flex-row max-w-xl lg:max-w-4xl mx-auto justify-center items-center">
        <motion.div
          variants={videoVariants}
          className="max-w-[300px] flex-1 justify-center items-center overflow-hidden relative h-[320px] lg:h-[480px] my-10 lg:my-0"
        >
          <video
            src="/images/us_animation.mp4"
            autoPlay
            loop
            muted
            className="h-full object-cover m-auto rounded-lg"
            playsInline
          />
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex-1 text-center space-y-5 lg:text-lg lg:mt-2 lg:pl-20 mx-auto font-nunito"
        >
          <p>
            {ourStoryTranslations[language].description1}
          </p>
          <p>
            {ourStoryTranslations[language].description2}
          </p>
          <p>
            {ourStoryTranslations[language].description3}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;