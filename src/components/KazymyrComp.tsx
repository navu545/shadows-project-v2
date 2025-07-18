import {
  kazymyr,
  diary,
  resource1,
  resource2,
  resource3,
  kazymyrArrow,
} from "../assets/images";
import { Link } from "react-router-dom";

const KazymyrComp = () => {
  return (
    <div className="kazymyr-wrap flex flex-col items-center bg-[#171717]">
      <div className="kazymyr max-w-7xl items-center mb-10 overflow-hidden px-5">
        {/* IMAGE & HEADING SECTION */}
        <div className="kazy-img-head mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          {/* Heading first on small screens */}
          <div className="kazymyr-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                KAZYMYR <span className="not-italic font-normal">MALEVYCH</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Kyiv, Ukraine (1879 - 1973)
              </p>
            </div>
            {/* Hidden arrow on small screens */}
            <div className="hidden lg:block absolute top-[50%] right-[65%]">
              <img src={kazymyrArrow} className="scale-320" />
            </div>
          </div>

          {/* Image below heading on mobile */}
          <div className="kazy-img order-2 lg:order-1">
            <img src={kazymyr} alt="Kazymyr" className="w-full" />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="kazymyr-text text-lg xs:text-xl sm:text-2xl mb-10 text-justify">
          <h1 className="underline">Kazimir Malevych is a Ukrainian artist.</h1>
          <br />
          <p>
            Malevych was born in 1879 in Kyiv to a Polish-Ukrainian family and
            spent the first 17 years of his life in Ukraine.
            <br />
            <br /> His father worked at sugar-beet factories which are usually
            built out in the sticks, far from any city which meant the family
            lived in small, rural villages.
            <br />
            <br /> Malevych spoke and wrote in Ukrainian, and described his
            artistic awakening in the villages of Kharkiv, where he lived from
            ages 12 to 15, watching peasants paint ovens with birds, flowers,
            and animals using homemade clay.
            <br />
            <br /> “The village was engaged in art… I watched their work with
            great excitement,” he wrote in his diaries.
            <br />
            <br /> ”It was against this background that my feeling for art
            developed,” wrote Malevych as he described his admiration for the
            Ukrainian peasants’ colorful traditional attire and their customs.
            <br />
            <br />
            Apart from the Ukrainian peasants’ ways of life. Malevych deeply
            loved the Ukrainian landscape which also served as inspiration for
            his art, and was often reflected in his diaries:
          </p>
        </div>

        {/* DIARY IMAGE */}
        <div className="diary-img">
          <img src={diary} alt="Diary" className="w-full" />
        </div>

        {/* SECOND TEXT BLOCK */}
        <div className="kazymyr-second-text text-lg xs:text-xl sm:text-2xl text-justify mt-10 mb-25">
          <p>
            Later, he taught not only in Leningrad but also at the Kyiv Art
            Institute — a hub of Ukrainian modernism often referred to as the
            “Ukrainian Bauhaus.” And even when he left Ukraine - Ukraine did not
            leave him. In his diaries and letters, he longed for his hometown,
            remembering Kyiv’s unique brick buildings, the Dnipro River, and its
            street life filled with farmers and colors.
            <br />
            <br /> “[My closest friend and I] would discuss other matters when
            we ate, or reminisce about Ukraine. He and I were both Ukrainians,”
            wrote Malevych in ?.
            <br />
            <br /> Malevych always referred to himself as Ukrainian. It is
            reflected throughout his life and work, and was often mentioned in
            his diary:
            <br />
            <br /> “… I feel more and more like returning to Kyiv. Original and
            unique Kyiv is vivid in my memories. Buildings from colored bricks,
            mountainous terrain, the Dnipro river, boats…City life influenced
            me. Farmers crossing the Dnipro bringing butter, milk, cream and
            filling the streets of Kyiv, giving the city a special color.”
            <br />
            <br /> He wasn’t just from Ukraine, his work was shaped by it.
            Culturally, politically, and spiritually.
            <br />
            <br /> During the 1930s, Malevych became one of the only Ukrainian
            artists to depict the Holodomor, Stalin’s man-made famine that
            killed millions in his “peasant” series. In one of his most haunting
            works, faces are replaced by the hammer and sickle, a cross, and a
            coffin. The message was clear: where there is Soviet rule, there is
            death and hunger.
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

        {/* BACK TO ARTISTS */}
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

export default KazymyrComp;
