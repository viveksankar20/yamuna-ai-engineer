import { motion } from "framer-motion";
import { Data } from "@/data";
export default function MernLogo() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center space-x-2"
      >
        {/* Left Chevron */}
        <motion.div
          whileHover={{ x: -4 }}
          className="text-green-400 lg:text-6xl text-4xl  font-bold"
        >
          &lt;
        </motion.div>

        {/* MERN Text */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-cyan-400 lg:text-4xl text-2xl font-semibold tracking-wide"
        >
         {Data.mainSection.headLogo}
        </motion.h1>

        {/* Right Chevron */}
        <motion.div
          whileHover={{ x: 4 }}
          className="text-blue-500 lg:text-6xl text-4xl font-bold"
        >
          &gt;
        </motion.div>
      </motion.div>
    </div>
  );
}
