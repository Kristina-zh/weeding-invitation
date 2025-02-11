import Image from "next/image";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";
import { weddingTranslations } from "../translations";

const Wedding = () => {
  const { language, menus } = useLanguage();

  const details = [
    {
      title: weddingTranslations[language][0].title,
      content: weddingTranslations[language][0].content,
      image: "/images/boda.jpg"
    },
    {
      title: weddingTranslations[language][1].title,
      content: weddingTranslations[language][1].content,
      image: "/images/transport.jpg"
    },
    {
      title: weddingTranslations[language][2].title,
      content: weddingTranslations[language][2].content,
      image: "/images/dress-code.jpg",
      linkTitle: weddingTranslations[language][2].link,
      link: "https://pin.it/7va9n6Edx"
    },
    {
      title: weddingTranslations[language][3].title,
      content: weddingTranslations[language][3].content,
      image: "/images/gifts.jpg"
    },
    {
      title: weddingTranslations[language][4].title,
      content: weddingTranslations[language][4].content,
      image: "/images/weather.jpg"
    },
    {
      title: weddingTranslations[language][5].title,
      content: weddingTranslations[language][5].content,
      image: "/images/guests.jpg"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.4, scale: 1, transition: { delay: 0.2, duration: 1 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.section
      id="wedding-details"
      className="relative h-full p-5 lg:p-20 bg-gray-50 flex flex-col items-center font-nunito"
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
        className={`absolute top-0 pr-2 right-0 lg:right-10 text-[27px] sm:text-[38px] lg:text-[80px] text-gray-500 ${fontClass}`}
      >
        {menus[language][2]}
      </motion.h2>

      <div className="lg:mt-10 grid grid-cols-1 gap-10 max-w-xl lg:max-w-3xl my-10 lg:my-0">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[300px] md:w-[25%] md:h-full">
              <Image
                src={detail.image}
                alt={detail.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="p-5 lg:px-10 lg:py-8 md:w-[75%] text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">{detail.title}</h3>
              <ul className="text-gray-600 space-y-3 tracking-wide">
                {detail.content.slice(0, -1).map((desc, idx) => {
                  if (Array.isArray(desc)) {
                    return (
                      <li key={idx}>
                        <ul>
                          {desc.map((subDesc, subIdx) => (
                            <li key={subIdx}>{subDesc}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={idx}>
                      {desc}
                    </li>
                  );
                })}

                <li className="flex justify-center lg:justify-start items-center">
                  <p>
                    {detail.content[detail.content.length - 1]}
                    {detail.link && (
                      <span>
                        <a
                          href={detail.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sage underline font-semibold ml-2"
                        >
                          {detail.linkTitle}
                        </a>
                      </span>
                    )}
                  </p>
                </li>
              </ul>

            </div>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Wedding;