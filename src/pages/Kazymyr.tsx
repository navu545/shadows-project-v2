
import NavbarTwo from '../components/Navbar2'
import Footer from '../components/Footer'
import KazymyrComp from '../components/KazymyrComp'

const Kazymyr = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding ">
      <NavbarTwo />
      <div className="flex-grow">
        <KazymyrComp />
      </div>
      
      <Footer />
    </div>
  );
}

export default Kazymyr
