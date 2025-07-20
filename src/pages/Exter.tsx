import NavbarTwo from "../components/Navbar2"
import ExterComp from "../components/ExterComp"
import Footer from "../components/Footer"

const Exter = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding ">
      <NavbarTwo />
      <div className="flex-grow">
        <ExterComp />
      </div>
      <Footer />
    </div>
  );
}

export default Exter
