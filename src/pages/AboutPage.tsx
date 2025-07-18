
import Navbar from "../components/Navbar";
import Aboutnew from "../components/AboutComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const Aboutpage = () => {
  return (
    
      <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
        <Navbar />
        <Aboutnew />
        <Contacts />
        <Footer />
      </div>
   
  );
};

export default Aboutpage;
