
import Navbar from "../components/Navbar";
import Aboutnew from "../components/AboutComp";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

const About = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <Navbar />
      <div className="flex-grow">
        <Aboutnew />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default About;
