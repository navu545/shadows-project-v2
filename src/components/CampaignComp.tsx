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
    <div className="campaign-page-wrapper flex flex-col items-center">
      <div className="max-w-7xl">
        <div className="campaign-page-heading text-left">
          <h1>
            THE <span>STOLEN ART CAMPAIGN</span> IS A HYBRID INITIATIVE
            CONFRONTING THE <span>ERASURE OF UKRANIAN IDENTITY</span> in{" "}
            <span>WESTERN MUSEUMS.</span>
          </h1>
        </div>

        <div className="art3-wrap">
          <Art3 />
        </div>

        <div className="background-features-wrap flex">
          <div className="background-wrap">
            <h1>BACKGROUND</h1>
            <p>
              For centuries, Russia has tried to erase Ukraine — not just
              through physical war, but by controlling information, rewriting
              history, stealing, and deforming our cultural identity. Since the
              17th century, Russian leaders have banned the Ukrainian language
              and literature, persecuted cultural figures, and suppressed
              efforts to preserve our heritage. They built monuments to our
              leaders in Russian cities, claimed our artists as their own, and
              rewrote history books to erase Ukrainian identity. Today, this
              legacy lives on when institutions that shape global memory — from
              Wikipedia to major museums — still mislabel Ukrainian artists as
              Russian, reinforcing the false idea that Ukraine was never a
              separate nation. These labels shape how history is remembered —
              and strip Ukrainians of their agency over their own nationhood.
              The erasure of Ukraine’s cultural identity has gone unchallenged
              for too long. This is our response — a movement to expose,
              confront, and reclaim what was stolen.
            </p>
          </div>

          <div className="features-wrap flex flex-col">
            <div className="grid grid-2-col justify-between">
              <div>
                <h1>FEATURES</h1>
              </div>
              <div>
                <p>Digital Campaign</p>
                <p>Instagram Filter</p>
                <p>Research Report</p>
                <p>Clothing Collection</p>
                <p>Public Database</p>
                <p>Artist Information</p>
              </div>
            </div>
            <div className="bg-black">
              <img src={curvedArrow}></img>
              <h1>EXPLORE</h1>
            </div>
          </div>
        </div>

        <div className="campaign-links flex">
          <div className="Artist-info">
            <h1>ARTIST INFORMATION</h1>
            <img src={artistInfoLink}></img>
            <p>
              Explore Ukrainian biographies and additional resources we have
              complied for you to cite and reference on 5 major Ukrainian
              artists.
            </p>
            <Link to="/artists">
              <p> → Explore their Biographies</p>
            </Link>
          </div>

          <div className="database-link">
            <h1>PUBLIC DATABASE</h1>
            <img src={databaseLink}></img>
            <p>
              Contribute to our community archive which we build to collect data
              on where Ukrainian artists are still mislabeled in museums
              worldwide.
            </p>
            <Link to="/database">
              <p> → Contribute to the Database</p>
            </Link>
          </div>

          <div className="research-link">
            <h1>RESEARCH REPORT</h1>
            <img src={researchLink}></img>
            <p>
              Read and share the findings of our investigative research paper
              where we expose Russia’s disinformation tactics online in the
              cultural space.
            </p>
            <Link to="">
              <p> → View the Research</p>
            </Link>
          </div>

          <div className="merch-link">
            <h1>ARTIVISM COLLECTION</h1>
            <img src={merchLink}></img>
            <p>
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
            >
              <p> → Shop the Collection</p>
            </a>
          </div>

          <div className="digital-link">
            <h1>THE DIGITAL CAMPAIGN</h1>
            <div className="digital-imgs relative">
              <img className="absolute" src={digital1}></img>
              <img className="absolute" src={digital2}></img>
            </div>

            <p>
              Use our Instagram filter to photograph mislabeled artworks and
              call out Western museums and repost our digital education campaign
              to help spread awareness.
            </p>
            <a
              href="https://www.instagram.com/shadows.project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p> → See our Instagram</p>
            </a>
          </div>
        </div>

        <div className="ending-heading">
          <h1>
            Join us in defending Ukraine’s cultural front. Help us write our
            history.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CampaignComp;
