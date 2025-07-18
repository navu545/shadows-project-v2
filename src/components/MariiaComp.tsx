import {
  mariia,
  mariia2,
  resource1,
  resource2,
  resource3,
  mariiaArrow,
} from "../assets/images";
import { Link } from "react-router-dom";

const MariiaComp = () => {
  return (
    <div className="Mariia-wrap flex flex-col items-center bg-[#171717]">
      <div className="Mariia max-w-7xl items-center mb-10 overflow-hidden px-5">
        {/* IMAGE & HEADING SECTION */}
        <div className="mariia-img-heading mt-20 mb-15 grid lg:grid-cols-[45%_55%] gap-10 lg:gap-25">
          {/* Heading first on small screens */}
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
            {/* Arrow hidden below lg */}
            <div className="hidden lg:block absolute top-[40%] right-[45%]">
              <img src={mariiaArrow} className="scale-140" alt="Arrow" />
            </div>
          </div>

          {/* Image below heading on mobile */}
          <div className="mariia-img order-2 lg:order-1">
            <img src={mariia} alt="Mariia Bashkirtseva" className="w-full" />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="Mariia-text text-lg xs:text-xl sm:text-2xl mb-10 text-justify">
          <p>
            An artist with a very gentle but strong soul, she always wanted to
            be famous, which she often mentioned in her diaries. Unfortunately,
            death took her life earlier than she had made it to be famous, as
            well as her name and heritage were stolen by imperialist ideas of
            Russia.
            <br />
            <br /> Maria Bashkirtseva (also known as Marie Bashkirtseff) was
            born in Poltava county in 1858. She spent all her childhood in
            Ukraine, being raised at the family estate of her grandparents in
            Kharkiv gubernia. Even though she left Ukraine in 1870, she never
            lost touch with her roots. For example, the young girl always liked
            being photographed, and there exist various pictures taken of her in
            a traditional Ukrainian outfit, dated after she had moved to Europe.
            (e.g. Pic taken by I.Khmlevsky during Marie’s visit to in Poltava,
            Ukraine in 1876)
            <br />
            <br /> Marie has changed a lot of cities: from Vienna to Nice and
            London, but she always continued to learn music, singing, and
            painting. While moving around, she started to write her diary (and
            never stopped until her last days), which later made her famous. The
            diary was praised by Anatole France and Emile Zola, published in
            several languages around the world, and continuously described as
            “one of the most prominent books of the 19th century.” Her diary was
            full of her adolescent mind's reflections and ideas, perfectly
            depicting the life and upbringing of a young Ukrainian beauty.
            <br />
            <br /> At 16, Marie decided to become a singer, but one day she lost
            her voice, which was an early sign of undiagnosed tuberculosis. Even
            though health problems made her give up on a dream, they also helped
            her find another passion: painting. When settling down in Paris,
            Marie spent countless hours in galleries, which later inspired her
            to join the art academy run by R. Julian. Maria’s works were praised
            by recognized artists, and what is even more impressive is that she
            completed the seven-year course at Académie des Beaux-Arts in Paris
            in just two years.
            <br />
            <br /> Marie continuously fought for women’s rights. In 1882, she
            joined the suffrage movement and published articles in the Paris
            magazine La Citoyenne, where she criticized the double moral
            standards of modern French society that did not allow women to
            participate in art movements and education equally with men.
            <br />
            <br /> Sadly, Maria’s life was cut short by rapidly developing
            tuberculosis, and she died in 1884 at the age of 26. She left behind
            around 200 paintings, a sculpture, and her famous Journal, the
            “secret Bible of women of that time”.
            <br />
            <br /> Her name remains stolen by Russia. Even though she has spent
            half of her life living in Ukraine and has no connection to Russia,
            museums worldwide label her “russian”. Dozens of prominent Ukrainian
            names are to this day being appropriated by Russia, and,
            unfortunately, this is also the case for Marie Bashkirtseva.
          </p>
        </div>

        {/* DIARY IMAGE */}
        <div className="diary-img">
          <img src={mariia2} alt="Mariia Diary" className="w-full" />
        </div>

        {/* RESOURCES SECTION */}
        <div className="resources flex flex-col items-center justify-center mb-15 mt-10">
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

export default MariiaComp;
