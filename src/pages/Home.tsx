import { useRef } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Info from "../components/Info";
import Museum from "../components/Museums";
import Process from "../components/Process";
import Art from "../components/Art";
import Form from "../components/Form";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import ReadMore from "../components/ReadMore";
import { motion } from "framer-motion";

const Home = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="home-page font-inter min-h-screen">
        <Navbar />
        <div className="component-spacing-1"></div>

        <Header scroll={scrollToForm} />
        <div className="component-spacing-2"></div>

        <ReadMore />
        <div className="component-spacing-3"></div>

        <Museum />
        <div className="component-spacing-5"></div>

        <Info />
        <div className="component-spacing-4"></div>

        <Process />
        <div className="component-spacing-6"></div>

        <Art />
        <div className="component-spacing-8"></div>

        <Form formRef={formRef} />
        <div className="component-spacing-9"></div>

        <Contacts />
        <div className="component-spacing-10"></div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
