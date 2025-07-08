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
    <div className="campaign-wrapper">
      <div className="relative w-screen h-screen overflow-hidden">
        <div
          className="absolute top-0 left-0 origin-top-left overflow-hidden"
          style={{
            width: "1536px",
            height: "730px",
            transform: `scale(${window.innerWidth / 1536})`,
          }}
        >
          <div className="heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl">
              Our culture has been stolen for too long.
            </h1>
            <h1 className="text-4xl">We’re here to take it back.</h1>
          </div>

          <img
            src={campaign1}
            className="absolute left-[50px] top-[100px] w-[200px]"
          />
          <img
            src={campaign2}
            className="absolute left-[50px] top-[300px] w-[200px]"
          />
          <img
            src={campaign3}
            className="absolute left-[50px] top-[500px] w-[200px]"
          />

          {/* Right side images */}
          <img
            src={campaign4}
            className="absolute right-[50px] top-[100px] w-[200px]"
          />
          <img
            src={campaign5}
            className="absolute right-[50px] top-[300px] w-[200px]"
          />
          <img
            src={campaign6}
            className="absolute right-[50px] top-[500px] w-[200px]"
          />

          <Link to="/campaignHome">
            <button className="rounded-full border-2 border-black flex items-center justify-center cursor-pointer italic text-3xl w-60 h-60">
              ENTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
