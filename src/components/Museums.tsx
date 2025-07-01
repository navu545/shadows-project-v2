import { Link } from "react-router-dom";
import MuseumCardOne from "./MuseumCard/MuseumCardOne";
import { msmOne, msmTwo, msmThree, msmFour } from "./MuseumCard/MuseumAddress";

const Museums = () => {

  
  return (
    <div className="museum-wrap flex flex-col items-center">
      <div className="museum-container max-w-6xl flex flex-col items-center mb-20">
        <h1 className="museum-headline font-bold text-4xl mb-15">
          Museums We Are Working With
        </h1>

        <div className="museum-cards-holder mb-15 place-items-center grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-35 gap-y-10">
          <MuseumCardOne {...msmOne} />
          <MuseumCardOne {...msmTwo} />
          <MuseumCardOne {...msmThree} />
          <MuseumCardOne {...msmFour} />
        </div>

        <div className="museum-btn-wrap grid grid-cols-2 gap-10 items-center">
          <Link to="/bank-information">
            <button className="museum-btn w-full px-12 py-3.5 bg-black text-white rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
              Donate
            </button>
          </Link>

          <Link to="/MuseumsListPage">
            <button className="museum-btn-two w-full px-12 py-3 border-3 border-black text-black rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-black">
              List of Museums
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Museums;
