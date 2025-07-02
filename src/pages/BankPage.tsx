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
      className="min-h-screen"
    >
      <div className="bank-information-container font-inter min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Bank />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};
export default BankInformation;
