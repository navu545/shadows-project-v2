import React from "react";

interface HeaderProps {
  scroll: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ scroll }) => {
  return (
    <div className="flex flex-col items-center mt-5 md:mt-20 mb-0 overflow-hidden">
      <div className="flex flex-col items-center mt-5 md:mt-5 mb-20 overflow-hidden">
        <div
          className="ngo-header-wrap flex items-center gap-45 p-5 sm:mb-20 max-w-6xl
    scale-52 ml-11 -mt-30 will-change-transform
    xxs:scale-60 xxs:-mt-24 xxs:ml-12
    xs:scale-75 xs:-mt-15 xs:ml-15
    sm:scale-100 sm:-mt-0 sm:ml-20
    md:scale-100 md:-mt-0 md:ml-0"
        >
          <div className="ngo-header-text max-w-2xl">
            <h1 className="font-semibold text-6xl mb-10 w-[100%] xxxs:w-[200%] xxs:w-[200%] md:w-full whitespace-normal overflow-visible">
              Skrynia Cultural Heritage Protection Program
            </h1>
            <p className=" text-2xl mb-10">
              We protect and preserve Ukrainian cultural heritage from
              destruction by Russia.
            </p>
            <button
              className="px-12 py-3 mt-2 bg-black text-white rounded-full text-m cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white"
              onClick={scroll}
            >
              Support us
            </button>
          </div>

          <div
            className="ngo-imgs relative w-[20vw] min-w-70 aspect-[4/5]
      scale-80 top-15 -left-10 will-change-transform
      xxs:scale-85 xxs:top-20
      xs:scale-85
      sm:scale-85
      md:scale-100 md:top-0 md:left-0"
          >
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/HeaderImageTilt.png"
              alt="ladyArt"
              className="tilt-img absolute z-10 top-15 right-45 "
            />
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/HeaderImageStraight.png"
              alt="flowerArt"
              className="str-img absolute"
            />
          </div>
        </div>

        <div
          className="About-new max-w-6xl mb-10 p-5
    -mt-40      
    scale-43 will-change-transform
    xxs:scale-50 xxs:ml-0 xxs:-mt-30
    xs:scale-63 xs:ml-1 xs:-mt-15 xs:mb-15
    sm:scale-85 sm:ml-4 sm:mb-25
    md:scale-100 md:ml-0 md:-mt-10"
        >
          <h2 className="text-2xl font-semibold mb-1">About</h2>
          <p className="text-xl">
            Skrynia is our cultural heritage protection program, launched in
            response to Russia’s invasion of Ukraine. Through this program, we
            have delivered essential materials to protect Ukrainian museums,
            artworks, and cultural artifacts that are under direct threat.
          </p>
        </div>
      </div>

      <div
        className="
  -mt-40
  p-5
  px-6      
  aid-details
  w-full
  max-w-6xl
  lg:max-w-7xl
  mb-10
  xxs:mb-15
  xxs:-mt-35
  xs:mb-20
  sm:mb-30
  bg-[#F8EF2433]
  sm:min-h-[200px]
  grid
  grid-cols-3
  gap-20
  lg:gap-0
  rounded-2xl
  place-items-center
  sm:p-10
  lg:p-5
  items-start
"
      >
        <div
          className="
    aid-1
    px-2
    lg:mt-5
    lg:mb-5
    lg:w-50
    lg:mx-auto
  "
        >
          <h2
            className="
      aid-1-head
      w-17
      xxs:w-24
      xs:w-full
      font-bold
      text-xs
      xxs:text-sm
      xs:text-lg
      sm:text-3xl
      lg:text-3xl
    "
          >
            1 million UAH worth of aid
          </h2>
          <p
            className="
      aid-1-text
      text-[10px]
      xxs:text-xs
      xs:text-sm
      sm:text-lg
      lg:text-xl
    "
          >
            delivered to cultural institutions across Ukraine.
          </p>
        </div>

        <div
          className="
    aid-2
    px-2
    lg:mt-5
    lg:mb-5
    lg:w-60
    lg:mx-auto
  "
        >
          <h2
            className="
      aid-2-head
      w-18
      xxs:w-21
      xs:w-full
      font-bold
      text-xs
      xxs:text-sm
      xs:text-lg
      sm:text-3xl
      lg:text-3xl
      lg:w-60
    "
          >
            13 Ukrainian museums saved
          </h2>
          <p
            className="
      aid-2-text
      text-[10px]
      xxs:text-xs
      xs:text-sm
      sm:text-lg
      lg:text-xl
    "
          >
            from potential destruction, ensuring their collections are
            preserved.
          </p>
        </div>

        <div
          className="
    aid-3
    px-2
    lg:mt-5
    lg:mb-5
    lg:w-60
    lg:mx-auto
  "
        >
          <h2
            className="
      aid-3-head
      font-bold
      w-20
      xxs:w-20
      xs:w-full
      text-xs
      xxs:text-sm
      xs:text-lg
      sm:text-3xl
      lg:text-3xl
    "
          >
            100+ artworks protected
          </h2>
          <p
            className="
      aid-3-text
      text-[10px]
      xxs:text-xs
      xs:text-sm
      sm:text-lg
      lg:text-xl
    "
          >
            including rare and valuable pieces from Ukrainian history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
