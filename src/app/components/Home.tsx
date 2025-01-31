'use client';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion';

import CustomButton from './ui/CustomButton';
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations';

const Home = () => {
  const { language } = useLanguage();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <section id="home" className="bg-white flex flex-col justify-center items-center pt-[60px]">
      <motion.div className="w-screen max-w-[2000px] h-[240px] lg:h-[640px] relative" variants={containerVariants}
        initial="hidden"
        animate="visible">
        <Image
          src="/images/hero.jpg"
          alt="hero image"
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
        <motion.h1
          variants={textVariants}
          className={`text-[50px] md:text-[60px] lg:text-[120px] text-center mt-4 ${fontClass} absolute bottom-[0] lg:bottom-[10%] left-[-50px] leading-none`}
        >
          <span className="block">{homeTranslations[language].title.kristina}</span>
          <span className="block ml-[180px] md:ml-[320px] lg:ml-[400px]">{homeTranslations[language].title.and} {homeTranslations[language].title.alan}</span>
        </motion.h1>
      </motion.div>
      <motion.div
        className="max-w-xl w-screen bg-white p-8 lg:p-16 h-full flex items-center justify-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
        <div className="flex flex-col space-y-10 max-w-5xl mx-auto justify-center items-center">
          <motion.div variants={textVariants} className="flex-1 text-center text-xl font-nunito mx-auto">
            <p className="mb-5 lg:mb-10 text-xl lg:text-2xl max-w-3xl mx-auto">
              <strong>{homeTranslations[language].description}</strong>
            </p>
            <p className="text-lg lg:text-xl">{homeTranslations[language].description2}</p>
            <p className="text-lg lg:text-xl">{homeTranslations[language].description3}</p>

            <motion.div className="my-10 flex flex-col lg:flex-row justify-center mx-auto gap-4" variants={containerVariants}>
              {['/images/h1.jpg', '/images/h2.jpg', '/images/h3.jpg'].map((src, index) => (
                <motion.div key={index} variants={cardVariants} className="relative w-[300px] h-[200px] mx-auto">
                  <Image
                    src={src}
                    alt={`Venue${index + 1}`}
                    className="rounded shadow-md"
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col justify-center items-center lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
              <CustomButton
              >
                <Link href="https://www.google.com/maps/place/Hacienda+Acamilpa/">
                  {homeTranslations[language].button1}
                </Link>
              </CustomButton>
              <ScrollLink
                to="rsvp"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <CustomButton>{homeTranslations[language].button2}*</CustomButton>
              </ScrollLink>
            </div>
            <p className="mt-10 text-sm">{homeTranslations[language].note}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;