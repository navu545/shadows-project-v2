import Navbar from "../components/Navbar";
import MuseumsListHolder from "../components/MuseumsListHolder";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useEffect } from "react";

import Contacts from "../components/Contacts";

const MuseumsListPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); 
  }, []);

  return (
    <div className="museums-list-page-container font-inter min-h-screen flex flex-col">
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
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};
export default MuseumsListPage;
