import NavbarTwo from "../components/Navbar2"
import Footer from "../components/Footer"
import ArtistComp from "../components/ArtistComp"

const Artists = () => {
  return (
    <div>
      <NavbarTwo />
      <div className="flex-grow min-h-screen bg-[#171717]">
        <ArtistComp />
      </div>
      <Footer />
    </div>
  );
}

export default Artists
