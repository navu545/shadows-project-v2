import {
  ripynArrow,
} from "../assets/images";
import { Link } from "react-router-dom";
import MoreResources from "./MoreResources";

const resources = [
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/ripyn_resource1.png?updatedAt=1757439762733",
    link: "https://liebermann-villa.de/en/blog/the-art-of-the-ukraine-ilya-repin/",
    alt: "Resource 1",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/ripyn_resource2.png?updatedAt=1757439762470",
    link: "https://www.repins-compatriots.org/about",
    alt: "Resource 2",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/ripyn_resource3.png?updatedAt=1757439762580",
    link: "https://drive.google.com/file/d/1oelwTbJXfFJRlMIrtrP0RgAd4IkBGa66/view?usp=drive_link",
    alt: "Resource 3",
  },
];

const RipynComp = () => {
  return (
    <div className="ripyn-wrap flex flex-col items-center bg-[#171717]">
      <div className="ripyn w-full max-w-7xl items-center mb-10 overflow-hidden px-5">
        <div className="ripyn-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          <div className="ripyn-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                ILLIA
                <br /> <span className="not-italic font-normal">REPIN</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Chuhuiv, Ukraine (1844 - 1930)
              </p>
            </div>

            <div className="hidden lg:block absolute top-[-10%] right-[15%]">
              <img src={ripynArrow} className="scale-90" alt="Arrow" />
            </div>
          </div>

          <div className="ripyn-img order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/ripyn.png"
              alt="Ilia Ripyn"
              className="w-full"
            />
          </div>
        </div>

        <div className="ripyn-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Today, Repin is often called “one of the key representatives of
            Russian realism,” but, like many others, he was from Ukraine.
            <br />
            <br />
            Illia Repin was born on August 5 (July 24, old style) 1844 in the
            city of Chuhuiv, Kharkiv province, in the historical region known
            since the 17th century as Slobodskaya Ukraine. His roots are deeply
            rooted in the Ukrainian land, as the artist’s grandfather and
            great-grandfather lived in Ukraine’s Slobozhanshchyna region. Both
            of Repin’s grandfathers were Chuguiev Cossacks, and the artist's
            father was a Chuguiev lancer. It is likely that the Cossack theme in
            Repin's work is, first and foremost, a reflection of his own
            identity.
            <br />
            <br />
            The Repins{" "}
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">lived</span>
            </a>
            as a large family in the Chuhuiv Kalmytska settlement. Repin’s
            father, Efim Vasylovich, served as a soldier in the Chuhuiv Uhlan
            Regiment from the age of 18 to 45 until he retired in good health.
            Illia Repin's mother, Tatyana Stepanovna, was an intelligent,
            educated woman. She taught her children at home and instilled in
            them a love of reading. She also created a homeschool for
            neighboring children, in which the local Osynivka church also
            taught. Repin got his first introduction to painting, coloring
            Easter eggs, and cutting out paper figures in his parents' house,
            which awakened his desire to learn, draw, and learn about the world.
            <br />
            <br />
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">Since</span>
            </a>{" "}
            childhood, Illia cherished the dream of becoming an artist, which at
            the time was a respectable profession in the region. Repin’s parents
            supported his ambitions, first arranging for him to enter a school
            of military topographers at the age of 10, and after its
            disbandment, to enter the workshop of the famous Chuguiev icon
            painter Ivan Mikhailovich Bunakov.
            <br />
            <br />
            The{" "}
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">19th-century</span>
            </a>{" "}
            Chuguiv school of icon painting had its own original style, which
            was formed under the influence of academic painting. Chuguiv icon
            painters were invited to work in neighboring provinces. While
            refining his craft in Chuhuiv, Repin would learn the value of
            symbolism, the moral weight of art, and traits carried throughout
            his later works. 1.5 years after starting his studies with I.M.
            Bunakov, Repin's talent allowed him to become an independent icon
            painter, painting churches in various villages and towns. He was
            able to save up money to study at the Academy of Arts in St.
            Petersburg Academy of Arts. But despite the rich and interesting
            life in St. Petersburg, Repin did not forget his homeland.{" "}
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">
                He frequently returned to Ukraine, depicting Ukrainian themes in
                his canvases.
              </span>
            </a>
          </p>
        </div>

        <div className="ripyn-child-div grid lg:flex text-justify gap-10 overflow-hidden">
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              These trips had a significant influence on Repin’s work: his
              canvases are filled with Ukrainian landscapes, people, folklore,
              and Cossack heritage. The motifs run like a red thread through
              many of his works.
              <br />
              <br />
              In his{" "}
              <a
                href="https://archive.org/details/reply-of-the-zaporozhian-cossacks-to-the-turkish-sultan"
                target="_blank"
              >
                <span className="underline">writing,</span>
              </a>
              Repin described Ukrainian culture with admiration: “Amazing
              people. No one in the world felt freedom, equality, and
              brotherhood so deeply! They were always free! The Zaporozhians did
              not obey anyone!”
              <br />
              <br />
              <span className="italic font-light">
                In his early work, "Banduryst," Repin depicts the traditional
                Ukrainian instrument, the Bandura. Ukrainian culture is present
                in his piece “Hopak,” which is a beautiful painting of a
                traditional Ukrainian dance. Photo: Wikipedia
              </span>
            </p>
          </div>

          <div className="lg:w-[50%] mt-4">
            <img
              className="w-full h-[92%] lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/ripyn_tag1.png?updatedAt=1757439771772"
            ></img>
          </div>
        </div>

        <div className="ripyn-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            In{" "}
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">1871,</span>
            </a>{" "}
            Repin wrote his thesis "The Resurrection of Jairus's Daughter,"
            which was awarded the Great Gold Medal - the highest award of the
            Academy, and gave him the right to a six-year trip abroad. Traveling
            through France, the landscapes of Normandy and its ancient castles
            reminded Repin of Ukraine. He read "Little Russian Things" by M.V.
            Gogol, composed paintings on themes from Ukrainian history and
            culture.
            <br />
            <br />
            And three years later, ahead of schedule, Illia Repin returned to
            Ukraine. From October 1876 to September 1877, the artist lived in
            Chuguiev with his family in his parents' house. Although this time
            was quite short, it was deservedly called the "Chuguev period" of
            Repin's work due to its richness in events and creative successes.
          </p>
        </div>

        <div className="ripyn-child-div grid lg:flex text-justify gap-10 relative">
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[60%]">
            <p>
              Repin wrote about Chuhuiv with passion and adoration, and
              especially loved wintertime in Chuhuiv, which inspired his famous
              piece, Winter Scene, Ukraine.
              <br />
              <br />
              “I was right to come here for the winter; only in winter do people
              live freely, showing interest in everything: city affairs,
              politics, and family matters. Weddings, local assemblies, fairs,
              markets — all of this is now lively, interesting, and full of
              life. Recently, I traveled for four days through the surrounding
              villages. I attended weddings, markets, local government meetings,
              inns, taverns, and churches... what beauty, what delight!!! I
              cannot describe it, but I have heard so much and, most
              importantly, seen so much during this time!!! It has been like a
              magical dream.”
              <br />
              <br />
              Repin continues, “…I cannot help but share with you our Ukrainian
              winter: for more than three weeks now, there have literally been
              no clouds in the sky, the sun shines as in Italy, and the sky is
              as blue, with white snow and frost!!! And the nights have become
              so moonlit that they lose any fantasy — it’s just like day!! The
              air is so pure!..”
              <br />
              <br />
              <span className="italic font-light">
                Winter Scene, Ukraine, Repin. Photo: Brooklyn Museum
              </span>
            </p>
          </div>

          <div className="hidden lg:block lg:w-[50%] mt-20 absolute lg:left-160 xlg:left-165 sxl:left-170 xl:left-175 -top-30">
            <img
              className="w-full h-[92%] lg:scale-75 scale-50"
              src="https://ik.imagekit.io/shadows/Shadows-project/ripyn_tag2.png?updatedAt=1757439766928"
            ></img>
          </div>
        </div>

        <div className="diary-img mb-20">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/ripyn_diary.png?updatedAt=1757439772017"
            alt="Diary"
            className="w-full"
          />
        </div>

        <div className="ripyn-text text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-25">
          <p>
            <a
              href="https://drive.google.com/file/d/1mXinzmhfgSntbT3LUx6HT0yTzPhF_TZi/view?usp=sharing"
              target="_blank"
            >
              <span className="underline">
                Throughout his life and career, Repin did not just maintain a
                personal connection to Ukraine but also helped shape its
                artistic movements
              </span>
            </a>{" "}
            .Repin taught many famous Ukrainian artists, including Oleksandr
            Murashko, and instilled in them several core beliefs. These included
            advocating for the expression of national identity through art,
            emphasizing artistic originality over imitation of foreign styles,
            and encouraging the depiction of Ukrainian life and history. Repin,
            as a teacher, had a huge impact on his students’ artwork. His
            painting “Zaporizhians” is thought to have inspired Murashko’s
            “Funeral of the Koshovyi" and Krasytsky’s "Guest from Zaporizhzhia,"
            among others.
            <br />
            <br />
            Repin also{" "}
            <a
              href="https://www.pravda.com.ua/podcasts/66b23d033d145/"
              target="_blank"
            >
              <span className="underline">played</span>
            </a>
            an instrumental role in establishing and shaping the Kharkiv Art
            school. In 1902, Mytrofan Fedorov, one of Repin’s students, helped
            set up a life-drawing class, which led to the formation of Kharkiv
            Art College in 1912. Repin’s students helped bring academic-level
            art training to provincial Ukraine, further emphasizing Repin’s role
            in shaping Ukraine’s art scene and his desire to further the state
            of art in Ukraine.
            <br />
            <br />
            Repin{" "}
            <a
              href="http://www.repins-compatriots.org/about-repin"
              target="_blank"
            >
              <span className="underline">returned</span>
            </a>{" "}
            to Chuguev for the last time in 1914, on the eve of his 70th
            anniversary. The trip was dedicated to his long-cherished dream of
            creating the "Business Yard" - a kind of folk Academy of Arts, based
            on democratic principles, where students would be able to master
            various types of folk art in specially created workshops under the
            guidance of experienced masters. The implementation of his grandiose
            plans was prevented by the First World War, which broke out a few
            days later.
            <br />
            <br />
            <a
              href="http://www.youtube.com/watch?v=75YHygqb5BA"
              target="_blank"
            >
              <span className="underline">In 1900,</span>
            </a>{" "}
            Repin moved to the village of Kuokkala, Finland (part of Finland
            until 1940), where he lived until his death in 1930. Once the
            Russian Empire collapsed in 1917, Illia Repin refused to endorse the
            Russian Bolsheviks and Russian Nationalism, further separating him
            from Russia. Soviet authorities would invite Illia Repin to Russia
            three times. Each time, he declined. He only dreamt of returning to
            Ukraine.
            <br />
            <br />
            "How I wanted to go to Little Russia, to Chuhuiv, and how I wanted
            to cry... It's good here, very good! But no, I want to see white
            huts, sun-drenched cherry orchards, lakes, roses of all colors, and
            hear the ringing voices of tanned girls and rough voices of handsome
            boys; oxen in a yoke, fairs..."
            <br />
            <br />
            It is{" "}
            <a
              href="http://www.youtube.com/watch?v=75YHygqb5BA"
              target="_blank"
            >
              <span className="underline">impossible</span>
            </a>{" "}
            to read the lines of I.Yu. Repin's last letter to his countrymen,
            without emotion: “Dear, beloved compatriots... I ask you to believe
            in the feelings of my loyalty and endless regret that I cannot move
            to live in sweet, joyful Ukraine... Loving you since childhood,
            Illia Repin.”
            <br />
            <br />
            Repin died in 1930, at his estate in the Finnish village of
            Kuokkala. According to his will, he was buried under “Chuguevskaya
            Gora” - this is how the artist referred to the hill on his estate.
          </p>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            <span className="not-italic font-normal">AUTHORS</span> AND EXPERTS
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            The article was written and researched by Naomi Nemickas, Researcher
            at The Shadows Project and History and Politics Student at
            University of Oxford and Yde Bosma, Researcher at Shadows and
            Historian specializing in modern Ukraine, the Caucasus, and the
            Baltic (1991-present)
            <br />
            <br />
            The content was reviewed by Olga Shevchenko, Deputy Head of Research
            at the Repin Museum in Chuhuiv.
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
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20 break-words">
            Музей видатних діячів української культури Лесі Українки, Миколи
            Лисенка, Панаса Саксаганського, Михайла Старицького. Роль визначних
            особистостей – митців, діячів науки та культури у процесі формування
            національної само- свідомості наприкінці ХІХ – на початку ХХ ст.
            2016,
            drive.google.com/file/d/1mXinzmhfgSntbT3LUx6HT0yTzPhF_TZi/view.
            Accessed 23 Aug. 2025.
            <br />
            <br />
            Ukrainian Association in Finland (ТУФ). “Ілля Рєпін і його
            чугуївське коріння.” YouTube, 6 Sept. 2021,
            www.youtube.com/watch?v=75YHygqb5BA. Accessed 23 Aug. 2025.
            <br />
            <br />
            Ukrainska Pravda. Back to the Roots. Ukrainska Pravda, 20 Aug. 2024,
            podcasts.apple.com/ua/podcast/%D1%96%D0%BB%D0%BB%D1%8F-%D1%80%D1%94%D0%BF%D1%96%D0%BD-%D1%8F%D0%BA-%D1%80%D0%BE%D1%81%D1%96%D1%97-%D0%B2%D0%B4%D0%B0%D0%BB%D0%BE%D1%81%D1%8F-%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B0%D1%81%D0%BD%D0%B8%D1%82%D0%B8-%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE/id1761337258?i=1000665988173,
            disc 1. Accessed 23 Aug. 2025.
            <br />
            <br />
            Земляки Рєпіна . “Земляки Рєпіна.” Repin’s Compatriots, 2024,
            www.repins-compatriots.org/about-repin. Accessed 23 Aug. 2025.
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

export default RipynComp;
