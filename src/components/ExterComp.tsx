import {
  exter,
  diary,
  resource1,
  resource2,
  resource3,
} from "../assets/images";
import { Link } from "react-router-dom";

const ExterComp = () => {
  return (
    <div className="Exter-wrap flex flex-col items-center">
      <div className="Exter max-w-7xl items-center mb-10 overflow-hidden px-5">
        {/* IMAGE & HEADING */}
        <div className="Exter-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          {/* Heading first on small screens */}
          <div className="Exter-heading order-1 lg:order-2 mb-10 lg:mb-0">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
              ALEXANDRA <span className="not-italic font-normal">EXTER</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Born in Białystok, Poland (1882 - 1949)
            </p>
          </div>

          {/* Image below heading on mobile */}
          <div className="exter-img order-2 lg:order-1">
            <img src={exter} alt="Exter" className="w-full" />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="Exter-text text-lg xs:text-xl sm:text-2xl mb-10 text-justify">
          <p>
            Oleksandra Exter was one of Ukraine’s most influential modernist
            artists. Yet in many Western museums, she’s mislabeled as Russian —
            or described simply as Polish-born — erasing the central role that
            Ukraine played in her life and work.
            <br />
            <br /> Exter was born in 1882 into a wealthy family in the Grodno
            Governorate of the Russian Empire (now Białystok, Poland). Two years
            after her birth, her parents relocated to Kyiv, where she spent her
            childhood.
            <br />
            <br /> Exter lived in the city for over 35 years. She studied at
            Kyiv’s St. Olha Gymnasium and later at the Kyiv Art School under the
            renowned Ukrainian painter Mykola Pymonenko.
            <br />
            <br /> Oleksandra played an important role in the Kyiv art scene.
            Her painting studio was a cornerstone for Kyiv’s intellectual elite,
            like luminaries of world decorative art Vadym Meller, Anatol
            Petrytsky, and P. Tchelitchew, artists Oleksander Bohomazov and
            Vladimir Baranoff-Rossine, theater director Les Kurbas, and many
            others.
            <br />
            <br /> Alongside Oleksandr Bohomazov, she organized and took part in
            some of the first modern art exhibitions in the Russian Empire,
            including “Zveno,” “Kiltse,” and “Lanka.” In 1906, she curated one
            of the earliest exhibitions of Ukrainian folk art at the National
            Art Museum.
            <br />
            <br /> Like many Ukrainian modernists, she found deep inspiration in
            folk traditions. Exter collaborated with peasant workshops in
            Verbivka, Skoptsi, and other villages, working hand-in-hand with
            local women artisans. She believed that avant-garde art and
            Ukrainian craft belonged together. As she once said, “In the
            ornament of Ukrainian embroidery, there is a rhythm as complex as in
            any cubist composition.”
            <br />
            <br /> Ekster was an outstanding avant-garde artist, also called an
            “avant-garde Amazon”. She was inspired by the vibrant colors and
            rhythmic compositions of Ukrainian culture, and Oleksandra played a
            pivotal role in spreading her tradition and roots among her European
            peers, while embracing Cubism infused with dynamic color.
            <br />
            <br /> After she moved to Paris in the 1920s, Exter befriended and
            collaborated with Picasso and Léger, and her Paris studio became a
            gathering place for the European avant-garde. But Kyiv remained the
            birthplace of her vision. “My color comes from Ukraine,” she told
            students at the Académie Moderne. “It was there, in the markets, in
            the embroidery, in the villages… that I learned to see.”
          </p>
        </div>

        {/* DIARY IMAGE */}
        <div className="diary-img">
          <img src={diary} alt="Diary" className="w-full" />
        </div>

        {/* RESOURCES */}
        <div className="resources flex flex-col items-center justify-center mt-10 mb-15">
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

export default ExterComp;
