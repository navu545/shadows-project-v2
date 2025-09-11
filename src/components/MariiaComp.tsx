import { mariiaArrow } from "../assets/images";
import MoreResources from "./MoreResources";
import { Link } from "react-router-dom";

const resources = [
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/maria_resource1.png?updatedAt=1757437538693",
    link: "https://shron1.chtyvo.org.ua/Slaboshpytskyi/Mariia_Bashkyrtseva.pdf?PHPSESSID=fsvthcta04jmghuefmj5l4rlt6",
    alt: "Resource 1",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/maria_resource2.png?updatedAt=1757437537377",
    link: "https://diasporiana.org.ua/wp-content/uploads/books/655/file.pdf",
    alt: "Resource 2",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/maria_resource3.png?updatedAt=1757437538097",
    link: "https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBashkirtsevaMariia.htm",
    alt: "Resource 3",
  },
];

const MariiaComp = () => {
  return (
    <div className="Mariia-wrap flex flex-col items-center bg-[#171717]">
      <div className="Mariia max-w-7xl items-center mb-10 overflow-hidden px-5">
        <div className="mariia-img-heading mt-20 mb-15 grid lg:grid-cols-[45%_55%] gap-10 lg:gap-25">
          <div className="Mariia-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                MARIIA{" "}
                <span className="not-italic font-normal">BASHKIRTSEVA</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Havrontsi, Ukraine (1858 - 1884)
              </p>
            </div>

            <div className="hidden lg:block absolute top-[40%] right-[45%]">
              <img src={mariiaArrow} className="scale-140" alt="Arrow" />
            </div>
          </div>

          <div className="mariia-img order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/mariia.png"
              alt="Mariia Bashkirtseva"
              className="w-full"
            />
          </div>
        </div>

        <div className="Mariia-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Mariia is the{" "}
            <a href="https://ukr.radio/prog.html?id=1110" target="_blank">
              <span className="underline">first Ukrainian female artist</span>
            </a>{" "}
            to be bought by the Louvre. Her diary, which she kept from the age
            of 12, was the 2nd one written by a woman published in the history
            of France. Mariia had no connection to Russia, but her identity
            remains attributed to it by Western institutions.
            <br />
            <br />
            Mariia Bashkirtseva (also known as Marie Bashkirtseff) was born in
            1858 in Poltava County in the village of Havrontsy near Dykanka. Her
            father was a wealthy nobleman, a marshal who headed the nobility of
            Poltava, whom Mariia described as the "wealthiest man in the
            village". His family lineage{" "}
            <a
              href="https://drive.google.com/file/d/1SdFTWwZ5ADiAxz6TEGmT-mW0xMeOc7t4/view?usp=drive_link"
              target="_blank"
            >
              <span className="underline">originated</span>
            </a>{" "}
            from the Chuhuiv region of Ukraine, with the earliest mentions of
            their last name there dating back to the 18th century. Mariia’s
            mother, a Kharkiv local at the time, came from the{" "}
            <a
              href="https://drive.google.com/file/d/1MoZ6ep8XvfPWMGRyrTvA-8VJyKfr73f8/view?usp=drive_link"
              target="_blank"
            >
              <span className="underline">Babanin family</span>
            </a>
            —a highly noble and ancient family of once Tatar origin that had
            become Ukrainian over time. At the age of 4, Mariia’s parents
            divorced, and she was raised on her grandparents’ estate in Kharkiv.
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/1Oy4ZXDoDwNbDQP8BT2lmBx3F2Sf2o8Ou/view?usp=drive_link"
              target="_blank"
            >
              <span className="underline">
                At the age of 12, Mariia and her mother moved to Europe:
              </span>
            </a>{" "}
            first to Italy and then ultimately settling down in France. Mariia
            moved frequently between various European cities, where she began
            documenting her experiences in a diary, a practice she continued
            until her death. She did this in French - indeed, she describes
            herself as multicultural, knowing many languages, and being educated
            both in French and Russian. Her writings became an international
            sensation, praised by literary giants like Anatole France and Émile
            Zola.
          </p>
        </div>

        <div className="maria-child-div grid lg:flex text-justify gap-10 relative">
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              Her self-written posthumous biography, The Journal of a Young
              Artist, would become widely successful, being translated into
              multiple languages. The work was consistently described as “one of
              the most prominent books of the 19th century,” especially by early
              feminists and cosmopolitans. Its pages offer a rare, honest
              portrayal of a 19th-century Franco-Ukrainian girl coming of age:
              bold, ambitious, and deeply introspective.
              <br />
              <br /> Despite moving away from Ukraine, Mariia{" "}
              <a href="https://ukr.radio/prog.html?id=1110" target="_blank">
                <span>remained connected</span>
              </a>
              to her homeland. She would often travel to Poltava to visit her
              father. In her diaries, she wrote about the Ukrainian landscape,
              in particular the Dnipro river, writing “perhaps I will be telling
              you something new when I say that the Dnieper (Dnipro) is one of
              the most beautiful rivers in the world, and that its banks are
              delightfully picturesque.”
              <br />
              <br />
              <span className="italic font-light">
                Picture taken by I.Khmlevsky of Mariia wearing traditional
                Ukrainian clothing during a visit to in Poltava, Ukraine in
                1876. Photo: Wikipedia
              </span>
            </p>
          </div>

          <div className="lg:w-[50%] mt-20 absolute left-135 bottom-5">
            <img
              className="w-full h-[92%] lg:scale-150 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/maria_dp_2.png?updatedAt=1757437542287"
            ></img>
          </div>
        </div>

        <div className="diary-img mb-10">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/maria_diary.png?updatedAt=1757437544805"
            alt="Mariia Diary"
            className="w-full"
          />
        </div>

        <div className="Mariia-text text-lg xs:text-xl sm:text-[22px] mb-25 text-justify">
          <p>
            <a href="" target="_blank">
              <span className="underline">At first,</span>
            </a>{" "}
            Mariia dreamed of becoming a singer, but health complications from
            tuberculosis forced her to give up that path. She turned to painting
            instead, studying at the prestigious Académie R. Julian in Paris,
            where she completed a seven-year course in just two years. She
            quickly gained critical acclaim, exhibiting in major salons and
            winning praise from leading French artists.
            <br />
            <br />
            Bashkirtseva was a feminist voice ahead of her time. Women and their
            lives were a central theme in her paintings, and a few months before
            her death, her work was featured at the exhibition of the Union of
            Female Artists. In 1882, she joined the suffrage movement and wrote
            for La Citoyenne, criticizing the barriers that kept women from
            equal participation in the arts.
            <br />
            <br />
            She died in 1884 at the age of 25 from tuberculosis, leaving behind
            nearly 200 paintings, a sculpture, and her famous Journal,
            oftentimes referred to as the “secret Bible of women of that time.”
            In the foreword for her Journal, the 1st of May 1884, she writes:
            "If I do not die young, I hope to remain as a great artist; but if I
            die young, I wish to leave my journal for publication, as it can not
            be anything other than interesting."
            <br />
            <br />
            Today, Bashkyrtseva’s original paintings are a rarity,{" "}
            <a
              href="https://www.wikiart.org/uk/bashkirtseva-mariya-kostyantinivna"
              target="_blank"
            >
              <span className="underline">
                given that most of them were lost during World War II.
              </span>
            </a>{" "}
            Her writings, however, remain an important historical account of a
            young woman living in 19th-century Europe.
          </p>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            <span className="not-italic font-normal">AUTHORS</span> AND EXPERTS
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            The article was written and researched by Viktor Gorskiy, Researcher
            at Shadows and incoming English Literature student at LMU, and Yde
            Bosma, Researcher at Shadows and Historian specializing in modern
            Ukraine, the Caucasus, and the Baltic (1991-present).
            <br />
            <br />
            The content was reviewed by Ukrainian Art Historian, Oksana Semenik.
          </p>
        </div>

        <div className="resources flex flex-col  justify-center mb-15">
          <div className="resources-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light italic mb-5 ">
            <h1>
              MORE <span className="not-italic font-normal">RESOURCES</span>
            </h1>
          </div>
          <MoreResources resource={resources} />
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            WORKS <span className="not-italic font-normal">CITED</span>
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            Башкірцева Марія Костянтинівна. “Башкірцева Марія Костянтинівна - 31
            твір - живопис.” Www.wikiart.org, 2025,
            www.wikiart.org/uk/bashkirtseva-mariya-kostyantinivna. Accessed 3
            Sept. 2025.
            <br />
            <br />
            Бучастая, Светлана. Материальі второй международной конференции,
            посвященной 155-летию со дня роджения Марии Башкирцевой. Наш дом,
            2013,
            drive.google.com/file/d/1SdFTWwZ5ADiAxz6TEGmT-mW0xMeOc7t4/view.
            Accessed 2 Sept. 2025.
            <br />
            <br />
            Internet Encyclopedia of Ukraine. “Bashkirtseva, Mariia.”
            Encyclopediaofukraine.com, 2025,
            www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CA%5CBashkirtsevaMariia.htm.
            Accessed 3 Sept. 2025.
            <br />
            <br />
            КАЧМАРСЬКА, С. МАРІЯ БАШКИРЦЕВА. Prague, 1927.
            <br />
            <br />
            Semenik, Oksana. “Українське мистецтво в іменах | Радіо Культура.”
            Ukr.radio, 2024, ukr.radio/prog.html?id=1110. Accessed 3 Sept. 2025.
            <br />
            <br />
            СЛАБОШПИЦЬКИЙ МИХАЙЛО . Марія Башкирцева. Махаон-Україна, 1999,
            drive.google.com/file/d/1Oy4ZXDoDwNbDQP8BT2lmBx3F2Sf2o8Ou/view.
            Accessed 2 Sept. 2025.
          </p>
        </div>

        <div className="back-to-artists mt-10 text-center">
          <Link to="/artists">
            <button
              className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-xl sm:text-2xl lg:text-3xl px-6 sm:px-10 lg:px-15 py-3 sm:py-4 lg:py-5 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white"
            >
              ALL&nbsp; <span className="not-italic font-normal">ARTISTS</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MariiaComp;
