"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Modal from "./ui/Modal";
import CustomInput from "./ui/CustomInput";
import CustomTextArea from "./ui/CustomTextArea";
import CustomCheckbox from "./ui/CustomCheckbox";
import { useLanguage } from "../context/LanguageContext";
import { rsvpTranslations } from "../translations";
interface FormErrors {
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
  isJoining?: string;
}

const Registration = () => {
  const { language, menus } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isJoining: false,
    isPlusOne: false,
    isTransportNeeded: false,
    contactNumber: "",
    allergy: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.contactNumber) newErrors.contactNumber = "Phone number is required.";
    if (!formData.isJoining) newErrors.isJoining = "Please confirm your attendance.";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Send data to Telegram
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

      // Append data to Google Sheets
      const newRow = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Phone: formData.contactNumber,
        IsJoining: formData.isJoining ? "yes" : "no",
        HasPlusOne: formData.isPlusOne ? "yes" : "no",
        IsTransportNeeded: formData.isTransportNeeded ? "yes" : "no",
        Allergies: formData.allergy === "" ? "-" : formData.allergy,
        Message: formData.message === "" ? "-" : formData.message,
      };
      const response = await fetch('/api/appendRow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRow),
      });

      const result = await response.json();
      console.log(result);

      setIsSubmitted(true);
      // Reset form after successful submissions
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        isJoining: false,
        isPlusOne: false,
        isTransportNeeded: false,
        allergy: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.4, scale: 1, transition: { delay: 0.1, duration: 1 } },
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
      {isSubmitted && (
        <Modal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)} title={rsvpTranslations[language].modalTitle}>
          <p className="font-xl mb-5">{rsvpTranslations[language].modalText}</p>
        </Modal>
      )}


      <motion.h2 variants={titleVariants} className={`absolute top-0 pr-5 right-0 lg:right-10 text-[40px] lg:text-[80px] text-gray-500 ${fontClass}`}
      >
        {menus[language][4]}
      </motion.h2>

      <div className="md:w-[80%] max-w-[760px] mx-auto p-5 lg:p-7 bg-white bg-opacity-80 rounded-lg shadow-custom my-10 lg:my-0">
        <p className="text-2xl mb-6 text-center font-nunito font-bold">{rsvpTranslations[language].title}</p>
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5 flex flex-col">
          <motion.div variants={inputVariants}>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-7 lg:space-y-0">
              <CustomCheckbox
                checked={formData.isJoining}
                onChange={(checked) => handleCheckboxChange("isJoining", checked)}
                label={rsvpTranslations[language].question1}
                name="isJoining"
              />
              <CustomCheckbox
                checked={formData.isPlusOne}
                onChange={(checked) => handleCheckboxChange("isPlusOne", checked)}
                label={rsvpTranslations[language].question2}
                name="isPlusOne"
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants}>
            <div className="mb-2">
              <CustomCheckbox
                checked={formData.isTransportNeeded}
                onChange={(checked) => handleCheckboxChange("isTransportNeeded", checked)}
                label={rsvpTranslations[language].question5}
                name="isTransportNeeded"
              />
            </div>
          </motion.div>

          <motion.div variants={inputVariants} className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <div className="w-full">
              <CustomInput label={rsvpTranslations[language].firstName} type="text" value={formData.firstName} onChange={handleInputChange} name="firstName" error={!!errors.firstName} />
              {errors.firstName && <p className="text-red-500 text-sm ml-3 font-nunito">{errors.firstName}</p>}
            </div>

            <div className="w-full">
              <CustomInput label={rsvpTranslations[language].lastName} type="text" value={formData.lastName} onChange={handleInputChange} name="lastName" error={!!errors.lastName} />
              {errors.lastName && <p className="text-red-500 text-sm ml-3 font-nunito">{errors.lastName}</p>}
            </div>

            <div className="w-full">
              <CustomInput label={rsvpTranslations[language].phone} type="text" value={formData.contactNumber} onChange={handleInputChange} name="contactNumber" error={!!errors.contactNumber} />
              {errors.contactNumber && <p className="text-red-500 text-sm ml-3 font-nunito">{errors.contactNumber}</p>}
            </div>
          </motion.div>

          <motion.div variants={inputVariants}>
            <CustomInput label={rsvpTranslations[language].question3} type="text" value={formData.allergy} onChange={handleInputChange} name="allergy" />
          </motion.div>

          <motion.div variants={inputVariants}>
            <CustomTextArea label={rsvpTranslations[language].question4} value={formData.message} onChange={handleInputChange} name="message" />
          </motion.div>
          <div className="flex justify-center">
            <motion.button type="submit" className="px-6 py-2 bg-black text-white rounded hover:bg-sage">{isLoading ? rsvpTranslations[language].loading : rsvpTranslations[language].button}</motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Registration;
