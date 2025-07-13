import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Aboutnew from "../components/AboutComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const Aboutpage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-inter min-h-screen flex flex-col safari_only">
        <Navbar />
        <Aboutnew />
        <Contacts />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Aboutpage;
