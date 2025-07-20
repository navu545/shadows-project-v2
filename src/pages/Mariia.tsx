import NavbarTwo from "../components/Navbar2"
import MariiaComp from "../components/MariiaComp"
import Footer from "../components/Footer"

const Mariia = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding ">
      <NavbarTwo />
      <div className="flex-grow">
        <MariiaComp />
      </div>
      
      <Footer />
    </div>
  );
}

export default Mariia
