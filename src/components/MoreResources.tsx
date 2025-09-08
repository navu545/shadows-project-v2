
type Resource = {
  src: string;
  link: string;
  alt: string;
};

type MoreResourcesProps = {
  resource: Resource[];
};

const MoreResources = ({ resource }: MoreResourcesProps) => {
  const resources = resource;
  return (
    <div className="flex flex-col items-center sm:mb-20">
      <div
        className="
          relative w-full
          max-w-xs
          xs:max-w-lg
          sm:max-w-2xl
          md:max-w-3xl
          lg:max-w-5xl
          xl:max-w-7xl
          overflow-hidden mt-10 mb-10
        "
      >
        <div className="flex gap-8 animate-slide-bounce">
          {resources.map((res, idx) => (
            <a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-100 bg-white rounded-lg p-[10px] shadow block"
            >
              <img
                src={res.src}
                alt={res.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreResources;
