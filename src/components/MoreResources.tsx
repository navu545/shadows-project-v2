import {
  resource1,
  resource2,
  resource3,
  resource4,
} from "../assets/images";

const MoreResources = () => {
  const resources = [
    {
      src: resource1,
      link: "https://rodovid.net/en/product/215/malevych-avtobiografichni-zapysky-19181933-malevich-autobiographic-notes-19181933/",
      alt: "Resource 1",
    },
    {
      src: resource2,
      link: "https://rodovid.net/en/product/250/kazimir-malevich-kyiv-aspect/",
      alt: "Resource 2",
    },
    {
      src: resource3,
      link: "https://drive.google.com/drive/folders/1wAciBckFFA0OD0_T4TXTzMX656CUA4L1?usp=sharing",
      alt: "Resource 3",
    },
    {
      src: resource4,
      link: "https://en.uartlib.org/kazimir-malevich-ukraine/",
      alt: "Resource 4",
    },
  ];

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
