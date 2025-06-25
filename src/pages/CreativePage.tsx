import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreativeComp from "../components/CreativeComp";
import { motion } from "framer-motion";

const Creativepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-inter">
        <Navbar />
        <CreativeComp />
        <Contacts />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Creativepage;
