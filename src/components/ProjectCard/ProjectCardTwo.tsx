
interface projectCardProps {
  source: string,
  prjheading: string,
  prjtext: string,
  onClick?: () => void;
  clickable?: boolean;
}

const ProjectCard: React.FC<projectCardProps> = ({
  source,
  prjheading,
  prjtext,
  onClick,
  clickable = false,
}) => {
  const clickClass = clickable? "cursor-pointer" : "";
  return (
    <div className="Project-card-wrap border-1 border-gray-300 rounded-sm h-67 overflow-hidden w-60">
      <div className="project-card flex flex-col">
        <div className="Project-card-img-div h-39 overflow-hidden mb-2 shadow-xl">
          <img
            src={source}
            alt="Project-bw"
            className={`scale-117 p-1.5 ${clickClass}`}
            onClick={onClick}
          ></img>
        </div>
        <div className="Project-card-text p-2">
          <p
            className={`Project-card-headline font-bold underline underline-offset-3 mb-1 ${clickClass}`}
            onClick={onClick}
          >
            {prjheading}
          </p>
          <p className="Project-card-para text-sm text-[#787878]">{prjtext}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
