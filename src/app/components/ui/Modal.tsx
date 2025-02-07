import { motion } from "framer-motion";

import { useLanguage } from "../../context/LanguageContext";
import { rsvpTranslations } from "../../translations";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const { language, menus } = useLanguage();

  return (
    <div className="fixed inset-0 flex items-center text-center justify-center bg-black bg-opacity-50 z-50 font-nunito">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
        <div>{children}</div>
          <div className="flex justify-center">
          <motion.button onClick={onClose} className="px-6 py-2 bg-black text-white rounded hover:bg-sage">{rsvpTranslations[language].modalBtn}</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;