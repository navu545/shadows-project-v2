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
    >
      <div className="bank-information-container font-inter min-h-screen">
        <Navbar />
        <Bank />
        <Footer />
      </div>
    </motion.div>
  );
};
export default BankInformation;
