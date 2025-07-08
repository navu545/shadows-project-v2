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
    <div className="Mariia-wrap flex flex-col items-center">
      <div className="Mariia max-w-7xl items-center">
        <div className="mariia-img-heading">
          <img src={mariia}></img>
          <div className="Mariia-heading">
            <div>
              <h1>MARIIA BASHKIRTSEVA</h1>
              <p>Born in Havrontsi, Ukraine (1858 - 1884)</p>
            </div>
            <div>
              <img src={mariiaArrow}></img>
            </div>
          </div>
          <div className="Mariia-text">
            <p>
              An artist with a very gentle but strong soul, she always wanted to
              be famous, which she often mentioned in her diaries.
              Unfortunately, death took her life earlier than she had made it to
              be famous, as well as her name and heritage were stolen by
              imperialist ideas of Russia. Maria Bashkirtseva (also known as
              Marie Bashkirtseff) was born in Poltava county in 1858. She spent
              all her childhood in Ukraine, being raised at the family estate of
              her grandparents in Kharkiv gubernia. Even though she left Ukraine
              in 1870, she never lost touch with her roots. For example, the
              young girl always liked being photographed, and there exist
              various pictures taken of her in a traditional Ukrainian outfit,
              dated after she had moved to Europe. (e.g. Pic taken by
              I.Khmlevsky during Marie’s visit to in Poltava, Ukraine in 1876)
              Marie has changed a lot of cities: from Vienna to Nice and London,
              but she always continued to learn music, singing, and painting.
              While moving around, she started to write her diary (and never
              stopped until her last days), which later made her famous. The
              diary was praised by Anatole France and Emile Zola, published in
              several languages around the world, and continuously described as
              “one of the most prominent books of the 19th century.” Her diary
              was full of her adolescent mind's reflections and ideas, perfectly
              depicting the life and upbringing of a young Ukrainian beauty. At
              16, Marie decided to become a singer, but one day she lost her
              voice, which was an early sign of undiagnosed tuberculosis. Even
              though health problems made her give up on a dream, they also
              helped her find another passion: painting. When settling down in
              Paris, Marie spent countless hours in galleries, which later
              inspired her to join the art academy run by R. Julian. Maria’s
              works were praised by recognized artists, and what is even more
              impressive is that she completed the seven-year course at Académie
              des Beaux-Arts in Paris in just two years. Marie continuously
              fought for women’s rights. In 1882, she joined the suffrage
              movement and published articles in the Paris magazine La
              Citoyenne, where she criticized the double moral standards of
              modern French society that did not allow women to participate in
              art movements and education equally with men. Sadly, Maria’s life
              was cut short by rapidly developing tuberculosis, and she died in
              1884 at the age of 26. She left behind around 200 paintings, a
              sculpture, and her famous Journal, the “secret Bible of women of
              that time”. Her name remains stolen by Russia. Even though she has
              spent half of her life living in Ukraine and has no connection to
              Russia, museums worldwide label her “russian”. Dozens of prominent
              Ukrainian names are to this day being appropriated by Russia, and,
              unfortunately, this is also the case for Marie Bashkirtseva.
            </p>
          </div>
          <div className="diary-img">
            <img src={mariia2}></img>
          </div>
          
          <div className="resources">
            <div className="resources-heading">
              <h1>MORE RESOURCES</h1>
            </div>
            <div className="resources-imgs">
              <img src={resource1} className="scale-40"></img>
              <img src={resource2} className="scale-40"></img>
              <img src={resource3} className="scale-40"></img>
            </div>
          </div>
          <div className="back-to-artists">
            <Link to="/artists">
              <button>ALL ARTISTS</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MariiaComp;
