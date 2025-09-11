import {
  credit1,
  credit2,
  credit3,
  credit4,
  credit5,
  credit6,
  credit7,
  credit8,
  credit9,
  credit10,
  credit11,
} from "../assets/images";

const credits = [
  {
    label: "⬤\u2003PROJECT ADVISORY",
    name: "Oksana Semenko, Tetyana Filevska, Oleksandr Alforov",
  },
  {
    label: "",
    name: "Museum of Repin in Kharkiv, Ukrainian Cultural Center in Paris, Ukranian Museum in New York",
  },
  { label: "", name: "" },
  {
    label: "⬤\u2003RESEARCH",
    name: "Alina Kaliuha, Lili Zhao, Andrew Nazarenko",
  },
  { label: "", name: "" },
  {
    label: "⬤\u2003CONTENT",
    name: "Naomi Nemickas, Viktor Gorskiy, Viktoriia Shevchenko, Bozhena Nadopta, Costanza Russo, Yde Bosma, Daria Honokhova",
  },
  { label: "", name: "" },
  { label: "⬤\u2003INSTAGRAM FILTER", name: "Hannah Tomczyk" },
  { label: "", name: "" },
  { label: "⬤\u2003WEBSITE DESIGN", name: "Navdeep Singh" },
  { label: "", name: "" },
  {
    label: "⬤\u2003INSTAGRAM DESIGN",
    name: "Hannah Tomczyk, Yelyzaveta Volkova, Nataliia Ratushniak, Iryna Kovalenko, Mariia Derevianko",
  },
];

const CreditsComp = () => {
  return (
    <div className="credits-wrapper flex flex-col items-center bg-[#171717] text-white px-4">
      <div className="credits max-w-7xl mt-10 lg:mt-15 mb-20 w-full">
        <div className="credits-heading text-right italic font-light">
          <h1
            className="
            text-3xl
            xxxs:text-4xl
            xs:text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            THE{" "}
            <span className="not-italic font-normal">STOLEN ART CAMPAIGN</span>{" "}
            WOULD NOT BE POSSIBLE WITHOUT THE{" "}
            <span className="not-italic font-normal">HELP OF OUR FRIENDS:</span>
          </h1>
        </div>

        <div className="credit-details flex flex-col justify-between mt-10 lg:mt-15">
          <div className="flex flex-col space-y-2 w-full">
            {credits.map(({ label, name }) => (
              <div
                key={name}
                className="w-full flex flex-wrap justify-between border-b border-gray-600 pb-2"
              >
                <p
                  className="
                  text-sm
                  xs:text-base
                  md:text-lg
                  lg:text-base
                  font-bold text-left
                "
                >
                  {label || "\u00A0"}
                </p>
                <p
                  className="
                  text-sm
                  xs:text-base
                  md:text-lg
                  lg:text-base
                  text-right
                "
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
    partners mt-16 lg:mt-20 mb-20 lg:mb-50
    flex flex-col 
    gap-8 xl:gap-12
    justify-center
  "
        >
          <div
            className="
      partners-heading italic font-light text-center xl:text-left
    "
          >
            <h1
              className="
        text-3xl
        xxxs:text-4xl
        xs:text-5xl
        md:text-5xl
        xl:text-7xl
      "
            >
              AND OUR <span className="not-italic font-normal">PARTNERS:</span>
            </h1>
          </div>

          <div
            className="
      partners-img flex flex-wrap justify-center xl:justify-start
      gap-4 lg:gap-5
      xl:flex-col xl:gap-4 xl:items-start
    "
          >
            <div className="hidden xl:flex flex-wrap gap-4 xl:gap-20 mt-10">
              <img
                src={credit1}
                className="w-14 h-14 scale-160 xs:w-16 xs:h-16 sm:w-20 sm:h-20 object-contain "
                alt=""
              />
              <img
                src={credit2}
                className="w-16 h-16 scale-160 xs:w-18 xs:h-18 sm:w-23 sm:h-22 object-contain -mt-1 "
                alt=""
              />
              <img
                src={credit3}
                className="w-16 h-16 scale-160 xs:w-17 xs:h-17 sm:w-21 sm:h-21 object-contain "
                alt=""
              />
              <img
                src={credit4}
                className="w-18 h-18 scale-160 xs:w-20 xs:h-20 sm:w-23 sm:h-23 object-contain -mt-1 "
                alt=""
              />
              <img
                src={credit5}
                className="w-20 h-20 scale-170 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain "
                alt=""
              />
              <img
                src={credit6}
                className="w-20 h-20 scale-135 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit7}
                className="w-20 h-20 scale-190 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit8}
                className="w-20 h-20 scale-220 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit9}
                className="w-20 h-20 scale-130 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit10}
                className="w-20 h-20 scale-130 mt-1 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit11}
                className="w-20 h-20 scale-135 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
            </div>

            <div className="hidden xl:flex flex-wrap gap-4 xl:gap-2 xl:-ml-4"></div>

            <div className="hidden xl:flex flex-wrap gap-4 xl:gap-2 xl:-ml-4"></div>

            <div className="xl:hidden flex flex-wrap justify-center gap-4 lg:gap-4">
              <img
                src={credit1}
                className="w-16 h-16 xs:w-16 xs:h-16 sm:w-20 sm:h-20 object-contain mr-2 mt-1"
                alt=""
              />
              <img
                src={credit2}
                className="w-18 h-18 xs:w-18 xs:h-18 sm:w-22 sm:h-22 object-contain mr-2"
                alt=""
              />
              <img
                src={credit3}
                className="w-17 h-17 xs:w-17 xs:h-17 sm:w-21 sm:h-21 object-contain mr-2 mt-1"
                alt=""
              />
              <img
                src={credit4}
                className="w-20 h-20 xs:w-20 xs:h-20 sm:w-23 sm:h-23 object-contain"
                alt=""
              />
              <img
                src={credit5}
                className="w-20 h-20 -ml-3 xs:-ml-0 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit6}
                className="w-20 h-20 scale-87 mt-1 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit7}
                className="w-20 h-20 scale-115 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit8}
                className="w-20 h-20 scale-145 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit9}
                className="w-20 h-20 scale-80 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit10}
                className="w-20 h-20 scale-80 mt-1 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
              <img
                src={credit11}
                className="w-20 h-20 scale-90 xs:w-22 xs:h-22 sm:w-25 sm:h-25 object-contain"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="thankyou italic font-light text-center mt-10">
          <h1
            className="
            text-3xl
            xxxs:text-4xl
            xs:text-5xl
            md:text-6xl
            lg:text-7xl
          "
          >
            THANK YOU!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CreditsComp;