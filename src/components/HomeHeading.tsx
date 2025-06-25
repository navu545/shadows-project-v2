import {
  CNN,
  euro,
  newhome1,
  newhome2,
  euroblue,
  dld,
  politik,
  guardian,
  vox,
} from "../assets/images";
import FormModal from "./FormModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch";

const Homeheading = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="component-wrapper flex flex-col items-center">
      <div className="heading-subheading-wrapper flex flex-col my-20 max-w-6xl">
        <div className=" heading-wrap text-6xl font-semibold max-w-2xl leading-tight my-4">
          <h1>Protecting Our Culture, And Popularizing It.</h1>
        </div>
        <div className="sub-heading text-3xl">
          <p>
            We’re a cultural NGO and creative studio bringing culture into
            people’s daily lives through storytelling, design, and campaigns.
          </p>
        </div>
      </div>
      <div className="recent-projects-wrapper flex flex-col max-w-6xl mx-auto space-y-4 mt-10 mb-20">
        <div className="project-headbtn flex items-center mb-10">
          <h2 className="text-5xl font-semibold mr-10 ml-1">
            Our Recent Projects
          </h2>
          <Link to="/creativePage" state={{ scrollTo: "recent-projects" }}>
            <button className="px-10 py-3 mt-4 bg-black text-white rounded-full cursor-pointer text-xl">
              See more
            </button>
          </Link>
        </div>
        <div className="project-imgs flex space-x-4">
          <img
            src={newhome1}
            alt="Project 1"
            className="w-1/2 h-auto object-cover rounded"
          />
          <img
            src={newhome2}
            alt="Project 2"
            onClick={() =>
              window.open(
                "https://graffiti-chronicles.shadowsproject.org/",
                "_blank"
              )
            }
            className="w-1/2 h-auto object-cover rounded cursor-pointer"
          />
        </div>
      </div>
      <div className="news-outlet-wrapper max-w-6xl mb-25">
        <div className="news-outlet-heading">
          <h2 className="text-3xl font-semibold mb-8">As seen on</h2>
        </div>
        <div className="news-outlet-imgwrap flex flex-wrap justify-center gap-23">
          <img src={vox} alt="Vox" className="w-20 h-auto object-contain" />
          <img
            src={guardian}
            alt="Guardian"
            className="mt-1 w-30 h-auto object-contain"
          />
          <img
            src={CNN}
            alt="CNN"
            className="mt-1 w-20 h-auto object-contain"
          />
          <img
            src={euroblue}
            alt="Euroblue"
            className="mt-1 w-22 h-auto object-contain"
          />
          <img
            src={euro}
            alt="Euro"
            className="mt-1 w-28 h-auto object-contain"
          />
          <img
            src={dld}
            alt="DLD"
            className="mb-2 w-20 h-auto object-contain"
          />
          <img
            src={politik}
            alt="Politik"
            className="mt-1 w-10 h-auto object-contain"
          />
        </div>
      </div>
      <GetInTouch onClick={() => setModal(true)} />
      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default Homeheading;
