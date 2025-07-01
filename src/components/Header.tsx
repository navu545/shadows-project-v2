import React from "react";

interface HeaderProps {
  scroll: () => void
}

const Header: React.FunctionComponent<HeaderProps> = ({scroll}) => {
  return (
    <div className="flex flex-col items-center mt-5 md:mt-20 mb-20">
      <div className="ngo-header-wrap flex items-center gap-45 p-5 mb-20 max-w-6xl">
        <div className="ngo-header-text max-w-2xl">
          <h1 className="font-semibold text-6xl mb-10">
            Skrynia Cultural Heritage Protection Program
          </h1>
          <p className=" text-2xl mb-10">
            We protect and preserve Ukrainian cultural heritage from destruction
            by Russia.
          </p>
          <button
            className="px-12 py-3 mt-2 bg-black text-white rounded-full text-m cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white"
            onClick={scroll}
          >
            Support us
          </button>
        </div>

        <div className="ngo-imgs relative w-[20vw] min-w-70 aspect-[4/5]">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/HeaderImageTilt.png"
            alt="ladyArt"
            className="tilt-img absolute z-10 top-15 right-45 "
          ></img>
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/HeaderImageStraight.png"
            alt="flowerArt"
            className="str-img absolute"
          ></img>
        </div>
      </div>

      <div className="About-new max-w-6xl mb-10 p-5">
        <h2 className="text-2xl font-semibold mb-1">About</h2>
        <p className="text-xl">
          Skrynia is our cultural heritage protection program, launched in
          response to Russia’s invasion of Ukraine. Through this program, we
          have delivered essential materials to protect Ukrainian museums,
          artworks, and cultural artifacts that are under direct threat.
        </p>
      </div>
      
      <div className="aid-details w-full max-w-7xl grid grid-cols-3 bg-[#F8EF2433] p-5 rounded-2xl">
        <div className="aid-1 mt-5 mb-5 w-50 mx-auto">
          <h2 className="aid-1-head font-bold text-3xl">
            1 million UAH worth of aid
          </h2>
          <p className="aid-1-text text-xl">
            delivered to cultural institutions across Ukraine.
          </p>
        </div>

        <div className="aid-2 mt-5 mb-5 w-60 mx-auto">
          <h2 className="aid-2-head font-bold text-3xl">
            13 Ukrainian museums saved
          </h2>
          <p className="aid-2-text text-xl">
            from potential destruction, ensuring their collections are
            preserved.
          </p>
        </div>

        <div className="aid-3 mt-5 mb-5 w-60 mx-auto">
          <h2 className="aid-3-head font-bold text-3xl">
            100+ artworks protected
          </h2>
          <p className="aid-3-text text-xl">
            including rare and valuable pieces from Ukrainian history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
