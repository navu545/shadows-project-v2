import Homeheading from "../components/HomeHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";


const Home = () => {

  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding fix-ipad-chrome-footer">
      <Navbar />
      <main className="flex-grow">
        <Homeheading />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
