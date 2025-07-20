import NavbarTwo from "../components/Navbar2";
import CreditsComp from "../components/CreditsComp";
import Footer from "../components/Footer";
const Credits = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <NavbarTwo />
      <div className="flex-grow bg-[#171717]">
        <CreditsComp />
      </div>
      <Footer />
    </div>
  );
}

export default Credits
