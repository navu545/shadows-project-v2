import {
  artist1,
  artist2,
  artist3,
  artist4,
  artist5,
  artist1txt,
  artist2txt,
  artist3txt,
  artist4txt,
  artist5txt,
  painting1,
  painting1a,
  painting2,
  painting2a,
  painting3,
  painting3a,
  painting4,
  painting4a,
  painting5,
  painting5a,
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
          {/* Artist 1 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/kazymyr">
              <img
                src={artist1}
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
              <img src={painting1} alt="" className="w-35 rotate-[-8deg]" />
              <img src={painting1a} alt="" className="w-35 rotate-[8deg]" />
            </div>
          </div>

          {/* Artist 2 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/davyd">
              <img
                src={artist2}
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
              <img src={painting2} alt="" className="w-35 rotate-[-8deg]" />
              <img src={painting2a} alt="" className="w-35 rotate-[8deg]" />
            </div>
          </div>

          {/* Artist 3 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/ripyn">
              <img
                src={artist3}
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
              <img src={painting3} alt="" className="w-35 rotate-[-8deg]" />
              <img src={painting3a} alt="" className="w-35 rotate-[8deg]" />
            </div>
          </div>

          {/* Artist 4 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/exter">
              <img
                src={artist4}
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
              <img src={painting4} alt="" className="w-35 rotate-[-8deg]" />
              <img src={painting4a} alt="" className="w-35 rotate-[8deg]" />
            </div>
          </div>

          {/* Artist 5 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84 group">
            <Link to="/mariia">
              <img
                src={artist5}
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
              <img src={painting5} alt="" className="w-35 rotate-[-8deg]" />
              <img src={painting5a} alt="" className="w-35 rotate-[8deg]" />
            </div>
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <div
            className="absolute mt-10 transition-all duration-300"
            style={{
              top: "80%",
              left: "75%",
            }}
          >
            <Link to="/campaignHome">
              <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-2xl lg:text-3xl px-10 lg:px-15 py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
                HOMEPAGE
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="block md:hidden mt-20 text-center">
          <Link to="/campaignHome">
            <button className="rounded-full border-2 border-white italic text-xl px-10 py-4 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
              HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistComp;
