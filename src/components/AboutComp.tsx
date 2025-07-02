import { aboutnew0, aboutnew1, aboutnew2, openlink } from "../assets/images";
import Art2 from "./Art2";
import GetInTouch from "./GetInTouch";
import { useState } from "react";
import FormModal from "./FormModal";
import { Link } from "react-router-dom";

const AboutNew = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="aboutnew-mainwrap flex flex-col items-center px-5">
      <div className="aboutnew-text flex-col max-w-6xl mb-10 mt-6 md:my-20">
        <div className="aboutnew-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight my-4 mb-6 md:mb-10">
          <h1>
            The Shadows Project is a cultural NGO and creative studio that
            builds cultural resilience.
          </h1>
        </div>

        <div className="about-new-para text-base xs:text-lg sm:text-xl md:text-2xl mb-5">
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl">
            Our mission is to create everyday opportunities for people to engage
            with culture.
            <br />
            <div className="mb-4 md:mb-5" />
            We believe that a strong cultural identity isn’t just about
            celebrating heritage. It’s a long-term investment in a society’s
            strength, stability, and sovereignty. When people are rooted in
            their history, they’re more confident in who they are, more
            connected to each other, and more resilient in the face of
            adversity.
            <br />
            <div className="mb-4 md:mb-5" />
            Amid Russia’s efforts to erase Ukrainian identity — from
            disinformation to the destruction of cultural sites — this
            connection becomes even more vital. Culture is one of the most
            powerful defenses against disinformation, manipulation, and fear.
            It’s how we build resilience from the inside out.
            <br />
            <div className="mb-4 md:mb-5" />
            We launched Shadows in 2021 as a digital media platform on
            Instagram, reimagining history through posts and stories for
            Ukrainian youth. Today, we deliver protective equipment to
            endangered museums, design cultural campaigns with creative
            partners, and work with government institutions to safeguard and
            reimagine collective identity through art, storytelling, and more.
          </p>

          <div className="mb-10 md:mb-20" />

          <div className="ourvalues-wrap">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-semibold mb-2">
              Our Values
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl">
              We believe in a world where culture is seen as the foundation of
              strong, sovereign, democratic societies.
            </p>
          </div>
        </div>
      </div>

      <div className="3points-wrap grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-15 max-w-6xl mb-16 md:mb-20">
  
        <div className="1point-wrap flex items-start">
          <img
            src={aboutnew0}
            className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 object-contain"
          />
          <div className="1point-text">
            <h2 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-3xl mb-2 mt-1">
              Nation Building
            </h2>
            <p className="leading-snug text-sm xs:text-base sm:text-lg md:text-xl">
              Culture helps people understand themselves and their place in the
              world.
            </p>
          </div>
        </div>

        <div className="2point-wrap flex items-start">
          <img
            src={aboutnew0}
            className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 object-contain"
          />
          <div className="2point-text">
            <h2 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-3xl mb-2 mt-1">
              Resilience
            </h2>
            <p className="leading-snug text-sm xs:text-base sm:text-lg md:text-xl">
              Cultural identity builds stronger, more unified communities and
              reinforces a nation’s sovereignty in times of crisis.
            </p>
          </div>
        </div>


        <div className="3point-wrap flex items-start">
          <img
            src={aboutnew0}
            className="h-6 w-6 md:h-8 md:w-8 mt-1 mr-2 object-contain"
          />
          <div className="3point-text">
            <h2 className="font-semibold text-xl xs:text-2xl sm:text-3xl md:text-3xl mb-2 mt-1">
              Vitality
            </h2>
            <p className="leading-snug text-sm xs:text-base sm:text-lg md:text-xl">
              Culture isn’t just meant to be preserved — it should be felt,
              used, and lived, ensuring its sustainability for future
              generations.
            </p>
          </div>
        </div>
      </div>

      <div className="new-slider-wrap max-w-7xl">
        <Art2 />
      </div>

      <div className="approach-mainwrap flex flex-col items-center max-w-6xl mb-20 md:mb-30">
        <div className="approach-heading mb-6 md:mb-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold">
          <h2>Our Approach</h2>
        </div>

        <div className="approach-text-wrap grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-30">

          <div className="1pointapproach-wrap flex flex-col items-center text-center md:text-left">
            <img src={aboutnew1} className="w-16 md:w-20" />
            <h2 className="font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl mt-4 underline underline-offset-4">
              The 501 (c)(3) Nonprofit
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg">
              We run Skrynia, a cultural heritage aid program that delivers
              protective equipment to museums in Ukraine. Since the start of the
              full-scale invasion, we’ve supported 13 museums and raised over 1
              million UAH in direct aid in partnership with Western donors.
            </p>
            <Link to="/NGO">
              <div className="openLink-wrap flex items-center cursor-pointer">
                <p className="underline mt-2 text-sm sm:text-base md:text-lg">
                  Learn more
                </p>
                <img className="w-4 h-4 sm:w-5 sm:h-5 ml-2" src={openlink} />
              </div>
            </Link>
          </div>

       
          <div className="2pointapproach-wrap flex flex-col items-center text-center md:text-left">
            <img src={aboutnew2} className="w-16 md:w-20" />
            <h2 className="font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl mt-4 underline">
              The Creative Studio
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg">
              We collaborate with forward-thinking companies, organizations, and
              institutions to integrate culture into their work. That can be
              designing a product inspired by history, running a research-based
              campaign, or reframing historical narratives to connect with
              modern audiences.
            </p>
            <Link to="/creativePage">
              <div className="openLink-wrap flex items-center cursor-pointer">
                <p className="underline mt-2 text-sm sm:text-base md:text-lg">
                  Learn more
                </p>
                <img className="w-4 h-4 sm:w-5 sm:h-5 ml-2" src={openlink} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <GetInTouch onClick={() => setModal(true)} />
      {showModal && <FormModal onClose={() => setModal(false)} />}
    </div>
  );
};

export default AboutNew;
