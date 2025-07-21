
import NavbarTwo from '../components/Navbar2'
import Footer from '../components/Footer'
import KazymyrComp from '../components/KazymyrComp'

const Kazymyr = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavbarTwo />
      <div className="flex-grow">
        <KazymyrComp />
      </div>

      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
}

export default Kazymyr
