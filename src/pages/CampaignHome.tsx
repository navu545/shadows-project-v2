import NavbarTwo from "../components/Navbar2";
import Footer from "../components/Footer";
import CampaignComp from "../components/CampaignComp";

const CampaignHome = () => {
  return (
    <div className="font-inter min-h-screen flex flex-col ios-footer-padding">
      <NavbarTwo />
      <div className="flex-grow">
        <CampaignComp />
      </div>

      <Footer />
    </div>
  );
};

export default CampaignHome;
