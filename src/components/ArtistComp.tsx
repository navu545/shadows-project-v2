import {
  artist1txt,
  artist2txt,
  artist3txt,
  artist4txt,
  artist5txt,
} from "../assets/images";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const ArtistComp = () => {
  const [hoverDirection, setHoverDirection] = useState<
    Record<number, string | null>
  >({});
  const artistRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const element = artistRefs.current[index];
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const midX = bounds.left + bounds.width / 2;
    const isLeft = e.clientX < midX;
    const newDir = isLeft ? "left" : "right";

    setHoverDirection((prev) => {
      if (prev[index] !== newDir) {
        return { ...prev, [index]: newDir };
      }
      return prev;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoverDirection((prev) => ({ ...prev, [index]: null }));
  };

  const getTransformClass = (
    index: number,
    layer: "back" | "mid" | "front"
  ) => {
    const dir = hoverDirection[index];
    if (dir === "left") {
      if (layer === "back")
        return "group-hover:-translate-x-[8%] group-hover:-translate-y-[8%] group-hover:rotate-[-4deg]";
      if (layer === "mid")
        return "group-hover:-translate-x-[4%] group-hover:-translate-y-[4%] group-hover:rotate-[4deg]";
      if (layer === "front") return "group-hover:rotate-[8deg]";
    }
    if (dir === "right") {
      if (layer === "back")
        return "group-hover:translate-x-[8%] group-hover:translate-y-[8%] group-hover:rotate-[4deg]";
      if (layer === "mid")
        return "group-hover:translate-x-[4%] group-hover:translate-y-[4%] group-hover:rotate-[-4deg]";
      if (layer === "front") return "group-hover:-rotate-[8deg]";
    }
    return "";
  };

  const artistData = [
    {
      link: "/kazymyr",
      painting:
        "https://ik.imagekit.io/shadows/Shadows-project/painting1pop.png",
      paintingAlt: "Painting 1",
      paintingA:
        "https://ik.imagekit.io/shadows/Shadows-project/painting1apop.png",
      paintingAAlt: "Painting 1A",
      artist: "https://ik.imagekit.io/shadows/Shadows-project/artist1.png",
      artistAlt: "Artist 1",
      text: artist1txt,
      textStyle: {
        width: "50%",
        top: "100%",
        left: "75%",
        transform: "translate(-50%, -50%)",
      },
    },
    {
      link: "/davyd",
      painting:
        "https://ik.imagekit.io/shadows/Shadows-project/painting2pop.png",
      paintingAlt: "Painting 2",
      paintingA:
        "https://ik.imagekit.io/shadows/Shadows-project/painting2apop.png",
      paintingAAlt: "Painting 2A",
      artist: "https://ik.imagekit.io/shadows/Shadows-project/artist2.png",
      artistAlt: "Artist 2",
      text: artist2txt,
      textStyle: {
        width: "50%",
        top: "40%",
        left: "95%",
        transform: "translate(-50%, -50%)",
      },
    },
    {
      link: "/ripyn",
      painting:
        "https://ik.imagekit.io/shadows/Shadows-project/painting3pop.png",
      paintingAlt: "Painting 3",
      paintingA:
        "https://ik.imagekit.io/shadows/Shadows-project/painting3apop.png",
      paintingAAlt: "Painting 3A",
      artist: "https://ik.imagekit.io/shadows/Shadows-project/artist3.png",
      artistAlt: "Artist 3",
      text: artist3txt,
      textStyle: {
        width: "40%",
        top: "100%",
        left: "26%",
        transform: "translate(-50%, -50%)",
      },
    },
    {
      link: "/exter",
      painting:
        "https://ik.imagekit.io/shadows/Shadows-project/painting4pop.png",
      paintingAlt: "Painting 4",
      paintingA:
        "https://ik.imagekit.io/shadows/Shadows-project/painting4apop.png",
      paintingAAlt: "Painting 4A",
      artist: "https://ik.imagekit.io/shadows/Shadows-project/artist4.png",
      artistAlt: "Artist 4",
      text: artist4txt,
      textStyle: {
        width: "40%",
        top: "97%",
        left: "15%",
        transform: "translate(-50%, -50%)",
      },
    },
    {
      link: "/mariia",
      painting:
        "https://ik.imagekit.io/shadows/Shadows-project/painting5pop.png",
      paintingAlt: "Painting 5",
      paintingA:
        "https://ik.imagekit.io/shadows/Shadows-project/painting5apop.png",
      paintingAAlt: "Painting 5A",
      artist: "https://ik.imagekit.io/shadows/Shadows-project/artist5.png",
      artistAlt: "Artist 5",
      text: artist5txt,
      textStyle: {
        width: "60%",
        top: "-5%",
        left: "35%",
        transform: "translate(-50%, -50%)",
      },
    },
  ];

  return (
    <div className="artist-wrap flex flex-col items-center bg-[#171717] text-white overflow-hidden">
      <div className="artists relative max-w-7xl items-center mt-10 mb-40 px-4">
        <div className="artists-heading text-right text-4xl sm:text-5xl lg:text-7xl">
          <h1 className="italic font-light">
            MEET OUR <span className="not-italic font-normal">UKRAINIAN </span>
            ARTISTS.
          </h1>
        </div>

        <div className="artists-imgs grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-10 lg:gap-x-20 gap-y-20 lg:gap-y-30 mt-20 justify-items-center">
          {artistData.map((artist, index) => (
            <div
              key={index}
              ref={(el) => {
                artistRefs.current[index] = el;
              }}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group overflow-visible perspective-[1000px]"
            >
              <Link
                to={artist.link}
                className="block relative z-10 w-full h-full"
              >
                <img
                  src={artist.painting}
                  alt={artist.paintingAlt}
                  className={`absolute top-0 left-0 w-full h-full object-contain z-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] scale-[0.98] ${getTransformClass(
                    index,
                    "back"
                  )}`}
                />
                <img
                  src={artist.paintingA}
                  alt={artist.paintingAAlt}
                  className={`absolute top-0 left-0 w-full h-full object-contain z-10 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] scale-[0.99] ${getTransformClass(
                    index,
                    "mid"
                  )}`}
                />
                <img
                  src={artist.artist}
                  alt={artist.artistAlt}
                  className={`relative z-20 w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.02] ${getTransformClass(
                    index,
                    "front"
                  )}`}
                />
              </Link>
              <img
                src={artist.text}
                alt="Artist Text"
                className="absolute z-30 pointer-events-none"
                style={artist.textStyle}
              />
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <div
            className="absolute mt-10 transition-all duration-300"
            style={{ top: "80%", left: "75%" }}
          >
            <Link to="/manifesto">
              <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-2xl lg:text-3xl px-10 lg:px-15 py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)] focus:text-white active:bg-[linear-gradient(to_right,#2597FF,#FFF500)] active:text-white">
                HOMEPAGE
              </button>
            </Link>
          </div>
        </div>

        <div className="block md:hidden mt-20 text-center">
          <Link to="/manifesto">
            <button className="rounded-full border-2 border-white italic text-xl px-10 py-4 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)] focus:text-white active:bg-[linear-gradient(to_right,#2597FF,#FFF500)] active:text-white">
              HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistComp;
