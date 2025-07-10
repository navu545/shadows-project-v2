import {
  campaign1,
  campaign2,
  campaign3,
  campaign4,
  campaign5,
  campaign6,
} from "../assets/images";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Campaign = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-start text-white">
        <h1 className="text-xl md:text-3xl lg:text-4xl mb-10 italic font-light">
          OUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="not-italic font-normal">CULTURE</span>
          &nbsp;&nbsp;&nbsp;&nbsp; HAS&nbsp;&nbsp;&nbsp;&nbsp; BEEN
          <br />
          <span className="not-italic font-normal">STOLEN</span> FOR{" "}
          <span className="not-italic font-normal">TOO LONG.</span>
        </h1>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-light italic">
          WE'RE HERE TO{" "}
          <span className="not-italic font-normal">TAKE IT BACK.</span>
        </h1>
      </div>

      <img
        src={campaign1}
        alt=""
        className="absolute top-[0vw] left-[3vw] w-[22vw] z-10"
      />

      <img
        src={campaign2}
        alt=""
        className="absolute top-[10vw] left-[0vw] w-[15vw] z-9"
      />

      <img
        src={campaign3}
        alt=""
        className="absolute top-[22vw] left-[8vw] w-[19vw]"
      />

      <img
        src={campaign4}
        alt=""
        className="absolute top-[0vw] right-[4vw] w-[18vw]"
      />

      <img
        src={campaign5}
        alt=""
        className="absolute top-[7vw] right-[0vw] w-[10vw]"
      />

      <img
        src={campaign6}
        alt=""
        className="absolute bottom-[0vw] right-[24vw] w-[18vw]"
      />

      <Link to="/campaignHome">
        <button className="absolute top-[68%] left-[83vw] w-[10vw] aspect-square rounded-full border-2 border-white text-white flex items-center justify-center italic text-base md:text-xl cursor-pointer">
          ENTER
        </button>
      </Link>
    </div>
  );
};

export default Campaign;
