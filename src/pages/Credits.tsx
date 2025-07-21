import NavbarTwo from "../components/Navbar2";
import CreditsComp from "../components/CreditsComp";
import Footer from "../components/Footer";
const Credits = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavbarTwo />
      <div className="flex-grow bg-[#171717]">
        <CreditsComp />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
}

export default Credits
