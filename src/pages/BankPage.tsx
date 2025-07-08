import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Bank from "../components/Bank";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";


const BankInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-inter min-h-screen flex flex-col">
        <Navbar />
        <Bank />
        <Contacts/>
        <Footer />
      </div>

    </motion.div>
  );
};

export default BankInformation;
