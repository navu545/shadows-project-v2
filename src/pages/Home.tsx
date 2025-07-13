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
      <div className="home-page font-inter min-h-screen flex flex-col ios-footer-padding">
        <Navbar />

        <Header scroll={scrollToForm} />

        <ReadMore />

        <Museum />

        <Info />

        <Process />

        <Art />

        <Form formRef={formRef} />

        <Contacts />

        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
