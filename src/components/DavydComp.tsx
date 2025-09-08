import {
  davydArrow,
} from "../assets/images";
import { Link } from "react-router-dom";
import MoreResources from "./MoreResources";

const resources = [
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/davyd_res1.png?updatedAt=1757350425747",
    link: "https://www.artsjournal.com/artopia/2009/01/david_burliuk_the_ukrainian_fa.html",
    alt: "Resource 1",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/davyd_res2.png?updatedAt=1757350426201",
    link: "https://davidburliuk.org/archival-photographs/",
    alt: "Resource 2",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/davyd_res3.png?updatedAt=1757350425303",
    link: "https://uartlib.org/ukrayinski-hudozhniki/burlyuk-david/?srsltid=AfmBOoo0M0a5kbf-SI3u104bh0vy_IAULtvk128NMt3sPYtqcTwuiDKd",
    alt: "Resource 3",
  },
];

const DavydComp = () => {
  return (
    <div className="Davyd-wrap flex flex-col items-center bg-[#171717]">
      <div className="Davyd max-w-7xl items-center mb-10 overflow-hidden px-5">
        <div className="davyd-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_40%] gap-10 lg:gap-25">
          <div className="Davyd-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                DAVYD <span className="not-italic font-normal">BURLIUK</span>
              </h1>
              <p className="text-lg sm:text-xl w-[70%]">
                Born in Semyrotivschyna, present-day Sumy region, Ukraine (1882
                - 1967)
              </p>
            </div>

            <div className="hidden lg:block absolute top-[37%] right-[35%]">
              <img src={davydArrow} className="scale-150" alt="Arrow" />
            </div>
          </div>

          <div className="davyd-img order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/davyd.png"
              alt="Davyd Burliuk"
              className="w-full"
            />
          </div>
        </div>

        <div className="Davyd-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Davyd Burliuk is often celebrated as the “father of Russian
            futurism” — he provided much of the organizing drive behind the
            early Futurist movement, organized its landmark exhibitions, and
            without him, there would’ve been no Futurism in the Russian Empire.
            <br />
            <br />
            But Burliuk was Ukrainian—by heritage, by heart, and by how he
            lived. As described by{" "}
            <a
              href="https://shron1.chtyvo.org.ua/Myroslav_Shkandrij/Steppe_Son_David_Burliuks_Identity_anhl.pdf?PHPSESSID=e27v61df1kr1i6s9dgn90r2dg1"
              target="_blank"
            >
              <span className="underline">
                Burliuk’s son: “His life has no implication of doom or
                expressive failure, for he was a true Ukrainian: a man of joy
                and laughter.”
              </span>
            </a>
            <br />
            <br />
            <a
              href="https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBurliukDavyd.htm"
              target="_blank"
            >
              <span className="underline">
                Davyd Burliuk was born in 1882, on the farm Semirotivshchyna
              </span>
            </a>
            (Semirotivka) near the village of Ryabushki, in the Kharkiv province
            (now the Burliuk tract of Lebedynsky district, Sumy region). His
            mother, Jewish-Belarusian Lyudmila Mikhnevich, strongly encouraged
            Davyd in his artistic endeavours. His father, David Fedorovich
            Burliuk, was a Ukrainian whose pride transcended generations and
            would influence Burliuk's beliefs about Ukraine and artwork
            strongly.
            <br />
            <br />
            Davyd Burliuk was a descendant of Zaporozhian Cossacks—a heritage he
            often acknowledged in his writing: “On my father’s side, we are
            Ukrainian Cossacks, descendants of the Zaporozhian Cossacks. Our
            street nickname is ‘Pysarchuky’; we were scribes of the Zaporozhian
            army.”
            <br />
            <br />
            “Ukraine was and remains my homeland. There are the bones of my
            ancestors - free Cossacks, who were chopped for the glory of
            strength and freedom,” he wrote in{" "}
            <a
              href="https://unalib.ks.ua/burlyuk-david-davidovich.htm"
              target="_blank"
            >
              <span className="underline">
                Fragments from the Memoirs of a Futurist.
              </span>
            </a>
            His Ukrainian heritage would later be a defining influence on his
            style.
          </p>
        </div>

        <div className="diary-img">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/burliuk_diary.png?updatedAt=1757347382049"
            alt="Diary"
            className="w-full"
          />
        </div>

        <div className="Davyd-second-text text-lg xs:text-xl sm:[22px] text-justify mt-10 mb-25">
          <p>
            As Burliuk became increasingly invested in art, he enrolled in the
            Odessa Academy of Art between{" "}
            <a
              href="https://liebermann-villa.de/en/blog/the-art-of-the-ukraine-david-burliuk/"
              target="_blank"
            >
              <span className="underline">1900 and 1901</span>
            </a>
            at the age of 18-19. During his first stay in Odessa,{" "}
            <a
              href="https://gallerix.org/pr/vystavka-david-burlyuk/"
              target="_blank"
            >
              <span className="underline">he was mentored</span>
            </a>
            by the prominent{" "}
            <a
              href="https://www.getty.edu/vow/ULANFullDisplay?find=500119324&role=&nation=&subjectid=500026962"
              target="_blank"
            >
              <span className="underline">
                Ukrainian realist artist Kyriak Kostandi.
              </span>
            </a>
            During his time there, he developed a liking for Odessa, stating,
            “It was there that I met the artist and student of Isaak Brodsky, as
            well as Timofey Kolts, Anisfeld, Martyshchenko, and Ovsyany (who
            soon died in the mists of Petersburg). These connections formed
            bonds of friendship between me and Odessa,” resulting in his
            subsequent return between 1910-1911 to focus on neo-impressionism,
            an art style he was heavily interested in.
            <br />
            <br />
            Following his time in Odessa, Burliuk would relocate to Moscow to
            study at the{" "}
            <a
              href="https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBurliukDavyd.htm"
              target="_blank"
            >
              <span className="underline">
                Moscow school of painting, sculpting, and architecture, being
                taught there from 1911 until 1914. His strong and public support
                for futurism would result in his expulsion from the school.
              </span>
            </a>
            However, despite his expulsion, he did not leave Moscow, instead
            actively organizing the Russian/Ukrainian avant-garde community
            throughout the, at this point, ailing Russian Empire.
            <br />
            <br />
            As the Russian Empire collapsed, Davyd Burliuk expressed his
            fondness for the newly independent Ukraine between 1917 and 1922,
            writing,{" "}
            <a
              href="https://imwerden.de/pdf/burlyuk_david_fragmenty_iz_vospominany_1994__ocr.pdf"
              target="_blank"
            >
              <span className="underline">
                “While I’m currently writing in Russian, I might switch to my
                native Ukrainian later. Because I was born in Ukraine, which has
                now become free and unbelievably beautiful under the storm of
                the great Revolution. Ukraine, fraternally connected to the
                great Union of Soviet Republics of Lenin, has been and remains
                my homeland.”
              </span>
            </a>
          </p>
        </div>

        <div className="davyd-child-div grid lg:flex text-justify gap-10 overflow-hidden">
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              <a
                href="https://imwerden.de/pdf/burlyuk_david_fragmenty_iz_vospominany_1994__ocr.pdf"
                target="_blank"
              >
                <span className="underline">
                  Due to the erratic events of the Russian civil war, Davyd
                  Burliuk opted to leave the newly founded USSR in 1918,
                </span>
              </a>
              traveling through Siberia, China, Japan, and Canada, reaching New
              York in 1922, where he would settle.
              <br />
              <br />
              While residing in the United States of America, Davyd Burliuk
              would often express Ukrainian themes within his artwork,
              <a
                href="https://shron1.chtyvo.org.ua/Myroslav_Shkandrij/Steppe_Son_David_Burliuks_Identity_anhl.pdf?"
                target="_blank"
              >
                <span className="underline">
                  reminiscing and reflecting on his bond with Ukraine.
                </span>
              </a>
              Burliuk wanted to travel to the USSR to visit the Ukrainian SSR,
              hoping to work on his art there; however was only granted{" "}
              <a href="https://www.kyivpost.com/post/19679" target="_blank">
                <span className="underline">permission once, in 1956.</span>
              </a>
              During his journey throughout the USSR, he would return to
              Kharkiv, Odessa, and the Crimean Peninsula.
              <br />
              <br />
              <span className="italic font-light">
                Farm, Davyd Burliuk. Photo: Sotheby’s
              </span>
            </p>
          </div>

          <div className="lg:w-[50%] mt-4">
            <img
              className="w-full h-[92%] lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/davyd_child.png?updatedAt=1757347997356"
            ></img>
          </div>
        </div>

        <div className="Davyd-more-text text-lg xs:text-xl sm:[22px] text-justify mt-10 mb-25">
          <p>
            Burliuk’s deep pride in his Cossack heritage and his bond with the
            Ukrainian landscape permeated his creative vision. According to his
            friends, Burliuk often wore a Cossack-style earring and mimicked the
            imagery and spirit of the steppe as a representation of Ukrainian
            identity. It is no surprise that Burliuk’s Cossack heritage and his
            Ukrainian homeland profoundly inspired his work. He called his art
            laconic, simple, and coarse—like the land that shaped him, and in
            1915, painted{" "}
            <a
              href="https://unalib.ks.ua/burlyuk-david-davidovich.htm"
              target="_blank"
            >
              <span className="underline">
                “Sviatoslav” in the style of Ancient Ukrainian painting.
              </span>
            </a>
            <br />
            <br />
            <a
              href="https://unalib.ks.ua/burlyuk-david-davidovich.htm"
              target="_blank"
            >
              <span className="underline">
                Burliuk can be quoted as saying, “My color palette is deeply
                national. Yellow-Orange, Green-yellow-red, and blue tones pour
                from my brush like Niagara Falls,”
              </span>
            </a>
            demonstrating and explaining how Ukrainian influences can be traced
            back through the majority of his works.
            <br />
            <br />
            <a
              href="https://www.encyclopediaofukraine.com/display.asp?linkpath=pages%5CB%5CU%5CBurliukDavyd.htm"
              target="_blank"
            >
              <span className="underline">
                Not only was he inspired by the artifacts he found in Ukrainian
                lands, but he would also infuse his paintings with them quite
                literally. Burliuk was known to drag a new canvas outside, fling
                it into the dirt, and paint on it with clay and sand so that
                this canvas would become “the flesh and blood of the land.”
              </span>
            </a>
            <br />
            <br />
            Although Russia and Russians often claim Davyd Burliuk as “theirs”,
            Burliuk in Memoirs of a Futurist leaves a clear and lasting
            declaration for the ages,{" "}
            <a href="https://www.kyivpost.com/post/19679" target="_blank">
              <span className="underline">
                “Ukraine has its most faithful son in me. My color .”
              </span>
            </a>
            It’s clear that Burliuk drew inspiration from the strength and
            determination of his ancestors and his native land, Ukraine.
          </p>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            <span className="not-italic font-normal">AUTHORS</span> AND EXPERTS
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            The article was written and researched by Yde Bosma, Researcher at
            Shadows and Historian specializing in modern Ukraine, the Caucasus,
            and the Baltic (1991-present)
            <br />
            <br />
            The content was reviewed by Ukrainian Art Historian, Oksana Semenik.
          </p>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            WORKS <span className="not-italic font-normal">CITED</span>
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            Biedarieva, Svitlana. Ambicoloniality and War: The Ukrainian-Russian
            Case. 2024.{" "}
            <a
              href="https://doi.org/10.1007/978-3-031-74077-0"
              target="_blank"
              className="underline"
            >
              https://doi.org/10.1007/978-3-031-74077-0.
            </a>
            <br />
            <br />
            Burljuk, David Davidovič. ДАВИД БУРЛЮК Фрагменты из воспоминаний
            футуриста. Edited by N. A. Zubkova. ПУШКИНСКИЙ ФОНД, 1994.
            <br />
            <br />
            David Burliuk, Alexander Kruchenykh, Vladmir Mayakovsky, and Victor
            Khlebnikov. “A Slap in the Face of Public Taste.” 1917.
            <a
              href="https://www.marxists.org/subject/art/literature/mayakovsky/1917/slap-in-face-public-taste.htm"
              target="_blank"
              className="underline"
            >
              https://www.marxists.org/subject/art/literature/mayakovsky/1917/slap-in-face-public-taste.htm.
            </a>
            <br />
            <br />
            David Burliuk Foundation. “Archival Photographs • David Burliuk
            Foundation.” Accessed September 2, 2025.
            <a
              href="https://davidburliuk.org/archival-photographs/"
              target="_blank"
              className="underline"
            >
              https://davidburliuk.org/archival-photographs/.
            </a>
            <br />
            <br />
            David Burliuk Foundation. “Biography • David Burliuk Foundation.”
            Accessed September 2, 2025.{" "}
            <a
              href="https://davidburliuk.org/biography/"
              target="_blank"
              className="underline"
            >
              https://davidburliuk.org/biography/.
            </a>
            <br />
            <br />
            John Perreault. “David Burliuk, the Ukrainian Father of Japanese
            Futurism | Artopia.” November 1, 2009.
            <a
              href="https://www.artsjournal.com/artopia/2009/01/david_burliuk_the_ukrainian_fa.html"
              target="_blank"
              className="underline"
            >
              https://www.artsjournal.com/artopia/2009/01/david_burliuk_the_ukrainian_fa.html.
            </a>
            <br />
            <br />
            Newsday (Nassau Edition) (Hempstead, New York). “David Burliuk
            (1882-1967).” January 17, 1967.
            <br />
            <br />
            Oleksandra Sakorska. “The Art of the Ukraine. David Burliuk –
            Liebermann-Villa.” November 28, 2023.
            <a
              href="https://liebermann-villa.de/en/blog/the-art-of-the-ukraine-david-burliuk/"
              target="_blank"
              className="underline"
            >
              https://liebermann-villa.de/en/blog/the-art-of-the-ukraine-david-burliuk/.
            </a>
            <br />
            <br />
            uartlib.org. “Єдиний і неповторний Давид Бурлюк.” Бібліотека
            українського мистецтва, November 3, 2014.
            <a
              href="https://uartlib.org/yediniy-nepovtorniy-david-burlyuk/"
              target="_blank"
              className="underline"
            >
              https://uartlib.org/yediniy-nepovtorniy-david-burlyuk/.
            </a>
            <br />
            <br />
            “Давид Бурлюк.” Бібліотека українського мистецтва, n.d. Accessed
            September 2, 2025.
            <a
              href="https://uartlib.org/ukrayinski-hudozhniki/burlyuk-david/"
              target="_blank"
              className="underline"
            >
              https://uartlib.org/ukrayinski-hudozhniki/burlyuk-david/.
            </a>
            <br />
            <br />
            Капітоненко А. М. НАШ ДАВИД БУРЛЮК. D. Burliuk Foundation, 2007.
            <a
              href="https://irbis-nbuv.gov.ua/ulib/item/ukr0000015256"
              target="_blank"
              className="underline"
            >
              https://irbis-nbuv.gov.ua/ulib/item/ukr0000015256.
            </a>
            <br />
            <br />
            Херсонська обласна бібліотека для дітей ім. Дніпрової Чайки. “Бурлюк
            Давид Давидович.” Accessed September 2, 2025.
            <a
              href="http://unalib.ks.ua/burlyuk-david-davidovich.htm"
              target="_blank"
              className="underline"
            >
              http://unalib.ks.ua/burlyuk-david-davidovich.htm.
            </a>
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

export default DavydComp;
