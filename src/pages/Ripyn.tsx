import NavbarTwo from "../components/Navbar2";
import RipynComp from "../components/RipynComp";
import Footer from "../components/Footer";

const Ripyn = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <NavbarTwo />
      <div className="flex-grow">
        <RipynComp />
      </div>

      <Footer />
    </div>
  );
};

export default Ripyn;
