import NavbarTwo from "../components/Navbar2";
import Footer from "../components/Footer";
import DavydComp from "../components/DavydComp";

const Davyd = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <NavbarTwo />
      <div className="flex-grow">
        <DavydComp />
      </div>
      <Footer />
    </div>
  );
}

export default Davyd
