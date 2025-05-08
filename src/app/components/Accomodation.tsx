'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

import { useLanguage, menus } from "../context/LanguageContext";
import { accomodationTranslations } from "../translations";

const Accommodations = () => {
  const { language } = useLanguage()

  const hotels = [
    // {
    //   id: 1,
    //   title: "Radisson Cuernavaca",
    //   image: "/images/hotel1.png",
    //   distance: `${accomodationTranslations[language].distance}: 30 ${accomodationTranslations[language].mins}.`,
    //   link: "https://radissoncuernavaca.mx",
    //   whatsup: "+52 777 478 8700",
    //   code: "5015420"
    // },
    {
      id: 3,
      title: "Fiesta Inn Cuernavaca",
      image: "/images/hotel3.jpg",
      distance: `${accomodationTranslations[language].distance}: 45 ${accomodationTranslations[language].mins}.`,
      link: "https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-cuernavaca",
      whatsup: "+52 443 137 8728",
      code: "G1T8YR"
    },
    {
      id: 4,
      title: "ONE hotel Cuernavaca",
      image: "/images/hotel4.jpg",
      distance: `${accomodationTranslations[language].distance}: 45 ${accomodationTranslations[language].mins}.`,
      link: "https://www.fiestamericanatravelty.com/one-hoteles/hoteles/one-cuernavaca",
      whatsup: "+52 443 137 8728",
      code: "G1T8YU"
    },
    {
      id: 2,
      title: "Fiesta Americana",
      description: accomodationTranslations[language].fiestaText,
      image: "/images/hotel2.jpg",
      distance: `${accomodationTranslations[language].distance}: 40 ${accomodationTranslations[language].mins}.`,
      link: "https://www.fiestamericanatravelty.com/fiesta-americana/hoteles/fiesta-americana-hacienda-san-antonio-el-puente-cuernavaca",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.4, scale: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.section
      id="accommodation"
      className="relative bg-sage p-5 lg:p-20 h-full flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
        className={`absolute top-0 pr-5 right-0 lg:right-10 text-[27px] sm:text-[38px] lg:text-[80px] text-gray-600 ${fontClass}`}
      >
        {menus[language][3]}
      </motion.h2>

      <div className="max-w-xl lg:max-w-6xl mx-auto">
        <motion.div
          variants={textVariants}
          className="flex flex-col space-y-5 max-w-4xl text-lg my-10 mx-auto text-center font-nunito">
          <p>{accomodationTranslations[language].description1}</p>
          <p>{accomodationTranslations[language].description2}</p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                <motion.div
                  className="p-6 flex flex-col lg:h-[200px]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-nunito mb-2">{hotel.title}</h3>
                    <p className="text-gray-700 mb-2 font-nunito">{hotel.distance}</p>
                    <p className="text-gray-700 font-nunito">{hotel.description}</p>
                    {hotel.whatsup && <p className="text-gray-700 font-nunito">WhatsApp: {hotel.whatsup}</p>}
                    {hotel.code && <p className="text-gray-700 font-nunito">{accomodationTranslations[language].codeText}: {hotel.code}</p>}
                  </div>
                  <Link
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 hover:text-blue-700 underline font-nunito lg:mt-auto"
                  >
                    {accomodationTranslations[language].link}
                  </Link>
                </motion.div>
              </motion.div>

            ))}
          </div>
        </div>
        <motion.div
          variants={textVariants}
          className="flex flex-col space-y-5 max-w-4xl text-lg my-10 mx-auto text-center font-nunito">
          <p>{accomodationTranslations[language].generalText}</p>
        </motion.div>


      </div>
    </motion.section>
  );
};

export default Accommodations;