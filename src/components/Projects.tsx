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
  clickable: true,
  onClick: () =>
    window.open("https://www.instagram.com/lettersfromukraine/", "_blank"),
};

const prjFour = {
  source: project4,
  prjheading: "Shadows Cultural Media",
  prjtext:
    "Media project led between 2021/22 to educate youth on their history and culture.",
  clickable: true,
  onClick: () =>
    window.open("https://www.instagram.com/shadows.project/", "_blank"),
};

const Projects = () => {
  const [showModal, setModal] = useState(false);
  return (
    <div className="projects-container max-w-6xl flex flex-col items-center sm:mb-30 mb-10 xxs:mb-15 xs:mb-20 ">
      <h1 className="projects-headline sm:font-bold sm:text-4xl sm:mb-15 mb-2 font-semibold text-lg xxs:mb-7 xxs:text-xl xs:text-3xl xs:mb-9">
        Our Recent Projects
      </h1>

      <div className="projects-cards-holder mb-5 xxs:mb-15 place-items-center grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 xs:gap-y-10 xxs:gap-y-7 ">
        <div className="scale-90 xxs:scale-100">
          <ProjectCard />
        </div>

        <div className="scale-90 xxs:scale-100">
          <ProjectCardTwo {...prjTwo} />
        </div>

        <div className="scale-90 xxs:scale-100">
          <ProjectCardTwo {...prjThree} />
        </div>

        <div className="scale-90 xxs:scale-100">
          <ProjectCardTwo {...prjFour} />
        </div>
      </div>

      <div className="ProjectsBtn-wrap grid grid-cols-2 gap-10 items-center">
        <button
          className="
          px-4 py-2.5 text-xs bg-black text-white rounded-full cursor-pointer transition-all duration-300
          hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white
          xxs:px-7 xxs:py-1.5 xxs:text-sm xs:text-base xs:mt-2
          xs:px-10 xs:py-3 xs:mt-2 xs:text-m
        "
          onClick={() => setModal(true)}
        >
          Work with us
        </button>

        <button
          className="
        px-3 py-2 text-xs bg-white text-black border-2 rounded-full cursor-pointer transition-all duration-300
        hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white
        xxs:px-7 xxs:py-1.5 xxs:text-sm xs:text-base xs:mt-2
        xs:px-10 xs:py-2.5 xs:mt-2 xs:text-m
      "
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
