import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectCardTwo from "./ProjectCard/ProjectCardTwo";
import { project2, project3, project4 } from "../assets/images";
import { useState } from "react";
import FormModal from "./FormModal";

const prjTwo = {
  source: project2,
  prjheading: "The Grafitti Chronicles",
  prjtext:
    "An immersive digital website, bringing the graffiti of Saint Sophia to life.",
  clickable: true,
  onClick: () =>
    window.open("https://graffiti-chronicles.shadowsproject.org/", "_blank"),
};

const prjThree = {
  source: project3,
  prjheading: "Letters From Ukraine",
  prjtext:
    "Digital archive launched amid the full-scale invasion of letters from Ukrainians to the world.",
};

const prjFour = {
  source: project4,
  prjheading: "Shadows Cultural Media",
  prjtext:
    "Media project led between 2021/22 to educate youth on their history and culture.",
};

const Projects = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div className="projects-container max-w-6xl flex flex-col items-center mb-30">
      <h1 className="projects-headline font-bold text-4xl mb-15">
        Our Recent Projects
      </h1>

      <div className="projects-cards-holder grid grid-cols-4 gap-10 mb-15 group place-items-center">
        <div>
          <ProjectCard />
        </div>

        <div className="group/card filter grayscale transition duration-300 hover:filter-none">
          <ProjectCardTwo {...prjTwo} />
        </div>

        <div className="group/card filter grayscale transition duration-300 hover:filter-none">
          <ProjectCardTwo {...prjThree} />
        </div>

        <div className="group/card filter grayscale transition duration-300 hover:filter-none">
          <ProjectCardTwo {...prjFour} />
        </div>
      </div>

      <div className="ProjectsBtn-wrap grid grid-cols-2 gap-10 items-center">
        <button
          className="projectBtn w-full px-12 py-4 bg-black text-white rounded-full text-sm cursor-pointer"
          onClick={() => setModal(true)}
        >
          Work with us
        </button>

        <button
          className="projectBtnTwo w-full px-12 py-3 border-3 border-black text-black rounded-full text-sm cursor-pointer"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSftFAJCrFFyp4fIbNhBBEJEiXKCyY9Fp36bLcSyhXWCmN0A1Q/viewform?usp=dialog"
            )
          }
        >
          Join us
        </button>
      </div>
      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default Projects;
