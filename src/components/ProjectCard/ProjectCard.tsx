import { project1 } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/campaign");
  };

  return (
    <div className="Project-card-wrap border-1 border-gray-300 rounded-sm h-67 w-60 overflow-hidden relative">
      <div className="project-card flex flex-col">
        <div className="Project-card-img-div h-32 mb-9 shadow-xl">
          <img
            src={project1}
            alt="Project-bw"
            onClick={handleNavigate}
            className="scale-102 h-44 cursor-pointer"
          />
        </div>
        <div className="Project-card-text p-2">
          <p
            onClick={handleNavigate}
            className="Project-card-headline font-bold underline underline-offset-3 mb-1 cursor-pointer"
          >
            The Stolen Art Campaign
          </p>
          <p className="Project-card-para text-sm text-[#787878]">
            A digital and offline collaborative initiative to shed light on
            Russian cultural erasure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
