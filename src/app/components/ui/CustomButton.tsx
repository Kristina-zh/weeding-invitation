import { motion } from "framer-motion"

interface CustomButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => {
  return <motion.button
    className="px-6 py-2 bg-black text-white rounded hover:bg-sage"
    whileHover={{ scale: 1.1 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
    }}
    onClick={onClick}
  >
    {children}
  </motion.button>
}

export default CustomButton