import {
  CNN,
  euro,
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
import ProjectImages from "./ProjectImages";

const Homeheading = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="component-wrapper flex flex-col items-center p-5 xs:mt-5">
      <div className="heading-subheading-wrapper flex flex-col mb-10 md:mb-20 md:mt-10 max-w-6xl">
        <div className=" heading-wrap text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold max-w-2xl leading-tight my-4">
          <h1>Protecting Our Culture, And Popularizing It.</h1>
        </div>
        <div className="sub-heading text-xl xs:text-2xl sm:text-3xl">
          <p>
            We’re a cultural NGO and creative studio bringing culture into
            people’s daily lives through storytelling, design, and campaigns.
          </p>
        </div>
      </div>
      <div className="recent-projects-wrapper flex flex-col xs:max-w-6xl mx-auto space-y-4 md:mt-10 md:mb-20 mb-10">
        <div className="project-headbtn flex items-center mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold mr-10 ml-1">
            Our Recent Projects
          </h2>
          <Link to="/creative" state={{ scrollTo: "recent-projects" }}>
            <button className="hidden sm:inline-flex px-10 py-3 mt-4 bg-black text-white rounded-full cursor-pointer text-xl transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white">
              See more
            </button>
          </Link>
        </div>
        <ProjectImages />
      </div>
      <div className="news-outlet-wrapper max-w-6xl md:mb-25 p-5 mb-10">
        <div className="news-outlet-heading">
          <h2 className="text-xl xxs:text-2xl xs:text-3xl font-semibold mb-3 xxs:mb-8">As seen on</h2>
        </div>
        <div className="news-outlet-imgwrap flex flex-wrap justify-center bg-[#F5F5F5] rounded-2xl sm:bg-white p-5 sm:gap-18 gap-2">
          <img
            src={vox}
            alt="Vox"
            className="w-20 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
          <img
            src={guardian}
            alt="Guardian"
            className="mt-1 w-30 h-auto object-contain scale-60  xxs:scale-70 sm:scale-100"
          />
          <img
            src={CNN}
            alt="CNN"
            className="mt-1 w-20 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
          <img
            src={euroblue}
            alt="Euroblue"
            className="mt-1 w-22 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
          <img
            src={euro}
            alt="Euro"
            className="mt-1 w-28 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
          <img
            src={dld}
            alt="DLD"
            className="mb-2 w-20 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
          <img
            src={politik}
            alt="Politik"
            className="mt-1 w-10 h-auto object-contain scale-60 xxs:scale-70 sm:scale-100"
          />
        </div>
      </div>
      <GetInTouch onClick={() => setModal(true)} />
      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default Homeheading;
