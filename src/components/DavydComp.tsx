import {
  davyd,
  diary,
  resource1,
  resource2,
  resource3,
  davydArrow,
} from "../assets/images";
import { Link } from "react-router-dom";

const DavydComp = () => {
  return (
    <div className="Davyd-wrap flex flex-col items-center">
      <div className="Davyd max-w-7xl items-center mb-10 overflow-hidden px-5">
        {/* IMAGE & HEADING SECTION */}
        <div className="davyd-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          {/* Heading first on small screens */}
          <div className="Davyd-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                DAVYD <span className="not-italic font-normal">BURLIUK</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Semyrotivschyna, present-day Sumy region, Ukraine (1882
                - 1967)
              </p>
            </div>
            {/* Arrow hidden below lg */}
            <div className="hidden lg:block absolute top-[50%] right-[65%]">
              <img src={davydArrow} className="scale-320" alt="Arrow" />
            </div>
          </div>

          {/* Image below heading on mobile */}
          <div className="davyd-img order-2 lg:order-1">
            <img src={davyd} alt="Davyd Burliuk" className="w-full" />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="Davyd-text text-lg xs:text-xl sm:text-2xl mb-10 text-justify">
          <p>
            Davyd Burliuk is often celebrated as the “father of Russian
            futurism” — he provided much of the organizing drive behind the
            early Futurist movement, organized its landmark exhibitions, and
            without him, there would’ve been no Futurism in the Russian Empire.
            <br />
            <br /> But Burliuk was a patriotic Ukrainian, with an infectious
            kindness and sense of humor, as described by Burliuk’s son:
            <br />
            <br /> “His life has no implication of doom or expressive failure,
            for he was a true Ukrainian: a man of joy and laughter.”
            <br />
            <br /> David Burliuk was born on July 21 in 1882 on the farm
            Semirotivshchyna (Semirotivka) near the village of Ryabushki,
            Lebedynsky district, Kharkiv province (now the Burliuk tract of
            Lebedynsky district, Sumy region).
            <br />
            <br /> Not only was Burliuk Ukrainian, but he was a descendant of
            Zaporozhian Cossacks. The connection to his heritage and history was
            often reflected in Burliulk’s writing in{" "}
            <span className="underline">
              “Fragments from the Memoirs of a Futurist”
            </span>
            ...
          </p>
        </div>

        {/* DIARY IMAGE */}
        <div className="diary-img">
          <img src={diary} alt="Diary" className="w-full" />
        </div>

        {/* SECOND TEXT BLOCK */}
        <div className="Davyd-second-text text-lg xs:text-xl sm:text-2xl text-justify mt-10 mb-25">
          <p>
            It is no surprise that Burliuk’s Cossack heritage and his Ukrainian
            homeland served as a deep inspiration for his work. Friends and
            family of Burliuk described his habit of wearing one earring in his
            right ear, in the style of the Cossacks.
            <br /> <br /> In 1915, Burliuk painted “Sviatoslav” in the style of
            Ancient Ukrainian painting. In his book, “Predky Moi” (my
            ancestors,) he describes his painting process and the influence his
            Ukrainian heritage has on his artwork.
            <br />
            <br /> Burliuk mimicked the imagery and spirit of the steppe as a
            representation of Ukrainian identity. Burliuk frequently described
            his art as “simple,” “laconic,” or “coarse,” though the most direct
            allusion to the energy of the steppes is in the description of his
            art as “wild beauty.” Burliuk has also said — “a child of the
            Ukrainian steppes, I have always been most partial to horizontal
            formats.”
            <br />
            <br /> Not only was he inspired by the artifacts he found in
            Ukrainian lands, but would quite literally infuse his paintings with
            it. Burliuk was known to drag a new canvas outside, fling it into
            the dirt, and paint on it with clay and sand so that this canvas
            would become “the flesh and blood of the land.”
            <br />
            <br /> It’s clear that in everything he did, Burliuk drew
            inspiration from the strength and determination of his ancestors —
            and in his art, we see these core elements of what Ukrainian
            identity represented to Burliuk.
          </p>
        </div>

        {/* RESOURCES SECTION */}
        <div className="resources flex flex-col items-center justify-center mb-15">
          <div className="resources-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light italic mb-5 text-center">
            <h1>
              MORE <span className="not-italic font-normal">RESOURCES</span>
            </h1>
          </div>
          <div className="resources-imgs grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
            <img src={resource1} className="bg-[#f0ecec] rounded-2xl w-full" />
            <img src={resource2} className="rounded-2xl w-full" />
            <img src={resource3} className="bg-[#f0ecec] rounded-2xl w-full" />
          </div>
        </div>

        {/* BACK TO ARTISTS BUTTON */}
        <div className="back-to-artists mt-10 text-center">
          <Link to="/artists">
            <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-xl sm:text-2xl lg:text-3xl px-6 sm:px-10 lg:px-15 py-3 sm:py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
              ALL&nbsp; <span className="not-italic font-normal">ARTISTS</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DavydComp;
