import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Bank from "../components/Bank";
import Footer from "../components/Footer";

const BankInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col"
      style={{ minHeight: "100dvh" }}
    >
      <Navbar />
      <div className="flex-grow min-h-screen">
        <Bank />
      </div>
      <Footer />
    </motion.div>
  );
};

export default BankInformation;
