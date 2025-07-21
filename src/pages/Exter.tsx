import NavbarTwo from "../components/Navbar2"
import ExterComp from "../components/ExterComp"
import Footer from "../components/Footer"

const Exter = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavbarTwo />
      <div className="flex-grow">
        <ExterComp />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
}

export default Exter
