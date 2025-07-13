import Navbar from "../components/Navbar";
import MuseumsListHolder from "../components/MuseumsListHolder";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

import Contacts from "../components/Contacts";

const MuseumsListPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); 
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="museums-list-page-container font-inter min-h-screen flex flex-col safari_only">
        <Navbar />
        <div className="museums-list-spacing-1"></div>
        <MuseumsListHolder />
        <div className="museums-list-spacing-2"></div>
        <div className="form-museumslistpage">
          <Form />
        </div>
        <div className="museums-list-spacing-4"></div>
        <Contacts></Contacts>
        <Footer />
      </div>
    </motion.div>
  );
};
export default MuseumsListPage;
