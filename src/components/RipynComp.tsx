import {
  ripyn,
  diary,
  resource1,
  resource2,
  resource3,
  ripynArrow,
} from "../assets/images";
import { Link } from "react-router-dom";

const RipynComp = () => {
  return (
    <div className="ripyn-wrap flex flex-col items-center bg-[#171717]">
      <div className="ripyn max-w-7xl items-center mb-10 overflow-hidden px-5">
        {/* IMAGE & HEADING SECTION */}
        <div className="ripyn-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          {/* Heading first on small screens */}
          <div className="ripyn-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                ILIA <span className="not-italic font-normal">RIPYN</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Chuhuiv, Ukraine (1844 - 1930)
              </p>
            </div>
            {/* No arrow given — placeholder kept for layout consistency */}
            <div className="hidden lg:block absolute top-[50%] right-[65%]">
              <img src={ripynArrow} className="scale-320" alt="Arrow" />
            </div>
          </div>

          {/* Image below heading on mobile */}
          <div className="ripyn-img order-2 lg:order-1">
            <img src={ripyn} alt="Ilia Ripyn" className="w-full" />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="ripyn-text text-lg xs:text-xl sm:text-2xl mb-10 text-justify">
          <p>
            Kazimir Malevych is a Ukrainian artist.
            <br />
            <br /> Malevych was born in 1879 in Kyiv to a Polish father and a
            Ukrainian mother. He spoke and wrote in Ukrainian, and described his
            artistic awakening in the villages of Kharkiv, where he lived from
            ages 12 to 15, watching peasants paint ovens with birds, flowers,
            and animals using homemade clays.
            <br />
            <br /> “The village was engaged in art… I watched their work with
            great excitement,” he wrote.
            <br />
            <br /> Later, he taught not only in Leningrad but also at the Kyiv
            Art Institute — a hub of Ukrainian modernism often referred to as
            the “Ukrainian Bauhaus.” In his diaries and letters, he longed for
            his hometown, remembering Kyiv’s unique brick buildings, the Dnipro
            River, and its street life filled with farmers and colors.
            <br />
            <br />
            Malevych always referred to himself as Ukrainian. It is reflected
            throughout his life and work, and was often mentioned in his diary:
            <br />
            <br /> “… I feel more and more like returning to Kyiv. Original and
            unique Kyiv is vivid in my memories. Buildings from colored bricks,
            mountainous terrain, the Dnipro river, boats… City life influenced
            me. Farmers crossing the Dnipro bringing butter, milk, cream and
            filling the streets of Kyiv, giving the city a special color.”
            <br />
            <br /> He wasn’t just from Ukraine, his work was shaped by it.
            Culturally, politically, and spiritually.
            <br />
            <br /> During the 1930s, Malevych became one of the only Ukrainian
            artists to depict the Holodomor, Stalin’s man-made famine that
            killed millions. In one of his most haunting works, faces are
            replaced by the hammer and sickle, a cross, and a coffin. The
            message was clear: where there is Soviet rule, there is death and
            hunger.
            <br />
            <br /> a littl bit more text here so we can show these diariesxxxx
          </p>
        </div>

        {/* DIARY IMAGE */}
        <div className="diary-img">
          <img src={diary} alt="Diary" className="w-full" />
        </div>

        {/* SECOND TEXT BLOCK */}
        <div className="ripyn-second-text text-lg xs:text-xl sm:text-2xl text-justify mt-10 mb-25">
          <p>
            It is no surprise that Burliuk’s Cossack heritage and his Ukrainian
            homeland served as a deep inspiration for his work. Friends and
            family of Burliuk described his habit of wearing one earring in his
            right ear, in the style of the Cossacks.
            <br /> <br /> In 1915, Burliuk painted “Sviatoslav” in the style of
            Ancient Ukrainian painting. In his book, “Predky Moi” (my
            ancestors,) he describes his painting process and the influence his
            Ukrainian heritage has on his artwork.
            <br />
            <br /> Burliuk mimicked the imagery and spirit of the steppe as a
            representation of Ukrainian identity. Burliuk frequently described
            his art as “simple,” “laconic,” or “coarse,” though the most direct
            allusion to the energy of the steppes is in the description of his
            art as “wild beauty.” Burliuk has also said — “a child of the
            Ukrainian steppes, I have always been most partial to horizontal
            formats.”
            <br />
            <br /> Not only was he inspired by the artifacts he found in
            Ukrainian lands, but would quite literally infuse his paintings with
            it. Burliuk was known to drag a new canvas outside, fling it into
            the dirt, and paint on it with clay and sand so that this canvas
            would become “the flesh and blood of the land.”
            <br />
            <br /> It’s clear that in everything he did, Burliuk drew
            inspiration from the strength and determination of his ancestors —
            and in his art, we see these core elements of what Ukrainian
            identity represented to Burliuk.
          </p>
        </div>

        {/* RESOURCES SECTION */}
        <div className="resources flex flex-col items-center justify-center mb-15">
          <div className="resources-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light italic mb-5 text-center">
            <h1>
              MORE <span className="not-italic font-normal">RESOURCES</span>
            </h1>
          </div>
          <div className="resources-imgs grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
            <img src={resource1} className="bg-[#f0ecec] rounded-2xl w-full" />
            <img src={resource2} className="rounded-2xl w-full" />
            <img src={resource3} className="bg-[#f0ecec] rounded-2xl w-full" />
          </div>
        </div>

        {/* BACK TO ARTISTS BUTTON */}
        <div className="back-to-artists mt-10 text-center">
          <Link to="/artists">
            <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-xl sm:text-2xl lg:text-3xl px-6 sm:px-10 lg:px-15 py-3 sm:py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
              ALL&nbsp; <span className="not-italic font-normal">ARTISTS</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RipynComp;
