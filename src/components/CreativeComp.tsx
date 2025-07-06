import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Projects from "./Projects";
import FormModal from "./FormModal";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  projectMain,
  projectpoint1,
  projectpoint2,
  projectpoint3,
} from "../assets/images";

const CreativeComp = () => {
  const [showModal, setModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.state?.scrollTo === "recent-projects") {
      const timeout = setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        navigate(location.pathname, { replace: true });
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [location.state?.scrollTo, location.pathname, navigate]);

  return (
    <div className="creativecomp-wrap flex flex-col items-center">
      <div
        className="relative creativeComp-headwrap-main flex items-center max-w-6xl mb-10 justify-between sm:mt-10 sm:p-5 mt-7 px-2 xs:px-5 overflow-hidden xxxs:scale-110 xxs:scale-100
      "
      >
        <div className="creativeComp-headwrap w-7/10 xs:w-7/10">
          <h1
            className="
        font-semibold leading-tight
        text-4xl mb-3 w-75 mt-5
        xxs:text-[41px] xxs:mb-5 xxs:w-90
        xs:text-5xl xs:mb-10 xs:w-auto
        md:text-6xl
      "
          >
            We Bring Culture To Life
          </h1>
          <p
            className="
        text-xs w-45
        xxs:text-sm
        xxs:w-55
        xs:text-xl
        xs:w-auto
        md:text-2xl
      "
          >
            We work on collaborative cultural projects with brands,
            organizations, and institutions. We use modern design, marketing,
            and communications to help people connect with their culture in
            meaningful ways across physical and digital spaces.
          </p>
          <div className="mb-10"></div>
          <button
            className="
        px-3 py-2 text-xs bg-black text-white rounded-full cursor-pointer transition-all duration-300
        hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white
        xxs:px-7 xxs:py-1.5 xxs:text-sm xs:text-base xs:mt-2
        xs:px-10 xs:py-3 xs:mt-2 xs:text-m
      "
            onClick={() => setModal(true)}
          >
            Work with us
          </button>
        </div>
        <div className="creativeComp-mainimg -mr-0 xs:-mr-10 md:-mr-0">
          <img
            className="
        absolute scale-40 -bottom-20 left-20 ml-5
        xxs:scale-55 xxs:-top-10 xxs:left-30
        xs:static xs:scale-100 xs:bottom-auto xs:left-auto xs:ml-0
      "
            src={projectMain}
            alt=""
          />
        </div>
      </div>

      <div className="creative3-point max-w-6xl mb-10 xxs:mb-15 xs:mb-20 sm:mb-30 bg-[#E9F0ED] min-h-[200px] grid grid-cols-3 gap-20 xs:rounded-2xl place-items-center p-10 items-start">
        <div className="creative1-point px-2">
          <h2 className="font-bold text-xs xxs:text-sm xs:text-lg sm:text-3xl mb-1">
            15+ digital partnerships
          </h2>
          <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-lg">
            with government agencies, NGOs, and brands to promote cultural
            storytelling.
          </p>
        </div>
        <div className="creative2-point px-2">
          <h2 className="font-bold text-xs xxs:text-sm xs:text-lg sm:text-3xl mb-1">
            750k+
          </h2>
          <h2 className="font-bold text-xs xxs:text-sm xs:text-lg sm:text-3xl mb-1">
            impressions
          </h2>
          <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-lg">
            across digital platforms, raising awareness and sparking global
            conversations.
          </p>
        </div>
        <div className="creative3-point px-2">
          <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-lg">
            Featured in
          </p>
          <h2 className="font-bold text-xs xxs:text-sm xs:text-lg sm:text-3xl mb-1">
            Vox, CNN, The Art Newspaper, Politiken
          </h2>
          <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-lg">
            and other global leading outlets.
          </p>
        </div>
      </div>

      <div className="Ourwork-main flex flex-col items-center max-w-6xl sm:mb-40 mb-12 xxs:mb-20 xs:mb-30 xs:scale-100 scale-90 ">
        <h1 className="sm:text-4xl font-semibold sm:mb-5 text-lg xxs:text-xl xs:text-3xl ">
          Our Work Practically
        </h1>
        <div
          className="
      creativeMore3
      grid grid-cols-3
      gap-7
      xxs:gap-4
      xs:gap-12
      sm:gap-25 md:gap-40
      sm:mt-10
      mt-2
      xxs:mt-5
      xs:mt-8
      w-full
    "
        >
          <div className="creativeMore1 flex flex-col items-center">
            <img
              className="scale-60 xxs:scale-70 xs:scale-80 sm:scale-100"
              src={projectpoint1}
              alt=""
            />
            <p className="mt-2 text-[10px] xxs:text-sm xs:text-base sm:text-lg">
              Digital Campaigns
            </p>
          </div>
          <div className="creativeMore2 flex flex-col items-center">
            <img
              className="scale-60 xxs:scale-70 xs:scale-80 sm:scale-100"
              src={projectpoint2}
              alt=""
            />
            <p className="mt-2 text-[10px] xxs:text-sm xs:text-base sm:text-lg">
              Cultural Research
            </p>
          </div>
          <div className="creativeMore3 flex flex-col items-center">
            <img
              className="scale-60 xxs:scale-70 xs:scale-80 sm:scale-100"
              src={projectpoint3}
              alt=""
            />
            <p className="mt-2 text-[10px] xxs:text-sm xs:text-base sm:text-lg">
              Physical Products
            </p>
          </div>
        </div>
      </div>

      <div ref={targetRef} className="projects-wrapper scroll-mt-20">
        <Projects />
      </div>

      <div className="past-partners flex flex-col mb-15 max-w-6xl mx-auto p-5 lg:scale-105">
        <h2
          className="
      text-4xl font-bold mb-10
      xs:text-3xl
      xxs:text-2xl
      xxxs:text-xl
    "
        >
          Past Partners
        </h2>

        <div
          className="
      past-partners-imgwrap
      flex flex-wrap justify-center
      bg-[#F5F5F5]
      rounded-2xl
      sm:bg-white
      p-5
      sm:gap-12
      gap-2
    "
        >
          <img
            src={partner1}
            alt="Partner 1"
            className="
        w-24 h-auto object-contain
        scale-75
        xxs:scale-90
        sm:scale-100
      "
          />
          <img
            src={partner2}
            alt="Partner 2"
            className="
        w-24 h-auto object-contain
        scale-70
        xxs:scale-85
        sm:scale-100
      "
          />
          <img
            src={partner3}
            alt="Partner 3"
            className="
        w-28 h-auto object-contain
        scale-90
        xxs:scale-105
        sm:scale-140
        sm:ml-8
        sm:-mt-2
      "
          />
          <img
            src={partner4}
            alt="Partner 4"
            className="
        w-24 h-auto object-contain
        scale-75
        xxs:scale-90
        sm:scale-100
      "
          />
          <img
            src={partner5}
            alt="Partner 5"
            className="
        w-24 h-auto object-contain
        scale-80
        xxs:scale-95
        sm:scale-130
      "
          />
          <img
            src={partner6}
            alt="Partner 6"
            className="
        w-28 h-auto object-contain
        scale-90
        xxs:scale-105
        sm:scale-130
      "
          />
          <img
            src={partner7}
            alt="Partner 7"
            className="
        w-20 h-auto object-contain
        scale-65
        xxs:scale-80
        sm:scale-90
      "
          />
        </div>
      </div>

      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default CreativeComp;
