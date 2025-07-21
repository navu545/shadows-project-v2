import Homeheading from "../components/HomeHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";


const Home = () => {

  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Homeheading />
        <Contacts />
      </main>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};

export default Home;
