import { project1, projectRibbon } from "../../assets/images";


const ProjectCard = () => {
  return (
    <div className="Project-card-wrap border-1 border-gray-300 rounded-sm h-67 w-60 overflow-hidden relative">
      <div className="project-card flex flex-col">
        <div className="Project-card-img-div h-32 mb-9 shadow-xl">
          <img src={project1} alt="Project-bw" className="scale-102 h-44"></img>
        </div>
        <div className="Project-card-text p-2">
          <p className="Project-card-headline font-bold underline underline-offset-3 mb-1">
            The Stolen Art Campaign
          </p>
          <p className="Project-card-para text-sm text-[#787878]">
            A digital and offline collaborative initiative to shed light on
            Russian cultural erasure.
          </p>
        </div>
      </div>
      <img
        src={projectRibbon}
        className="absolute scale-58  bottom-17 left-13"
      ></img>
    </div>
  );
};

export default ProjectCard;
