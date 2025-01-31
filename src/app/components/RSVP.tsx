"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import CustomInput from "./ui/CustomInput";
import CustomCheckbox from "./ui/CustomCheckbox";
import { useLanguage } from "../context/LanguageContext";
import { rsvpTranslations } from "../translations";

const Registration = () => {
  const { language, menus } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isJoining: false,
    isPlusOne: false,
    contactNumber: '',
    allergy: '',
    message: '',
    events: {
      civilWedding: false,
      theNightBefore: false,
      wedding: false,
      lastBrunch: false,
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("events")) {
      setFormData((prevData) => ({
        ...prevData,
        events: {
          ...prevData.events,
          [name.replace("events.", "")]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const telegramResponse = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const telegramResult = await telegramResponse.json();
      if (!telegramResponse.ok) {
        alert(telegramResult.message || "Error sending message to Telegram.");
        return;
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        isJoining: false,
        isPlusOne: false,
        contactNumber: "",
        allergy: "",
        message: "",
        events: {
          civilWedding: false,
          theNightBefore: false,
          wedding: false,
          lastBrunch: false,
        }
      });
    } catch (error) {
      console.error(error)
      alert("An error occurred while submitting the form.");
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.2, scale: 1, transition: { delay: 0.1, duration: 1 } },
  };

  const fontClass = language === "Russian" || language === "Ukrainian" ? "font-greatvibes" : "font-windsong";

  return (
    <motion.section
      id="rsvp"
      className="relative lg:h-[670px] p-5 lg:p-20 flex items-center justify-center"
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
        {menus[language][4]}
      </motion.h2>

      <div className="md:w-[80%] max-w-[760px] mx-auto p-5 lg:p-7 bg-white bg-opacity-80 rounded-lg shadow-custom my-10 lg:my-0">
        <p className="text-xl mb-6 text-center font-nunito font-bold">
          {rsvpTranslations[language].title}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-7 flex flex-col">
          <motion.div variants={inputVariants}>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-7 lg:space-y-0 mb-2">
              <CustomCheckbox
                checked={formData.isJoining}
                onChange={(checked) =>
                  setFormData((prevData) => ({ ...prevData, isJoining: checked }))
                }
                label={rsvpTranslations[language].question1}
                name="isJoining"
              />
              <CustomCheckbox
                checked={formData.isPlusOne}
                onChange={(checked) =>
                  setFormData((prevData) => ({ ...prevData, isPlusOne: checked }))
                }
                label={rsvpTranslations[language].question2}
                name="isPlusOne"
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <CustomInput
              label={rsvpTranslations[language].firstName}
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
            />
            <CustomInput
              label={rsvpTranslations[language].lastName}
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
            />
            <CustomInput
              label={rsvpTranslations[language].phone}
              type="text"
              value={formData.contactNumber}
              onChange={handleChange}
              name="contactNumber"
            />
          </motion.div>

          {/* <motion.div variants={inputVariants}>
            <p className="font-bold mb-2">Which events are you going to attend?</p>
            <CustomCheckbox
              checked={formData.events.civilWedding}
              onChange={handleChange}
              label="Civil Wedding"
              name="events.civilWedding"
            />
            <CustomCheckbox
              checked={formData.events.theNightBefore}
              onChange={handleChange}
              label="The Night Before"
              name="events.theNightBefore"
            />
            <CustomCheckbox
              checked={formData.events.wedding}
              onChange={handleChange}
              label="Wedding"
              name="events.wedding"
            />
            <CustomCheckbox
              checked={formData.events.lastBrunch}
              onChange={handleChange}
              label="Last Brunch"
              name="events.lastBrunch"
            />
          </motion.div> */}

          <motion.div variants={inputVariants}>
            <CustomInput
              label={rsvpTranslations[language].question3}
              type="text"
              value={formData.allergy}
              onChange={handleChange}
              name="allergy"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <CustomInput
              label={rsvpTranslations[language].question4}
              type="text"
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
          </motion.div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded hover:bg-sage"
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
              }}
            >
              {rsvpTranslations[language].button}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Registration;