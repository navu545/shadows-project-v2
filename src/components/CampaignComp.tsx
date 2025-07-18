import Art3 from "./Art3";
import {
  curvedArrow,
  artistInfoLink,
  databaseLink,
  researchLink,
  merchLink,
  digital1,
  digital2,
} from "../assets/images";
import { Link } from "react-router-dom";

const features = [
  { label: "⬤\u2003FEATURES", name: "Digital Campaign" },
  { label: "", name: "Instagram Filter" },
  { label: "", name: "Research Report" },
  { label: "", name: "Clothing Collection" },
  { label: "", name: "Public Database" },
  { label: "", name: "Artist Information" },
];

const CampaignComp = () => {
  return (
    <div className="campaign-page-wrapper flex flex-col items-center bg-[#171717] text-white overflow-hidden">
      <div className="max-w-7xl px-4">
        <div className="campaign-page-heading text-right text-4xl sm:text-5xl lg:text-7xl text-white mt-10 mb-5">
          <h1 className="italic font-light">
            THE{" "}
            <span className="not-italic font-normal">STOLEN ART CAMPAIGN</span>{" "}
            IS A HYBRID INITIATIVE CONFRONTING THE{" "}
            <span className="not-italic font-normal">
              ERASURE OF UKRANIAN IDENTITY
            </span>{" "}
            IN <span className="not-italic font-normal">WESTERN MUSEUMS.</span>
          </h1>
        </div>

        <div className="art3-wrap">
          <Art3 />
        </div>

        <div className="background-features-wrap flex flex-col lg:flex-row w-full mt-12 mb-10 xxs:mb-10 lg:mb-40 border-t border-gray-600 md:gap-y-5 xl:mb-20 ">
  
          <div className="background-wrap w-full lg:w-[70%] lg:pr-8 mt-5 text-justify">
            <div className="flex items-center mb-5">
              <h1 className="text-md font-semibold">
                ⬤&nbsp;&nbsp;&nbsp;BACKGROUND
              </h1>
            </div>
            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight">
              <p className="mb-6">
                For centuries, Russia has tried to erase Ukraine — not just
                through physical war, but by controlling information, rewriting
                history, stealing, and deforming our cultural identity.
              </p>
              <p className="mb-6">
                Since the 17th century, Russian leaders have banned the
                Ukrainian language and literature, persecuted cultural figures,
                and suppressed efforts to preserve our heritage.
              </p>
              <p className="mb-6">
                Today, this legacy lives on when institutions that shape global
                memory — from Wikipedia to major museums — still mislabel
                Ukrainian artists as Russian...
              </p>
              <p>
                The erasure of Ukraine’s cultural identity has gone unchallenged
                for too long. This is our response — a movement to expose,
                confront, and reclaim what was stolen.
              </p>
            </div>
          </div>

       
          <div className="features-wrap w-full lg:w-[40%] flex flex-col justify-between relative mt-5">
            <div className="hidden md:block flex-col space-y-2 mb-6 w-full">
              {features.map(({ label, name }) => (
                <div
                  key={name}
                  className="w-full flex flex-wrap justify-between border-b border-gray-600 pb-2"
                >
                  <p className="text-md font-semibold text-left text-white">
                    {label || "\u00A0"}
                  </p>
                  <p className="text-base text-right">{name}</p>
                </div>
              ))}
            </div>

            {/* Arrow + Explore text */}
            <div className="hidden lg:block absolute top-[60%] left-[60%] sm:left-[68%] lg:left-[75%] xl:top-[45%]">
              <img src={curvedArrow} alt="Explore Arrow" className="h-80" />
            </div>
            <div className="hidden lg:flex items-end justify-start mt-6 relative left-[10%] sm:left-[17%] bottom-[-25%] xl:top-[0%]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl mr-4">EXPLORE</h1>
            </div>
          </div>
        </div>

        {/* Mobile-only headline for Features */}
        <div className="block md:hidden w-full mb-6 text-xl font-semibold border-b border-gray-600 pb-2">
          ⬤&nbsp;&nbsp;&nbsp;FEATURES
        </div>

        {/* Campaign Cards */}
        <div className="campaign-links flex flex-wrap justify-center gap-6 mt-8 mb-20 text-justify xl:scale-104">
          {/* Card 1 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[31%]">
            <h2 className="text-2xl sm:text-3xl mb-4 text-center">
              ARTIST INFORMATION
            </h2>
            <img
              src={artistInfoLink}
              alt="Artist Info"
              className="mb-4 mx-auto scale-100 xs:scale-90 sm:scale-100"
            />
            <p className="text-base mb-4">
              Explore Ukrainian biographies and additional resources we have
              complied for you to cite and reference on 5 major Ukrainian
              artists.
            </p>
            <Link to="/artists" className="underline">
              → Explore their Biographies
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[31%]">
            <h2 className="text-2xl sm:text-3xl mb-4 text-center">
              PUBLIC DATABASE
            </h2>
            <img
              src={databaseLink}
              alt="Public Database"
              className="mb-4 mx-auto"
            />
            <p className="text-base mb-4">
              Contribute to our community archive which we build to collect data
              on where Ukrainian artists are still mislabeled in museums
              worldwide.
            </p>
            <Link to="/database" className="underline">
              → Contribute to the Database
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[31%]">
            <h2 className="text-2xl sm:text-3xl mb-6 text-center">
              RESEARCH REPORT
            </h2>
            <img src={researchLink} alt="Research" className="mb-4 xs:mb-0 md:mb-4 mx-auto scale-110 xs:scale-110 sm:scale-130 " />
            <p className="text-base mb-4">
              Read and share the findings of our investigative research paper
              where we expose Russia’s disinformation tactics online in the
              cultural space.
            </p>
            <Link to="#" className="underline">
              → View the Research
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[35%]">
            <h2 className="text-2xl sm:text-3xl mb-4 text-center">
              ARTIVISM COLLECTION
            </h2>
            <img src={merchLink} alt="Artivism" className="mb-4 mx-auto" />
            <p className="text-base mb-4">
              Together with Ukrainian streetwear brand RDNY, we’ve launched
              Artivism — a limited-edition collection inspired by stolen
              artworks — a way to reclaim our culture in everyday life. Proceeds
              will help protect Ukraine’s cultural heritage from Russia’s
              destruction.
            </p>
            <a
              href="https://www.rdnystreetwear.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              → Shop the Collection
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[35%]">
            <h2 className="text-2xl sm:text-3xl mb-20 text-center">
              THE DIGITAL CAMPAIGN
            </h2>
            <div className="relative mb-4 h-48 scale-120 sm:scale-100 md:scale-120">
              <img
                src={digital1}
                alt="Digital 1"
                className="absolute w-full h-full object-contain z-10 right-[50px] top-[8px]"
              />
              <img
                src={digital2}
                alt="Digital 2"
                className="absolute w-full h-full object-contain left-[35px]"
              />
            </div>
            <p className="text-base mt-15 mb-5">
              Use our Instagram filter to photograph mislabeled artworks and
              call out Western museums and repost our digital education campaign
              to help spread awareness.
            </p>
            <a
              href="https://www.instagram.com/shadows.project/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              → See our Instagram
            </a>
          </div>
        </div>

        {/* Final heading */}
        <div className="ending-heading text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-16">
          <h1>
            Join us in defending Ukraine’s cultural front.
            <br /> Help us write our history.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CampaignComp;
