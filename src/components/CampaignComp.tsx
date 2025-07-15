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

const CampaignComp = () => {
  return (
    <div className="campaign-page-wrapper flex flex-col items-center bg-[#171717] text-white overflow-hidden">
      <div className="max-w-7xl">
        <div className="campaign-page-heading text-right text-7xl text-white mt-10 mb-5">
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

        <div className="background-features-wrap flex w-full mt-12 mb-20 border-t border-gray-600">
          <div className="background-wrap w-[70%] pr-8 mt-5 text-justify">
            <div className="flex items-center mb-5">
              <span className="text-5xl leading-none -mt-2 mr-3">•</span>
              <h1 className="text-lg font-semibold">BACKGROUND</h1>
            </div>

            <div className="text-2xl leading-tight text-justify">
              <p className="mb-6">
                For centuries, Russia has tried to erase Ukraine — not just
                through physical war, but by controlling information, rewriting
                history, stealing, and deforming our cultural identity.
              </p>
              <p className="mb-6">
                Since the 17th century, Russian leaders have banned the
                Ukrainian language and literature, persecuted cultural figures,
                and suppressed efforts to preserve our heritage. They built
                monuments to our leaders in Russian cities, claimed our artists
                as their own, and rewrote history books to erase Ukrainian
                identity.
              </p>
              <p className="mb-6">
                Today, this legacy lives on when institutions that shape global
                memory — from Wikipedia to major museums — still mislabel
                Ukrainian artists as Russian, reinforcing the false idea that
                Ukraine was never a separate nation. These labels shape how
                history is remembered — and strip Ukrainians of their agency
                over their own nationhood.
              </p>
              <p>
                The erasure of Ukraine’s cultural identity has gone unchallenged
                for too long. This is our response — a movement to expose,
                confront, and reclaim what was stolen.
              </p>
            </div>
          </div>

          <div className="features-wrap w-[40%] flex flex-col justify-between relative mt-8">
            <div className="flex items-start mb-6">
              <div className="absolute flex items-center -mt-3">
                <span className="text-5xl mr-3 -mt-2">•</span>
                <h1 className="text-lg font-semibold">FEATURES</h1>
              </div>

              <div className="flex flex-col space-y-1 w-full text-right">
                {[
                  "Digital Campaign",
                  "Instagram Filter",
                  "Research Report",
                  "Clothing Collection",
                  "Public Database",
                  "Artist Information",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="w-full border-b border-gray-600 pb-2"
                  >
                    <p className="text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[42%] left-[75%]">
              <img src={curvedArrow} alt="Explore Arrow" className="h-73" />
            </div>
            <div className="flex items-end justify-start mt-6 relative left-[15%] bottom-[5%]">
              <h1 className="text-7xl mr-4">EXPLORE</h1>
            </div>
          </div>
        </div>

        <div className="campaign-links flex flex-wrap justify-center gap-6 mt-16 mb-20 text-justify">
          {/* Card 1 */}
          <div className="bg-[#2c2d2c] text-white p-6 flex flex-col justify-between w-full sm:w-[48%] lg:w-[31%]">
            <h2 className="text-3xl  mb-4 text-center">ARTIST INFORMATION</h2>
            <img
              src={artistInfoLink}
              alt="Artist Info"
              className="mb-4 mx-auto"
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
            <h2 className="text-3xl mb-4 text-center">PUBLIC DATABASE</h2>
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
            <h2 className="text-3xl mb-4 text-center">RESEARCH REPORT</h2>
            <img src={researchLink} alt="Research" className="mb-4 mx-auto" />
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
            <h2 className="text-3xl mb-4 text-center">ARTIVISM COLLECTION</h2>
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
            <h2 className="text-3xl mb-4 text-center">THE DIGITAL CAMPAIGN</h2>
            <div className="relative mb-4 h-48 scale-120">
              <img
                src={digital1}
                alt="Digital 1"
                className="absolute w-full h-full object-contain z-10 right-[13%] top-[4%]"
              />
              <img
                src={digital2}
                alt="Digital 2"
                className="absolute w-full h-full object-contain left-[13%]"
              />
            </div>
            <p className="text-base mt-20">
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

        <div className="ending-heading text-center text-4xl mb-15">
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
