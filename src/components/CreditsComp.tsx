import { credit1, credit2, credit3, credit4, credit5 } from "../assets/images";
const credits = [
  { label: "⬤\u2003PROJECT ADVISORY", name: "Oksana Semenko" },
  { label: "", name: "Oleksandr Alforov" },
  { label: "", name: "Museum of Repin in Kharkiv" },
  { label: "", name: "Ukrainian Cultural Center in Paris" },
  { label: "⬤\u2003RESEARCH", name: "Alina Kaliuha" },
  { label: "", name: "Lili Zhao" },
  { label: "", name: "Andrew Nazarenko" },
  { label: "⬤\u2003INSTAGRAM CONTENT", name: "Daria Honokhova" },
  { label: "", name: "Yde Bosma" },
  { label: "⬤\u2003INSTAGRAM FILTER", name: "Hannah Tomczyk" },
  { label: "⬤\u2003WEBSITE DESIGN", name: "Navdeep Singh" },
  { label: "⬤\u2003INSTAGRAM DESIGN", name: "Hannah Tomczyk" },
  { label: "", name: "Yelyzaveta Volkova" },
];

const CreditsComp = () => {
  return (
    <div className="credits-wrapper flex flex-col items-center bg-[#171717] text-white">
      <div className="credits max-w-7xl mt-15 mb-20">
        <div className="credits-heading text-right text-7xl italic font-light">
          <h1>
            THE{" "}
            <span className="not-italic font-normal">STOLEN ART CAMPAIGN</span>{" "}
            WOULD NOT BE POSSIBLE WITHOUT THE{" "}
            <span className="not-italic font-normal">HELP OF OUR FRIENDS:</span>
          </h1>
        </div>

        <div className="credit-details flex flex-col justify-between mt-15">
          <div className="flex flex-col space-y-1 w-full">
            {credits.map(({ label, name }) => (
              <div
                key={name}
                className="w-full flex justify-between border-b border-gray-600 pb-2"
              >
                <p className="text-base font-bold text-left">
                  {label || "\u00A0"}
                </p>

                <p className="text-base text-right">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="partners flex mt-20 mb-50">
          <div className="partners-heading text-7xl italic font-light mr-13">
            <h1>
              AND OUR <span className="not-italic font-normal">PARTNERS:</span>
            </h1>
          </div>
          <div className="partners-img flex items-center gap-7 -mt-2">
            <img src={credit1} className="w-20 h-20 object-contain" alt="" />
            <img src={credit2} className="w-22 h-22 object-contain" alt="" />
            <img src={credit3} className="w-21 h-21 object-contain" alt="" />
            <img src={credit4} className="w-23 h-23 object-contain" alt="" />
            <img src={credit5} className="w-25 h-25 object-contain" alt="" />
          </div>
        </div>

        <div className="thankyou text-7xl italic font-light text-center mt-10">
          <h1>THANK YOU!</h1>
        </div>
      </div>
    </div>
  );
};

export default CreditsComp;
