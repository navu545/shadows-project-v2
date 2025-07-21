import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CreativeComp from "../components/CreativeComp";

const Creativepage = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CreativeComp />
        <Contacts />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};

export default Creativepage;
