import DatabaseComp from "../components/DatabaseComp"
import NavbarTwo from "../components/Navbar2"
import Footer from "../components/Footer"

const Database = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <NavbarTwo />
      <div className="flex-grow">
        <DatabaseComp />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
}

export default Database
