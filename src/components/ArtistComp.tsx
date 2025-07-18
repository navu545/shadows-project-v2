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
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84">
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
              className="absolute w-1/2"
              style={{
                top: "100%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Artist 2 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84">
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
              className="absolute w-1/2"
              style={{
                top: "40%",
                left: "95%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Artist 3 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84">
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
              className="absolute w-1/3"
              style={{
                top: "100%",
                left: "23%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Artist 4 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84">
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
              className="absolute w-2/5"
              style={{
                top: "97%",
                left: "15%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Artist 5 */}
          <div className="relative w-36 xs:w-44 sm:w-48 md:w-56 lg:w-84">
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
              className="absolute w-3/5"
              style={{
                top: "-5%",
                left: "35%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>

        {/* Button placement — absolute above md, relative below */}
        <div className="hidden md:block">
          <div
            className="absolute mt-10 transition-all duration-300"
            style={{
              top: "80%",
              left: "75%",
            }}
          >
            <Link to="/campaignHome">
              <button
                className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-2xl lg:text-3xl px-10 lg:px-15 py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
            hover:text-white"
              >
                HOMEPAGE
              </button>
            </Link>
          </div>
        </div>

        {/* Button for <768px — stacked below */}
        <div className="block md:hidden mt-20 text-center ">
          <Link to="/campaignHome">
            <button
              className="rounded-full border-2 border-white italic text-xl px-10 py-4 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
            hover:text-white"
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
