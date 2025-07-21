
import Navbar from "../components/Navbar";
import BankComp from "../components/BankComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const Bank = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow min-h-screen">
        <BankComp />
      </div>
      <Contacts />
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};

export default Bank;
