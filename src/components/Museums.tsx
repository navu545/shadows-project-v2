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

        <div className="museum-cards-holder grid grid-cols-4 gap-35 mb-15 place-items-center">
          <MuseumCardOne {...msmOne} />
          <MuseumCardOne {...msmTwo} />
          <MuseumCardOne {...msmThree} />
          <MuseumCardOne {...msmFour} />
        </div>

        <div className="museum-btn-wrap grid grid-cols-2 gap-10 items-center">
          <Link to="/bank-information">
            <button className="museum-btn w-full px-12 py-3.5 bg-black text-white rounded-full text-sm cursor-pointer">
              Donate
            </button>
          </Link>

          <Link to="/MuseumsListPage">
            <button className="museum-btn-two w-full px-12 py-3 border-3 border-black text-black rounded-full text-sm cursor-pointer">
              List of Museums
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Museums;
