import MuseumCardOne from "./MuseumCard/MuseumCardOne";
import { useEffect, useState } from "react";
import { arrowselectright, arrowselectleft } from "../assets/images";
import {
  msmOne,
  msmTwo,
  msmThree,
  msmFour,
  msmFive,
  msmSix,
  msmSeven,
} from "./MuseumCard/MuseumAddress";

const cardsArray = [
  <MuseumCardOne {...msmOne} />,
  <MuseumCardOne {...msmTwo} />,
  <MuseumCardOne {...msmThree} />,
  <MuseumCardOne {...msmFour} />,
  <MuseumCardOne {...msmFive} />,
  <MuseumCardOne {...msmSix} />,
  <MuseumCardOne {...msmSeven} />,
  
];

const MuseumsListHolder = () => {
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const numCards = cardsArray.length;
    const test = Math.floor(numCards / -8);
    setPageCount(-test);
  }, []);

  const toggleNext = () => {
    if (activePage != pageCount - 1) {
      setActivePage((prev) => prev + 1);
    }
  };

  const togglePrev = () => {
    if (activePage != 0) {
      setActivePage((prev) => prev - 1);
    }
  };

  const pageIndices = Array.from({ length: pageCount }).map((_, i) => {
    const isActive = i === activePage;
    return (
      <button
        onClick={() => setActivePage(i)}
        key={i}
        className={`px-3 py-1 rounded-lg transition-all duration-200 ${
          isActive
            ? "border-2 border-black"
            : "border border-gray-300 hover:border-black"
        }`}
      >
        {i + 1}
      </button>
    );
  });

  const pages = [];
  for (let i = 0; i < cardsArray.length; i += 8) {
    const batch = cardsArray.slice(i, i + 8);
    pages.push(
      <div
        key={i}
        className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-10 mt-10 mb-15 place-items-center items-start "
      >
        {batch}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 sm:mt-20 mb-20">
      <div className="max-w-7xl">
        <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl sm:mb-15 text-center">
          Museums we are working with
        </h1>
        {pages[activePage]}
        <div className="msm-buttons flex justify-center gap-2">
          <button onClick={togglePrev}>
            <img src={arrowselectleft} alt="right-arrow"></img>
          </button>
          {pageIndices}
          <button onClick={toggleNext}>
            <img src={arrowselectright} alt="right-arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MuseumsListHolder;
