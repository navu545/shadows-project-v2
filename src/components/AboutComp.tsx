import { aboutnew0, aboutnew1, aboutnew2, openlink } from "../assets/images";
import Art2 from "./Art2";
import GetInTouch from "./GetInTouch";
import { useState } from "react";
import FormModal from "./FormModal";
import { Link } from "react-router-dom";

const AboutNew = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="aboutnew-mainwrap flex flex-col items-center">
      <div className="aboutnew-text flex-col max-w-6xl mb-15 mt-20">
        <div className="aboutnew-heading text-6xl font-semibold leading-tight my-4 mb-10">
          <h1>
            The Shadows Project is a cultural NGO and creative studio that
            builds cultural resilience.
          </h1>
        </div>
        <div className="about-new-para text-xl mb-5">
          <p className="text-2xl">
            Our mission is to create everyday opportunities for people to engage
            with culture.
            <br />
            <div className="mb-5" />
            We believe that a strong cultural identity isn’t just about
            celebrating heritage. It’s a long-term investment in a society’s
            strength, stability, and sovereignty. When people are rooted in
            their history, they’re more confident in who they are, more
            connected to each other, and more resilient in the face of
            adversity.
            <br />
            <div className="mb-5" />
            Amid Russia’s efforts to erase Ukrainian identity — from
            disinformation to the destruction of cultural sites — this
            connection becomes even more vital. Culture is one of the most
            powerful defenses against disinformation, manipulation, and fear.
            It’s how we build resilience from the inside out.
            <br />
            <div className="mb-5" />
            We launched Shadows in 2021 as a digital media platform on
            Instagram, reimagining history through posts and stories for
            Ukrainian youth. Today, we deliver protective equipment to
            endangered museums, design cultural campaigns with creative
            partners, and work with government institutions to safeguard and
            reimagine collective identity through art, storytelling, and more.
          </p>
          <div className="mb-25" />
          <div className="ourvalues-wrap">
            <h2 className="text-4xl font-semibold mb-2">Our Values</h2>
            <p className="text-2xl">
              We believe in a world where culture is seen as the foundation of
              strong, sovereign, democratic societies.
            </p>
          </div>
        </div>
      </div>

      <div className="3points-wrap grid grid-cols-3 gap-15 max-w-6xl mb-20">
        <div className="1point-wrap flex items-start">
          <img src={aboutnew0} className="h-8 w-8 mt-1 mr-2 object-contain" />
          <div className="1point-text">
            <h2 className="font-semibold text-3xl mb-2 mt-1">
              Nation Building
            </h2>
            <p className="leading-tight text-lg">
              Culture helps people understand themselves and their place in the
              world.
            </p>
          </div>
        </div>

        <div className="2point-wrap flex items-start">
          <img src={aboutnew0} className="h-8 w-8 mt-1 mr-2 object-contain" />
          <div className="2point-text">
            <h2 className="font-semibold text-3xl mb-2 mt-1">Resilience</h2>
            <p className="leading-tight text-lg">
              Cultural identity builds stronger, more unified communities and
              reinforces a nation’s sovereignty in times of crisis.
            </p>
          </div>
        </div>

        <div className="3point-wrap flex items-start">
          <img src={aboutnew0} className="h-8 w-8 mt-1 mr-2 object-contain" />
          <div className="3point-text">
            <h2 className="font-semibold text-3xl mb-2 mt-1">Vitality</h2>
            <p className="leading-tight text-lg">
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

      <div className="approach-mainwrap flex flex-col items-center max-w-6xl mb-30">
        <div className="approach-heading mb-10 text-4xl font-bold">
          <h2>Our Approach</h2>
        </div>
        <div className="approach-text-wrap grid grid-cols-2 gap-30">
          <div className="1pointapproach-wrap flex flex-col items-center">
            <img src={aboutnew1} className="w-20"></img>
            <h2 className="font-semibold text-2xl mt-4 underline underline-offset-4">
              The 501 (c)(3) Nonprofit
            </h2>

            <p className="mt-3">
              We run Skrynia, a cultural heritage aid program that delivers
              protective equipment to museums in Ukraine. Since the start of the
              full-scale invasion, we’ve supported 13 museums and raised over 1
              million UAH in direct aid in partnership with Western donors.{" "}
            </p>
            <Link to="/NGO">
              <div className="openLink-wrap flex items-center cursor-pointer">
                <p className="underline mt-2">Learn more</p>
                <img className="w-5 h-5 ml-2" src={openlink}></img>
              </div>
            </Link>
          </div>
          <div className="2pointapproach-wrap flex flex-col items-center">
            <img src={aboutnew2} className="w-20"></img>
            <h2 className="font-semibold text-2xl mt-4 underline">
              The Creative Studio
            </h2>
            <p className="mt-3">
              We collaborate with forward-thinking companies, organizations, and
              institutions to integrate culture into their work. That can be
              designing a product inspired by history, running a research-based
              campaign, or reframing historical narratives to connect with
              modern audiences.
            </p>
            <Link to="/creativePage">
              <div className="openLink-wrap flex items-center cursor-pointer">
                <p className="underline mt-2">Learn more</p>
                <img className="w-5 h-5 ml-2" src={openlink}></img>
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
