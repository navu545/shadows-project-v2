import NavbarTwo from "../components/Navbar2";
import RipynComp from "../components/RipynComp";
import Footer from "../components/Footer";

const Ripyn = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavbarTwo />
      <div className="flex-grow">
        <RipynComp />
      </div>

      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};

export default Ripyn;
