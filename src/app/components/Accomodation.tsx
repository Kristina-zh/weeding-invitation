'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

import { useLanguage, menus } from "../context/LanguageContext";
import { accomodationTranslations } from "../translations";

const Accommodations = () => {
  const { language } = useLanguage()

  const hotels = [
    {
      id: 1,
      title: "Radisson Cuernavaca",
      description: `${accomodationTranslations[language].codeText}: 5015420`,
      image: "/images/hotel1.png",
      link: "https://radissoncuernavaca.mx",
    },
    // {
    //   id: 2,
    //   title: "Fiesta Americana",
    //   description: accomodationTranslations[language].fiestaText,
    //   image: "/images/hotel2.jpg",
    //   link: "https://www.fiestamericanatravelty.com/fiesta-americana/hoteles/fiesta-americana-hacienda-san-antonio-el-puente-cuernavaca",
    // },
    {
      id: 3,
      title: "Fiesta Inn Cuernavaca",
      description: `${accomodationTranslations[language].codeText}: G1T8YR`,
      image: "/images/hotel3.jpg",
      link: "https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-cuernavaca",
    },
    {
      id: 4,
      title: "ONE hotel Cuernavaca",
      description: `${accomodationTranslations[language].codeText}: G1T8YU`,
      image: "/images/hotel4.jpg",
      link: "https://www.fiestamericanatravelty.com/one-hoteles/hoteles/one-cuernavaca",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
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
      id="accommodation"
      className="relative bg-sage p-10 lg:p-20 h-full flex items-center justify-center"
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
      <motion.h2
        variants={titleVariants}
        className={`absolute top-0 pr-5 right-0 lg:right-10 text-[40px] lg:text-[100px] text-gray-500 ${fontClass}`}
      >
        {menus[language][3]}
      </motion.h2>

      <div className="max-w-xl lg:max-w-6xl mx-aut">
        <motion.div
          variants={textVariants}
          className="flex flex-col space-y-5 max-w-4xl text-lg my-10 mx-auto text-center font-nunito">
          <p>{accomodationTranslations[language].description1}</p>
          <p>{accomodationTranslations[language].description2}</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                variants={cardVariants}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 text-center lg:text-left"
              >
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  width={400}
                  height={380}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col h-[146px]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-nunito mb-2">{hotel.title}</h3>
                    <p className="text-gray-700 mb-4 font-nunito">{hotel.description}</p>
                  </div>
                  <Link
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline font-nunito mt-auto"
                  >
                    {accomodationTranslations[language].link}
                  </Link>
                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Accommodations;