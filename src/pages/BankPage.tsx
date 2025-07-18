
import Navbar from "../components/Navbar";
import Bank from "../components/Bank";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const BankInformation = () => {
  return (
    
      <div className="font-inter flex flex-col ios-footer-padding">
        <Navbar />
        <div className="flex-grow min-h-screen">
          <Bank />
        </div>

        <Contacts />
        <Footer />
      </div>
   
  );
};

export default BankInformation;
