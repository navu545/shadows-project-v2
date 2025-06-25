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
      <div className="creativeComp-headwrap-main flex items-center max-w-6xl mb-10 justify-between mt-10 p-5">
        <div className="creativeComp-headwrap w-7/10">
          <h1 className="font-semibold text-6xl mb-10 leading-tight">
            We Bring Culture To Life
          </h1>
          <p className="text-2xl">
            We work on collaborative cultural projects with brands,
            organizations, and institutions. We use modern design, marketing,
            and communications to help people connect with their culture in
            meaningful ways across physical and digital spaces.
          </p>
          <div className="mb-10"></div>
          <button
            className="px-10 py-3 mt-2 bg-black text-white rounded-full text-m cursor-pointer"
            onClick={() => setModal(true)}
          >
            Work with us
          </button>
        </div>
        <div className="creativeComp-mainimg">
          <img src={projectMain}></img>
        </div>
      </div>

      <div className="creative3-point max-w-6xl mb-30 bg-[#E9F0ED] min-h-[200px] grid grid-cols-3 gap-20 rounded-2xl place-items-center p-10 items-start">
        <div className="creative1-point">
          <h2 className="font-bold text-3xl mb-1">15+ digital partnerships</h2>
          <p className="text-lg">
            with government agencies, NGOs, and brands to promote cultural
            storytelling.
          </p>
        </div>
        <div className="creative2-point">
          <h2 className="font-bold text-3xl mb-1">750k+</h2>
          <h2 className="font-bold text-3xl mb-1">impressions</h2>
          <p className="text-lg">
            across digital platforms, raising awareness and sparking global
            conversations.
          </p>
        </div>
        <div className="creative3-point">
          <p className="text-lg">Featured in</p>
          <h2 className="font-bold text-3xl mb-1">
            Vox, CNN, The Art Newspaper, Politiken
          </h2>
          <p className="text-lg">and other global leading outlets.</p>
        </div>
      </div>

      <div className="Ourwork-main flex flex-col items-center max-w-6xl mb-40">
        <h1 className="text-4xl font-semibold mb-5">Our Work Practically</h1>
        <div className="creativeMore3 grid grid-cols-3 gap-40 mt-10">
          <div className="creativeMore1 flex flex-col items-center">
            <img src={projectpoint1}></img>
            <p className="mt-2 text-lg">Digital Campaigns</p>
          </div>
          <div className="creativeMore2 flex flex-col items-center">
            <img src={projectpoint2}></img>
            <p className="mt-2 text-lg">Cultural Research</p>
          </div>
          <div className="creativeMore3 flex flex-col items-center">
            <img src={projectpoint3}></img>
            <p className="mt-2 text-lg">Physical Products</p>
          </div>
        </div>
      </div>

      <div ref={targetRef} className="projects-wrapper scroll-mt-20">
        <Projects />
      </div>

      <div className="past-partners flex-col mb-15 max-w-6xl">
        <h2 className="text-4xl font-bold mb-10">Past Partners</h2>
        <div className="past-partners-img grid grid-cols-7 items-center gap-10">
          <img src={partner1}></img>
          <img src={partner2}></img>
          <img src={partner3}></img>
          <img src={partner4}></img>
          <img src={partner5}></img>
          <img src={partner6}></img>
          <img src={partner7}></img>
        </div>
      </div>
      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default CreativeComp;
