import {
  kazymyrArrow,
} from "../assets/images";
import MoreResources from "./MoreResources";
import { Link } from "react-router-dom";

const KazymyrComp = () => {
  return (
    <div className="kazymyr-wrap flex flex-col items-center bg-[#171717]">
      <div className="kazymyr max-w-7xl items-center mb-10 overflow-hidden px-5">
        <div className="kazy-img-head mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          <div className="kazymyr-heading relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
                KAZYMYR <span className="not-italic font-normal">MALEVYCH</span>
              </h1>
              <p className="text-lg sm:text-xl">
                Born in Kyiv, Ukraine (1879 - 1973)
              </p>
            </div>

            <div className="hidden lg:block absolute top-[30%] right-[35%]">
              <img src={kazymyrArrow} className="scale-140" />
            </div>
          </div>

          <div className="kazy-img order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/kazymyr.png"
              alt="Kazymyr"
              className="w-full"
            />
          </div>
        </div>

        <div className="kazymyr-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Kazymyr Malevych is one of the greatest influences of the
            avant-garde movement, but, like countless other Ukrainian artists,
            is too often mislabelled as Russian. While Malevych may have a
            complex family history, with Polish and Ukrainian roots, we must see
            through the Russian-centric lens and recognize the artist for who he
            was: not Russian.
            <br />
            <br />
            Malevych was born on February 23rd, 1879, in Kyiv, now in modern-day
            Ukraine, to a Catholic family of Polish-Ukrainian origin. The
            spelling of Kazymyr Malevych’s name is a result of transliteration
            from Ukrainian and differs from the Polish or Russian spellings. His
            last name, Malevych, belonged to his father, Severyn Antonovich, an
            impoverished Polish nobleman whose ancestors had lived in Ukraine
            for over three centuries. His mother, Lyudmyla Halinovska, was from
            the Poltava region in Ukraine and is thought to have changed her
            name from the Ukrainian Lyudmyla to the Polish Ludwika after
            marriage. Malevych was baptized in the Co-Cathedral of St. Alexander
            in Kyiv. While the family spoke Polish at home, young Malevych was
            fluent in Ukrainian and spoke it with the village children. The
            artist only knew Polish orally, but could read and write in
            Ukrainian. In fact, he only encountered Russian as a teenager and
            &nbsp;
            <a
              href="https://www.radiosvoboda.org/a/kazymyr-malevych-ukrayina-mystetstvo-vplyv/32922266.html"
              target="_blank"
            >
              <span className="underline">
                "was very surprised what kind of language it was.”
              </span>
            </a>
            <br />
            <br />
            Born in a house at number 15 on Bulonska Street, now renamed
            Zhylianska Street, Malevych was the oldest of fourteen siblings,
            although only nine survived into adulthood. Malevych’s formative
            years were spent in other towns around Ukraine. Because his father
            worked as a sugar refinery manager in factories around Ukraine, the
            family moved frequently. In his youth, Malevych lived in Iampil in
            Podillia, Avdiivka and Koriukivka in Chernihiv, Parhomivka in
            Kharkiv, Vovchok in Vinnytsia, Bilopillia and Konotop in Sumy.
            <br />
            <br />
            It was here, along this rural backdrop, that Malevych’s motifs,
            artistic perspective, and personal philosophy formed. Malevych
            references these primitivist motifs that are ever-present in
            Ukrainian villages in his style of Suprematism.
          </p>
        </div>

        <div className="malevych-child-div grid lg:flex text-justify gap-10 overflow-hidden">
          <div className="lg:w-[50%]">
            <img
              className="w-full h-auto lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/malevych_child.png?updatedAt=1757244733300"
            ></img>
          </div>
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              At age twelve, the young artist was fascinated by the folk art
              that surrounded him and crafted his own watercolour paints and
              brushes. Malevych’s father was largely unsupportive of the boy’s
              artistic inclinations and was nervous about Kazymyr’s desire to
              become a painter. His father,{" "}
              <a
                href="https://uinp.gov.ua/istorychnyy-kalendar/lyutyy/23/1879-narodyvsya-kazymyr-malevych"
                target="_blank"
              >
                <span className="underline">
                  according to the artist’s journal
                </span>
              </a>
              , was worried about Malevych living the poor life of an artist.
              <br />
              <br />
              However, Malevych had support from his mother, Ludwika. For his
              fifteenth birthday, she bought him professional brushes and
              paints, and introduced him to the Ukrainian folk art that{" "}
              <a
                href="https://osvita.ua/school/biography/94305/"
                target="_blank"
              >
                <span className="underline">heavily influenced his work</span>
              </a>
              . Ludwika often embroidered and sewed alongside other village
              women, and{" "}
              <a
                href="https://www.youtube.com/watch?v=xp2XBChoY8o"
                target="_blank"
              >
                <span className="underline">Malevych joined them</span>
              </a>
              . In the story of this artist, it is crucial to note his mother’s
              relationship with Ukrainians. She was immersed in the Ukrainian
              village life and, by extension, so was young Malevych.
              <br />
              <br />
              <span className="italic font-light">
                Taking in the Harvest, Malevych (1911). Photo: artchive.com
              </span>
            </p>
          </div>
        </div>

        <div className="malevych-moretext1 text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            “The village was engaged in art (this word I did not know at that
            time). They made things that I really liked… I watched their work
            with great excitement and helped them plaster the floor of the house
            with clay and make patterns on the stoves. Beautifully depicted
            birds, horses and flowers… I tried to reproduce this art on the
            stove at home, but failed. They said that I spoiled a lot of things
            – fences, sheds and walls and so on,” Malevych recounts in his
            journal.
            <br />
            <br />
            When Malevych first interacted with artists in Bilopilli, Kharkiv,
            where artists gathered to paint icons in the local cathedral, he was
            fascinated and excited. The artist recounts travelling to Kyiv with
            his father and seeing a painting of a quintessential village scene:
            “The picture which fascinated me was of a young girl sitting on a
            bench and peeling a potato. I was struck by the lifelikeness of the
            potato and the peelings, which lay like ribbons on the bench next to
            an incomparably drawn pot. This picture was a revelation for me, and
            I remember it to this day.”’
            <br />
            <br />
            As per his father’s wishes, Kazymyr graduated from an agricultural
            school, but was drawn to Kyiv. From 1895 to 1896, Malevych studied
            drawing at the Mykola Murashko Kyiv Art School and studied under
            Mykola Pymonenko, one of Ukraine’s most famous painters. While
            studying with Pymonenko, Kazymyr writes that he “...was amazed by
            his studio…His paintings depicted the life of Ukraine."
            <br />
            <br />
            Malevych moved to Russia’s Kursk region in 1896. He{" "}
            <a href="https://osvita.ua/school/biography/94305/" target="_blank">
              <span className="underline">worked in Kursk as a draftsman</span>
            </a>{" "}
            at the Railway Administration for almost ten years, where he married
            Kazymyra Ivanovna Zgleits, and organized a drawing circle.
            <br />
            <br />
            In 1904, Malevych moved to Moscow without support from his wife, who
            left with their two children. There, Kazymyr continued his artistic
            education, studying in Ivan Rerberg’s architectural studio before
            entering the Moscow School of Painting, Sculpture, and Architecture.
            In Moscow,{" "}
            <a
              href="https://uinp.gov.ua/istorychnyy-kalendar/lyutyy/23/1879-narodyvsya-kazymyr-malevych"
              target="_blank"
            >
              <span className="underline">
                Malevych quickly became part of a circle of famous artists and
                exhibited his pieces.
              </span>
            </a>
          </p>
        </div>

        <div className="malevych-moretext2 text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            In 1914,{" "}
            <a
              href="https://uinp.gov.ua/istorychnyy-kalendar/lyutyy/23/1879-narodyvsya-kazymyr-malevych"
              target="_blank"
            >
              <span className="underline">
                Malevych introduced cubo-futurism into his work
              </span>
            </a>
            , which became Suprematism, an art style characterized by abstract
            form and colour. His famous work, “Black Square,” is considered the
            foundational work of Suprematism and fundamentally shifted the
            world’s perspective on art. In 1919, Malevych held his first solo
            exhibition, titled "Kazimir Malevich. His Path from Impressionism to
            Suprematism."
            <br />
            <br />
            After the unveiling of “Black Square,” Malevych held various
            teaching positions. In 1919, he taught in Belarus alongside Marc
            Chagall at the Vitebsk Practical Art School and from 1922 to 1927,
            he taught in Leningrad. Malevych returned to Ukraine in 1927.
            <br />
            <br />
            Malevych’s concept of Suprematism was revolutionary. His “Black
            Square,” painted in 1915, questioned the purpose of art and
            fundamentally shifted the concept of abstraction for artists. Before
            “Black Square,” artists had never considered the idea of moving away
            from traditional scenes or motifs{" "}
            <a href="https://osvita.ua/school/biography/94305/" target="_blank">
              <span>towards more interpretive art</span>
            </a>
            . In his 1927 book, Malevych wrote: ‘In the year 1913, trying
            desperately to free art from the dead weight of the real world, I
            took refuge in the form of the square.’
            <br />
            <br />
            His concept of Suprematism was a new form of abstract painting which
            enabled art to live within a world of its own. Rather than
            representing scenes from our day-to-day world, Suprematism
            championed{" "}
            <a
              href="https://www.moma.org/collection/terms/suprematism#:~:text=A%20term%20coined%20by%20Russian,deliberate%20illusions%20of%20representational%20painting"
              target="_blank"
            >
              <span className="underline">“the supremacy of pure feeling”</span>
            </a>{" "}
            through simple geometric shapes and bold colour.
            <br />
            <br />
            Malevych’s “Black Square” often evokes an abstract feeling in many
            people, as the painting is a rejection of the traditional art forms
            that Malevych encountered in his childhood and training. And while
            there are many interpretations as to what inspired Malevych’s
            concept of Suprematism, there is strong evidence in his
            autobiography that suggests that Ukrainian folk art heavily
            influenced his later work. But, for many Ukrainians, the “Black
            Square” may remind them of the traditional Ukrainian stove, known as
            a “pich,” found in village homes. These stoves are the center of
            Ukrainian households, where families cooked, women gave birth, and
            relatives mourned the loss of their loved ones. Ukrainians consider
            the “pich” part of or a gateway to the “other world,” carrying an
            almost mystic quality.
          </p>
        </div>

        <div className="malevych-child-div grid lg:flex text-justify gap-10 overflow-hidden">
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[40%]">
            <p>
              Clearly, the concept of Suprematism didn’t come out of nowhere -
              it was deeply rooted in Ukraine’s visual traditions. Many of
              Malevych’s works and motifs were inspired by his early life and
              exposure to folk art in the Ukrainian countryside. His artwork
              reflects both{" "}
              <a
                href="https://www.youtube.com/watch?v=xp2XBChoY8o"
                target="_blank"
              >
                <span className="underline">
                  his time in the city and his childhood in the villages,
                </span>
              </a>{" "}
              as it often blends the dark, industrious, and technical city with
              the colourful, beautiful, never-ending rural landscape.
              <br />
              <br />
              Considering his work and two autobiographies, a themes emerges -
              the rural-urban divide, noted by critics and historians like
              Myroslav Shkandrij. In his work and journal, Malevych appears as{" "}
              <a
                href="https://www.youtube.com/watch?v=xp2XBChoY8o"
                target="_blank"
              >
                <span className="underline">
                  “an artist inspired by peasant primitivism,”
                </span>
              </a>{" "}
              rather than a defender of the Bolshevik Revolution, as Russia has
              painted him.
              <br />
              <br />
              <span className="italic font-light">
                View of 21 of the 39 works by Kazimir Malevich on display.
                Photo: Wikipedia
              </span>
            </p>
          </div>

          <div className="lg:w-[60%] mt-4">
            <img
              className="w-full h-[92%] lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/malevych_child2.png?updatedAt=1757260269708"
            ></img>
          </div>
        </div>

        <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Throughout his writings, Malevych juxtaposes the beauty of village
            life and peasant culture with the predatory and dangerous machinery
            of industrial times. He portrays factory work as oppressive and
            rural life as liberating. Even the food eaten by industrial
            labourers is deemed inferior to the rich peasant diet. It appears
            from his writings that Malevych’s childhood in rural Ukraine led to
            him{" "}
            <a
              href="https://diasporiana.org.ua/wp-content/uploads/books/29119/file.pdf"
              target="_blank"
            >
              <span className="underline">completely identifying</span>
            </a>{" "}
            with the Ukrainian peasants he grew up around. Shkandrij also
            emphasizes how the Ukrainian village imprinted an aesthetic on
            Malevych, as the qualities he admired in the peasantry, being “clean
            and neat,” were what he later came to admire in art.
            <br />
            <br />
            Malevych’s passion for art began within the Ukrainian folk art
            context, and his artistic perspective is rooted in the folk art that
            surrounded him. He claims the village women were his first art
            teachers. The motifs found in Ukrainian folk art - the contrast of
            colour on stark white backdrops, bold geometric shapes, and crosses
            - are undeniably present throughout Malevych’s work. The colourful
            folk paintings and peasant drawings were almost magnetic for young
            Malevych, pulling him into the work of Ukrainian folk art.
            Characterized by colourful folk dresses, embroidery, needlework, and
            lacemaking, Malevych was entranced by these cultural elements. Many
            of his motifs can be traced back to Ukrainian baroque.
            <br />
            <br />
            The theme of primativism throughout Malevych’s work can likely be
            traced back to his Ukrainian childhood. His icon-like geometric
            shapes, use of bright colour, and simple, geometric shapes reference
            the folk art that surrounded him in his youth. Ukrainian art
            historian{" "}
            <a
              href="https://www.huri.harvard.edu/news/2025/04/ukrainian-sky-dark-nowhere-russia-malevichs-artistic-expression-ukrainianness"
              target="_blank"
            >
              <span className="underline">Dmytro Horbachov argued</span>
            </a>{" "}
            that “The closest analogy to his Suprematism are the geometrical
            forms of wall paintings in the homes of Podillia… The paintings of
            Malevych…capture the spirit of folk art and folk cosmology.” In his
            autobiography, Malevych writes that by studying the icon, he came to
            understand the emotional weight of peasant art - he rejected the
            artistic trends of the modern day, and remained “on the side of
            peasant art” and{" "}
            <a href="http://www.jstor.org/stable/778487" target="_blank">
              <span className="underline">
                “began painting pictures in the primitive spirit.”
              </span>
            </a>
            <br />
            <br />
            In his journals, he recounts his admiration of Ukrainian village
            life: "In the Ukrainian sky, like candles, the stars burned... The
            Ukrainian night is so black, so beautiful, that there is none in the
            whole world."
          </p>
        </div>

        <div className="diary-img">
          <img
            src="https://ik.imagekit.io/shadows/Shadows-project/diary.png"
            alt="Diary"
            className="w-full"
          />
        </div>

        <div className="kazymyr-second-text text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
          <p>
            Upon his return to Ukraine in 1927, Malevich led workshops in
            Verbivka in Ivano Frankivsk Oblast and taught at the Kyiv Art
            Institute from 1927 to 1930. There, he sought to{" "}
            <a href="https://osvita.ua/school/biography/94305/" target="_blank">
              <span className="underline">
                transform approaches to art education
              </span>
            </a>{" "}
            and established the{" "}
            <a
              href="https://eclecticlight.co/2023/07/11/ukrainian-painters-kazymyr-malevych/"
              target="_blank"
            >
              <span className="underline">
                Research Workshop of Experimental Art.
              </span>
            </a>{" "}
            From 1928 to 1930, Malevych published fourteen articles in Ukrainian
            newspapers in Kyiv and Kharkiv about the history and theory of
            Suprematism. He wanted to develop these articles into a longer book,
            titled “Izologia” or Artology, but the idea was scrapped by Russian
            publishers as part of their repressive campaign against Ukrainian
            artists.
            <br />
            <br />
            Under Soviet rule, Malevych was arrested twice by the KGB, and in
            1933, his art was outlawed as part of a widespread repressive
            campaign against Ukrainian intelligentsia and artists. After his
            arrest, Malevych was accused of espionage, tortured, and threatened
            with execution. In the aftermath, many of his Ukrainian colleagues,
            like Mykhailo Boichuk, were executed.
            <br />
            <br />
            Despite spending many years living in Russia, Malevych’s identity is
            undeniably Ukrainian. During his torture by the KGB, he insisted his
            nationality was Ukrainian. In his journals, he writes of himself and
            his colleague, Lev Kvachevsky;{" "}
            <a
              href="https://drive.google.com/file/d/1N9dCV-G1xVaLxlrPzUnaHKtfLkmW4nph/view?usp=drive_link"
              target="_blank"
            >
              <span className="underline">
                “He and I were both Ukrainians.”
              </span>
            </a>{" "}
            Malevych writes of his time in the countryside: “It was against this
            background that my feelings for art developed.” Furthermore, he
            describes how Kyiv entranced and influenced him: “With each year, I
            improved in this activity and grew more and more strongly drawn to
            Kyiv. The colourful brick houses, the hills, the Dnipro…Its whole
            life affected me more and more.” According to Malevych’s sister, he
            made a point to self-identify as Ukrainian on legal documents and{" "}
            <a href="http://www.jstor.org/stable/778487" target="_blank">
              <span className="underline">
                encouraged his other family members to follow suit.
              </span>
            </a>
            <br />
            <br />
            In fact, the artist’s work developed alongside Ukraine. During the
            artificial, genocidal famine of 1932-1933 in Ukraine, Malevych was
            one of the only artists whose work depicted the famine’s horrors.
            One of his sketches depicts three figures whose faces are replaced
            by a hammer and sickle, a cross, and a coffin. The work is titled
            "Where there is a sickle and a hammer, there is death and famine."
            Not only does this work denounce the Soviet government’s actions,
            but it references a folk song from the 1920s, further highlighting
            Malevych’s connection to Ukraine. The artist’s paintings{" "}
            <a
              href="https://www.huri.harvard.edu/news/2025/04/ukrainian-sky-dark-nowhere-russia-malevichs-artistic-expression-ukrainianness"
              target="_blank"
            >
              <span className="underline">
                “denounce the absurdity of Soviet projects of industrialization
                and collectivization.”
              </span>
            </a>
            <br />
            <br />
            Following increased repression and ostracization from the Soviet
            government, Malevych was forced to live in a cold and cramped
            apartment in St. Petersburg. The artist developed cancer and died in
            St. Petersburg on May 15th, 1935, at age fifty-six.
            <br />
            <br />
            Today, Malevych is remembered and celebrated in Ukraine and globally
            as one of the most influential artists of his time. His “Black
            Square” fundamentally reshaped artistic philosophy and opened doors
            to entirely new ways of thinking about and approaching art. In
            recognition of his influence, UNESCO declared 2015 “The Year of
            Kazymyr Malevych,” and in 2014, authorities renamed Kyiv’s
            Zhylianska Street to Kazymyr Malevych Street.
          </p>
        </div>

        <div className="malevych-child-div grid lg:flex text-justify gap-10 overflow-hidden mb-20">
          <div className="lg:w-[50%] mt-3">
            <img
              className="w-full h-auto lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/malevich_child3.png?updatedAt=1757263387355"
            ></img>
          </div>
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              Just as Ukrainian folk embroidery influenced Malevych, his work
              influences Ukrainian artists and brands today. Contemporary
              Ukrainian ethno brands, like Etnodim, use Malevych’s geometric and
              colourful designs on clothing.
              <br />
              <br />
              While the Soviet and Russian governments weaponized Malevych’s art
              to legitimize the terror that they cast upon Ukraine, we must
              counter this manipulation of history and recognize Malevych for
              who he was. To appreciate Kazymyr Malevych, we have a duty to
              acknowledge his roots and understand the Ukrainian folk art that
              laid the foundation for Suprematism.
              <br />
              <br />
              <span className="italic font-light">
                Photo from the exhibition of decorative art from Verbivka. In
                the center lies a pillow with embroidery by the sketch of
                Kazymyr Malevych (Malevich). 1917. Photo: Ukrlib.org
              </span>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            <span className="not-italic font-normal">AUTHORS</span> AND EXPERTS
          </h1>
          <p className="kazymyr-second-text text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            The article was written and researched by Naomi Nemickas, Researcher
            at The Shadows Project and History and Politics Student at
            University of Oxford.
            <br />
            <br />
            The content was reviewed by Myroslav Shkandrij, Professor Emeritus
            of the University of Manitoba and a former head of the Department of
            German and Slavic Studies, and Tetyana Filevska, Creative Director
            of Ukrainian Institute Kyiv and author of Kazimir Malevich. Kyiv
            period 1928-1930”, “Kazimir Malevich. Kyiv aspect.”
          </p>
        </div>

        <div className="resources flex flex-col  justify-center mb-15">
          <div className="resources-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light italic mb-5 ">
            <h1>
              MORE <span className="not-italic font-normal">RESOURCES</span>
            </h1>
          </div>
          <MoreResources/>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
            WORKS <span className="not-italic font-normal">CITED</span>
          </h1>
          <p className="kazymyr-second-text text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            TCarelli, Francesco. “Malevich, an Hero Pushed to Death.” London
            Journal of Primary Care, vol. 8, no. 1, 2 Jan. 2016, pp. 15–17,
            https://doi.org/10.1080/17571472.2015.1133951.
            <br />
            <br />
            Cen, Nathalie. “The Ukrainian Sky Is Dark like Nowhere in Russia:
            Malevich’s Artistic Expression of Ukrainianness | Ukrainian Research
            Institute.” Harvard.edu, 3 Apr. 2025,
            www.huri.harvard.edu/news/2025/04/ukrainian-sky-dark-nowhere-russia-malevichs-artistic-expression-ukrainianness.
            Accessed 12 Aug. 2025.
            <br />
            <br />
            Fresh Production Group. “Документальний фільм “Малевич. Народжений в
            Україні.”” YouTube, 22 Feb. 2023,
            www.youtube.com/watch?v=xp2XBChoY8o. Accessed 12 Aug. 2025.
            <br />
            <br />
            Library of Ukrainian Art. “Malevich and Ukraine.” Uartlib.org,
            en.uartlib.org/exclusive/malevich-ta-ukrayina/. Accessed 12 Aug.
            2025.
            <br />
            <br />
            Malevich, Kazimir, and Alan Upchurch. “Chapters from an Artist’s
            Autobiography.” Chapters from an Artist’s Autobiography, by Kazimir
            Malevich, translated by Alan Upchurch, Stockholm, The Russian
            Avant-Garde, 1976, pp. 25–44, www.jstor.org/stable/778487. Accessed
            12 Aug. 2025.
            <br />
            <br />
            Освіта.ua. “Казимир Малевич: коротка біографія.” Освіта.UA,
            Освіта.ua, 4 Mar. 2025, osvita.ua/school/biography/94305/. Accessed
            12 Aug. 2025.
            <br />
            <br />
            Ростислав Хотин. ““Українець свідомого вибору”. Що зробило Казимира
            Малевича творцем сучасного мистецтва?” Радіо Свобода, 27 Apr. 2024,
            www.radiosvoboda.org/a/kazymyr-malevych-ukrayina-mystetstvo-vplyv/32922266.html.
            Accessed 12 Aug. 2025.
            <br />
            <br />
            Svitlana Tsurkan. “Non-Russian Avant-Garde, or How Russia
            Appropriates Ukrainian Culture - Euromaidan Press.” Euromaidan
            Press, 5 Jan. 2023,
            euromaidanpress.com/2023/01/05/non-russian-avant-garde-a-guide-to-russias-artwashing-and-cultural-appropriation/.
            Accessed 12 Aug. 2025.
            <br />
            <br />
            Tate. “Five Ways to Look at Malevich’s Black Square.” Tate, 2014,
            www.tate.org.uk/art/artists/kazimir-malevich-1561/five-ways-look-malevichs-black-square.
            Accessed 12 Aug. 2025.
            <br />
            <br />
            The Eclectic Light Company. “Ukrainian Painters: Kazymyr Malevych.”
            The Eclectic Light Company, 11 July 2023,
            eclecticlight.co/2023/07/11/ukrainian-painters-kazymyr-malevych/.
            Accessed 12 Aug. 2025.
            <br />
            <br />
            The Museum of Modern Art. “Suprematism | MoMA.” The Museum of Modern
            Art, www.moma.org/collection/terms/suprematism. Accessed 12 Aug.
            2025.
            <br />
            <br />
            УІНП. “1879, народився Казимир Малевич.” Uinp.gov.ua, 2024,
            uinp.gov.ua/istorychnyy-kalendar/lyutyy/23/1879-narodyvsya-kazymyr-malevych.
            Accessed 12 Aug. 2025.
            <br />
            <br /> 
            Vogue.ua. “10 цікавих фактів про художника Казимира
            Малевича.” Vogue.ua, 23 Feb. 2025,
            vogue.ua/article/culture/art/10-cikavih-faktiv-pro-hudozhnika-kazimira-malevicha-51428.html.
            Accessed 12 Aug. 2025.
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

export default KazymyrComp;
