import { Link } from "react-router-dom";
import MuseumCardOne from "./MuseumCard/MuseumCardOne";
import { msmOne, msmTwo, msmThree, msmFour } from "./MuseumCard/MuseumAddress";

const Museums = () => {

  
  return (
    <div className="museum-wrap flex flex-col items-center">
      <div className="museum-container max-w-6xl flex flex-col items-center mb-20">
        <h1 className="museum-headline sm:font-bold sm:text-4xl sm:mb-15 mb-4 font-semibold text-md xxs:mb-7 xxs:text-xl xs:text-3xl xs:mb-9">
          Museums We Are Working With
        </h1>

        <div className="museum-cards-holder mb-7 xxs:mb-15 place-items-center grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-35 xxs:gap-y-10">
          <div className="scale-95 xxs:scale-100">
            <MuseumCardOne {...msmOne} />
          </div>
          <div className="scale-95 xxs:scale-100">
            <MuseumCardOne {...msmTwo} />
          </div>
          <div className="scale-95 xxs:scale-100">
            <MuseumCardOne {...msmThree} />
          </div>
          <div className="scale-95 xxs:scale-100">
            <MuseumCardOne {...msmFour} />
          </div>
        </div>

        <div className="museum-btn-wrap grid grid-cols-2 gap-10 items-center">
          <Link to="/bank-information">
            <button
              className="
        w-full px-4 py-2.5 text-xs bg-black text-white rounded-full cursor-pointer transition-all duration-300
        hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white
        xxs:px-7 xxs:py-2.5 xxs:text-sm
        xs:text-base xs:mt-2 xs:px-10 xs:py-3
      "
            >
              Donate
            </button>
          </Link>

          <Link to="/MuseumsListPage">
            <button
              className="
             px-3 py-2 text-xs bg-white text-black border-2 rounded-full cursor-pointer transition-all duration-300
             hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white
             xxs:px-6 xxs:py-2 xxs:text-sm xs:text-base xs:mt-2
             xs:px-10 xs:py-2.5 xs:mt-2 xs:text-m
           "
            >
              List of Museums
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Museums;
