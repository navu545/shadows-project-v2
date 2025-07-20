import DatabaseComp from "../components/DatabaseComp"
import NavbarTwo from "../components/Navbar2"
import Footer from "../components/Footer"

const Database = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <NavbarTwo />
      <div className="flex-grow">
        <DatabaseComp />
      </div>
      <Footer />
    </div>
  );
}

export default Database
