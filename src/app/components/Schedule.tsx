import Image from "next/image";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { eventsTranslations as scheduleTranslations } from "../translations";

const Events = () => {
  const { language } = useLanguage();

  const events = [
    {
      day: scheduleTranslations[language][0].day,
      time: scheduleTranslations[language][0].time,
      title: scheduleTranslations[language][0].title,
      description: scheduleTranslations[language][0].description,
      image: "/images/mexico-city.jpg",
      dresscode: scheduleTranslations[language][0].dresscode,
    },
    {
      day: scheduleTranslations[language][1].day,
      time: scheduleTranslations[language][1].time,
      title: scheduleTranslations[language][1].title,
      description: scheduleTranslations[language][1].description,
      image: "/images/civil.jpg",
      dresscode: scheduleTranslations[language][1].dresscode,
    },
    {
      day: scheduleTranslations[language][2].day,
      time: scheduleTranslations[language][2].time,
      title: scheduleTranslations[language][2].title,
      description: scheduleTranslations[language][2].description,
      image: "/images/transport.jpg",
      dresscode: scheduleTranslations[language][2].dresscode,
    },
    {
      day: scheduleTranslations[language][3].day,
      time: scheduleTranslations[language][3].time,
      title: scheduleTranslations[language][3].title,
      description: scheduleTranslations[language][3].description,
      image: "/images/night.jpg",
      dresscode: scheduleTranslations[language][3].dresscode,
    },
    {
      day: scheduleTranslations[language][4].day,
      time: scheduleTranslations[language][4].time,
      title: scheduleTranslations[language][4].title,
      description: scheduleTranslations[language][4].description,
      image: "/images/boda.jpg",
      dresscode: scheduleTranslations[language][4].dresscode,
    },
    {
      day: scheduleTranslations[language][5].day,
      time: scheduleTranslations[language][5].time,
      title: scheduleTranslations[language][5].title,
      description: scheduleTranslations[language][5].description,
      image: "/images/pool.jpg",
      dresscode: scheduleTranslations[language][5].dresscode,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.2, scale: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.section
      id="schedule"
      className="relative h-full p-5 md:p-20 bg-gray-50 flex flex-col items-center font-nunito"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      }}
    >
      <motion.h2
        variants={titleVariants}
        className={`absolute top-0 pr-5 right-0 lg:right-10 text-[27px] sm:text-[40px] lg:text-[100px] text-gray-500 ${fontClass}`}
      >
        Events
      </motion.h2>

      <div className="grid grid-cols-1 gap-10 max-w-xl lg:max-w-3xl my-10 lg:my-0">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[300px] md:w-[25%] md:h-full">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="p-5 lg:px-10 lg:py-8 md:w-[75%] text-center md:text-left">
              <p className="text-gray-500 text-sm uppercase tracking-wide">
                {event.day}
              </p>
              <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.time}</p>
              <ul className="text-gray-600 space-y-2">
                {event.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              {event.dresscode && (
                <p className="mt-3 text-gray-800">
                  <strong>Dress Code:</strong> {event.dresscode}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Events;