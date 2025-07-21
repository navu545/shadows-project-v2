
import Navbar from "../components/Navbar";
import Aboutnew from "../components/AboutComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const About = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Aboutnew />
        <Contacts />
      </div>
      <Footer />
      <div className="ios-footer-padding w-full bg-black"></div>
    </div>
  );
};

export default About;
