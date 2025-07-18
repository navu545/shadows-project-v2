import NavbarTwo from "../components/Navbar2";
import CreditsComp from "../components/CreditsComp";
import Footer from "../components/Footer";
const Credits = () => {
  return (
    <div>
      <NavbarTwo />
      <div className="flex-grow min-h-screen bg-[#171717]">
        <CreditsComp />
      </div>
      <Footer />
    </div>
  );
}

export default Credits
