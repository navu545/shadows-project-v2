import Homeheading from "../components/HomeHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";
import { motion } from "framer-motion";

const NewHome = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-inter min-h-screen flex flex-col">
        <Navbar />
        <Homeheading />
        <Contacts />
        <Footer />
      </div>
    </motion.div>
  );
};

export default NewHome;
