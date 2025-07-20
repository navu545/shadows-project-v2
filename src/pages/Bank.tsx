
import Navbar from "../components/Navbar";
import BankComp from "../components/BankComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const Bank = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen ios-footer-padding">
      <Navbar />
      <div className="flex-grow min-h-screen">
        <BankComp />
      </div>
      <Contacts />
      <Footer />
    </div>
  );
};

export default Bank;
