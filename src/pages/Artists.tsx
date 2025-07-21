import NavbarTwo from "../components/Navbar2"
import Footer from "../components/Footer"
import ArtistComp from "../components/ArtistComp"

const Artists = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen bg-[#171717]">
      <NavbarTwo />
      <div className="flex-grow min-h-screen">
        <ArtistComp />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
}

export default Artists
