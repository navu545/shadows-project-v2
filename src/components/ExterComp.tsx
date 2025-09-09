import MoreResources from "./MoreResources";
import { Link } from "react-router-dom";

const resources = [
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/exter_resource1.png?updatedAt=1757436175845",
    link: "https://rodovid.net/en/product/306/oleksandra-ekster-stsena-tse-svit-alexandra-exter-the-stage-is-a-world-alexandra-exter-la-scne-est-un-monde/",
    alt: "Resource 1",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/exter_resource2.png?updatedAt=1757436175201",
    link: "https://www.researchgate.net/publication/364681530_From_Folk_Art_to_Abstraction_Ukrainian_Embroidery_as_a_Medium_of_Avant-Garde_Experimentation",
    alt: "Resource 2",
  },
  {
    src: "https://ik.imagekit.io/shadows/Shadows-project/exter_resource3.png?updatedAt=1757436174888",
    link: "https://drive.google.com/file/d/1BqtlT91KoxqwXn9HDdEcuOZFosWy_16u/view?usp=drive_link",
    alt: "Resource 3",
  },
];

const ExterComp = () => {
  return (
    <div className="Exter-wrap flex flex-col items-center bg-[#171717]">
      <div className="Exter max-w-7xl items-center mb-10 overflow-hidden px-5">
        <div className="Exter-img-heading mt-20 mb-15 grid lg:grid-cols-[55%_45%] gap-10 lg:gap-25">
          <div className="Exter-heading order-1 lg:order-2 mb-10 lg:mb-0">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4">
              ALEXANDRA <span className="not-italic font-normal">EXTER</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Born in Białystok, Poland (1882 - 1949)
            </p>
          </div>

          <div className="exter-img order-2 lg:order-1">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/exter_dp.png?updatedAt=1757436178538"
              alt="Exter"
              className="w-full"
            />
          </div>
        </div>


        <div className="Exter-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Between 1910-1930, the Ukrainian avant-garde movement was at its
            peak. Known for its blend of European modern practice with folk art
            traditions, the Ukrainian avant-garde and its associated artists had
            a unique experimental style. One artist most closely associated with
            the Ukrainian avant-garde is Oleksandra Ekster. Despite this, Ekster
            is often mislabeled as Russian, French, or even Belarusian in
            museums.
            <br />
            <br />
            Ekster’s work and life were profoundly impacted by her time in
            Ukraine. Highlighting Ekster’s unique relationship with Ukraine
            challenges Russian-centric views of not only her identity, but also
            the wider interpretations of the art history of post-Soviet nations.
            Although Ekster did not leave behind any personal journals or
            personal records, we can infer through her relationships, her
            artwork, and her personal background that she was, in fact,
            Ukrainian.
            <br />
            <br />
            Oleksandra Ekster was born on January 6th, 1882, in modern-day
            Poland. Two years after her birth, her parents relocated to Ukraine,
            settling in Kyiv. Oleksandra Oleksandrivna Hryhorovych spent over 35
            years in Kyiv. She graduated from a women's gymnasium, entered the
            Kyiv Drawing School of Mykola Murashko in 1899, and then the Kyiv
            Art School, where she studied under M. Pymonenko. It was in 1903
            that Oleksandra Hryhorovych married Mykola Ekster and took her
            husband's surname.{" "}
            <a
              href="https://www.researchgate.net/publication/357440044_Alexandra_Ekster's_Contribution_to_Ukrainian_and_World_Art_Culture"
              target="_blank"
            >
              <span className="underline">
                Since then, she became known as Oleksandra Ekster.
              </span>
            </a>
            <br />
            <br />
            At the beginning of the 20th century, Ukraine was undergoing a
            cultural revival. National consciousness and pride meant that many
            cultural elites were participating in cultural processes, including
            with village folk art. Ekster was no exception. After graduating
            from the academy, she was an avid painter. Alongside her painting
            work, she started working closely with the craftswomen of the
            Verbivka village. Oleksandra Ekster’s interest in Ukrainian folk art
            was{" "}
            <a href="https://www.mdpi.com/2076-0752/11/6/110" target="_blank">
              <span className="underline">sparked through her heritage</span>
            </a>
            and her friendship with Natalia Davydova, a Ukrainian noblewoman who
            was a patron to peasant handicrafts. Ekster’s earliest work shows
            the influence of Impressionism and Ukrainian folk art.
          </p>
        </div>

        <div className="exter-child-div grid lg:flex text-justify gap-10 overflow-hidden mb-10">
          <div className="lg:w-[50%]">
            <img
              className="w-full h-auto lg:scale-103 scale-90"
              src="https://ik.imagekit.io/shadows/Shadows-project/exter_dp2.png?updatedAt=1757436177072"
            ></img>
          </div>
          <div className="text-lg xs:text-xl sm:text-[22px] mb-10 text-justify lg:w-[50%]">
            <p>
              Ekster moved to Paris for the first time in the fall of 1907, just
              as Cubism was forming as a distinct style. Ekseter interacted with
              many of the inventors of Cubism, and the style started to greatly
              influence her painting style. However, took her interest in
              Ukrainian folk art with her.
              <br />
              <br />
              <a
                href="https://monoskop.org/images/b/b7/Exter_Goncharova_Popova_Rozanova_Stepanova_Udaltsova_Amazons_of_the_Avant-Garde_low_res.pdf"
                target="_blank"
              >
                <span className="underline">As Bowlt highlights,</span>
              </a>
              ‘...Ekster’s abstract paintings seem also to derive from a more
              local and domestic source, for the angularities of these works
              bring to mind the zigzag lines of flowers in Ukrainian peasant
              paintings: certainly her triangles, trapezoids and rhomboids
              suggest an immediate affinity with Ukrainian ornament.’ Even as
              Ekster’s style went further into abstraction, she continued
              finding inspiration in her Ukrainian heritage.
              <br />
              <br />
              <span className="italic font-light">
                Oleksandra Ekster in her atelier in Paris. Photo: Daily Art
                Magazine
              </span>
            </p>
          </div>
        </div>

        <div className="Exter-text text-lg xs:text-xl sm:text-[22px] mb-10 text-justify">
          <p>
            Her interest and commitment to Ukrainian folk art not only inspired
            her painting work but also inspired her as a curator. Ekster helped
            shape exhibitions that focused on Ukrainian embroidery, such as The
            South-Russian Exhibition of Applied Arts and Handicrafts and the
            Contemporary Decorative Art exhibition that opened in Moscow in
            1915. Denysova argues that Ekster’s involvement in these studios
            encouraged a more abstract or Suprematist output of embroidery. She
            directly relates the abstract art and Ukrainian embroidery and
            <a
              href="https://monoskop.org/images/b/b7/Exter_Goncharova_Popova_Rozanova_Stepanova_Udaltsova_Amazons_of_the_Avant-Garde_low_res.pdf"
              target="_blank"
            >
              <span className="underline">argues</span>
            </a>
            that Ekster’s role was monumental in this artistic exchange.
            <br />
            <br />
            By 1914, Ekster had returned to Ukraine. Her studio in Kyiv was a
            meeting point for many Ukrainian intellectuals and creatives. Ekster
            started expanding her craft to set design during this time, and in
            1918-1920, she was working as the leading set designer for Alexander
            Tairov’s Chamber Theatre. This passion for stage design and
            Ukrainian folk art trickled down to the other artists that Ekster
            interacted with.
            <br />
            <br />
            For example, Oleksandr Khvostenko-Khvostov, another Ukrainian set
            designer frequently mistaken as Russian, worked alongside Ekster in
            her studio. The influence of Ukrainian folk art on Ekster can be
            seen in his stage design for Mystery-Buff (prem. 1921, Kharkiv)
            production based on the play by Vladimir Mayakovsky. Moving scenery
            in this play,{" "}
            <a
              href="https://www.researchgate.net/publication/362842014_Alexandra_Exter_theatre_and_Ukrainian_scenography_in_the_1910s_and_1920s"
              target="_blank"
            >
              <span className="underline">which Ekster inspired,</span>
            </a>
            was present throughout the play: ‘Pieces of traditional Ukrainian
            plakhta, an ancient female patterned garment worn like a skirt over
            a traditional long full-sleeved shirt, were organically balanced in
            a planetary arrangement with fragments of the sun and moon,
            rainbows, celestial bodies, and other natural phenomena. All these
            stage elements seemed to be in an intense movement.’ Ekster’s
            passion for Ukrainian folk art was passed down and encouraged for
            her students, another indication of how closely she aligned with her
            Ukrainian identity.
            <br />
            <br />
            During the 1930s, Ekster’s health started to decline, exacerbated by
            the Nazi occupation in the Second World War, and she died in France
            in 1949. Ekster never returned to Ukraine after 1920, her home in
            Paris remained rich with Ukrainian embroideries and tapestries.
            While she was always admired for her cosmopolitan nature, it is
            evident that through Ekster’s involvement with the Ukrainian women’s
            embroidery, her folk art motifs in her paintings, and even the way
            her pupils were inspired by her love of Ukraine, that Ekster’s
            connection to Ukraine was a profound one. As the art history canon
            in a post Soviet world continues efforts to decolonise its
            Russian-centric lens, it is imperative that artists such as Ekster’s
            true Ukrainian identity is recognised.
          </p>
        </div>

        <div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl italic font-light mb-4 mt-20">
            <span className="not-italic font-normal">AUTHORS</span> AND EXPERTS
          </h1>
          <p className="text-lg xs:text-xl sm:text-[22px] text-justify mt-10 mb-20">
            The article was written and researched by Katya Zabelski,
            Independent history of art researcher specialising in the politics
            of Ukrainian folk art.
            <br />
            <br />
            The content was reviewed by Peter Doroshenko, the director at The
            Ukrainian Museum, New York.
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
            Bowlt, John E., “The Marionettes of Alexandra Exter.” Russian
            History 8, no. 1/2 (1981): 219–32.
            http://www.jstor.org/stable/24652395.
            <br />
            <br />
            Bowlt, John E., and Matthew Drutt. Amazons of the Avant-Garde:
            Alexandra Exter, Natalia Goncharova, Liubov Popova, Olga Rozanova,
            Varvara Stepaova, and Nadezhda Udaltsova. Guggenheim Museum:
            Distributed by Harry N, Abrams, 2000.
            <br />
            <br />
            Chechyk, Valentyna. “Alexandra Exter Theatre and Ukrainian
            scenography in the 1910s and 1920s.” Theatralia, vol. 25, no. 1,
            2022, pp. 44–64, https://doi.org/10.5817/ty2022-1-4.
            <br />
            <br />
            Cohen, Ronny H. “Alexandra Exter’s Design for the Theater.”
            Artforum, Artforum, 26 Sept. 2023,
            www.artforum.com/features/alexandra-exters-design-for-the-theater-208584/.
            <br />
            <br />
            Denysova, Katia. 2022. "From Folk Art to Abstraction: Ukrainian
            Embroidery as a Medium of Avant-Garde Experimentation" Arts 11, no.
            6: 110.{" "}
            <a
              href="https://doi.org/10.3390/arts11060110"
              target="_blank"
              className="underline"
            >
              https://doi.org/10.3390/arts11060110
            </a>
            <br />
            <br />
            Kurkov, Andreĭ, et al. Treasures of Ukraine: A Nation’s Cultural
            Heritage. Thames & Hudson, 2022.
            <br />
            <br />
            Semenik, Oksana ‘Colour and Rhythym: Alexandra Exter’s Embroidery
            and Suprematism’
            <br />
            <br />
            Turchak, Lesia. (2021). Alexandra Ekster’s Contribution to Ukrainian
            and World Art Culture. Contemporary Art. 219-228.
            10.31500/2309-8813.17.2021.248461.
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

export default ExterComp;
