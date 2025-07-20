import {
  artist1txt,
  artist2txt,
  artist3txt,
  artist4txt,
  artist5txt,

} from "../assets/images";
import { Link } from "react-router-dom";

const ArtistComp = () => {
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
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/kazymyr">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/artist1.png"
                alt="Artist 1"
                className="w-full object-contain"
              />
            </Link>
            <img
              src={artist1txt}
              alt="Artist 1 Text"
              className="absolute"
              style={{
                width: "50%",
                top: "100%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="absolute -bottom-[11%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex -space-x-6 z-10 pointer-events-none">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting1pop.png"
                alt=""
                className="w-35 rotate-[-8deg]"
              />
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting1apop.png"
                alt=""
                className="w-35 rotate-[8deg]"
              />
            </div>
          </div>

          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/davyd">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/artist2.png"
                alt="Artist 2"
                className="w-full object-contain"
              />
            </Link>
            <img
              src={artist2txt}
              alt="Artist 2 Text"
              className="absolute"
              style={{
                width: "50%",
                top: "40%",
                left: "95%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="absolute -bottom-[11%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex -space-x-6 z-10 pointer-events-none">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting2pop.png"
                alt=""
                className="w-35 rotate-[-8deg]"
              />
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting2apop.png"
                alt=""
                className="w-35 rotate-[8deg]"
              />
            </div>
          </div>

          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/ripyn">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/artist3.png"
                alt="Artist 3"
                className="w-full object-contain"
              />
            </Link>
            <img
              src={artist3txt}
              alt="Artist 3 Text"
              className="absolute"
              style={{
                width: "40%",
                top: "100%",
                left: "26%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="absolute -bottom-[11%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex -space-x-6 z-10 pointer-events-none">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting3pop.png"
                alt=""
                className="w-35 rotate-[-8deg]"
              />
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting3apop.png"
                alt=""
                className="w-35 rotate-[8deg]"
              />
            </div>
          </div>

          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/exter">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/artist4.png"
                alt="Artist 4"
                className="w-full object-contain"
              />
            </Link>
            <img
              src={artist4txt}
              alt="Artist 4 Text"
              className="absolute"
              style={{
                width: "40%",
                top: "97%",
                left: "15%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="absolute -bottom-[11%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex -space-x-6 z-10 pointer-events-none">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting4pop.png"
                alt=""
                className="w-35 rotate-[-8deg]"
              />
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting4apop.png"
                alt=""
                className="w-35 rotate-[8deg]"
              />
            </div>
          </div>

          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/mariia">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/artist5.png"
                alt="Artist 5"
                className="w-full object-contain"
              />
            </Link>
            <img
              src={artist5txt}
              alt="Artist 5 Text"
              className="absolute"
              style={{
                width: "60%",
                top: "-5%",
                left: "35%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <div className="absolute -bottom-[11%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex -space-x-6 z-10 pointer-events-none">
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting5pop.png"
                alt=""
                className="w-35 rotate-[-8deg]"
              />
              <img
                src="https://ik.imagekit.io/shadows/Shadows-project/painting5apop.png"
                alt=""
                className="w-35 rotate-[8deg]"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div
            className="absolute mt-10 transition-all duration-300"
            style={{
              top: "80%",
              left: "75%",
            }}
          >
            <Link to="/manifesto">
              <button
                className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-2xl lg:text-3xl px-10 lg:px-15 py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white"
              >
                HOMEPAGE
              </button>
            </Link>
          </div>
        </div>

        <div className="block md:hidden mt-20 text-center">
          <Link to="/manifesto">
            <button
              className="rounded-full border-2 border-white italic text-xl px-10 py-4 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white"
            >
              HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistComp;
