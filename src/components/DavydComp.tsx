import {
  davyd,
  diary,
  resource1,
  resource2,
  resource3,
  davydArrow
} from "../assets/images";
import { Link } from "react-router-dom";


const DavydComp = () => {
  return (
    <div className="Davyd-wrap flex flex-col items-center">
      <div className="Davyd max-w-7xl items-center">
        <div className="davyd-img-heading">
          <img src={davyd}></img>
          <div className="Davyd-heading">
            <div>
              <h1>DAVYD BURLIUK</h1>
              <p>
                Born in Semyrotivschyna, present-day Sumy region, Ukraine (1882
                - 1967)
              </p>
              <div>
                <img src={davydArrow}></img>
              </div>
            </div>
          </div>
          <div className="Davyd-text">
            <p>
              Davyd Burliuk is often celebrated as the “father of Russian
              futurism” — he provided much of the organizing drive behind the
              early Futurist movement, organized its landmark exhibitions, and
              without him, there would’ve been no Futurism in the Russian
              Empire. But Burliuk was a patriotic Ukrainian, with an infectious
              kindness and sense of humor, as described by Burliuk’s son: “His
              life has no implication of doom or expressive failure, for he was
              a true Ukrainian: a man of joy and laughter.” David Burliuk was
              born on July 21 in 1882 on the farm Semirotivshchyna (Semirotivka)
              near the village of Ryabushki, Lebedynsky district, Kharkiv
              province (now the Burliuk tract of Lebedynsky district, Sumy
              region). Not only was Burliuk Ukrainian, but he was a descendant
              of Zaporozhian Cossacks. The connection to his heritage and
              history was often reflected in Burliulk’s writing in “Fragments
              from the Memoirs of a Futurist”...
            </p>
          </div>
          <div className="diary-img">
            <img src={diary}></img>
          </div>
          <div className="Davyd-second-text">
            <p>
              It is no surprise that Burliuk’s Cossack heritage and his
              Ukrainian homeland served as a deep inspiration for his work.
              Friends and family of Burliuk described his habit of wearing one
              earring in his right ear, in the style of the Cossacks. In 1915,
              Burliuk painted “Sviatoslav” in the style of Ancient Ukrainian
              painting. In his book, “Predky Moi” (my ancestors,) he describes
              his painting process and the influence his Ukrainian heritage has
              on his artwork. Burliuk mimicked the imagery and spirit of the
              steppe as a representation of Ukrainian identity. Burliuk
              frequently described his art as “simple,” “laconic,” or “coarse,”
              though the most direct allusion to the energy of the steppes is in
              the description of his art as “wild beauty.” Burliuk has also said
              — “a child of the Ukrainian steppes, I have always been most
              partial to horizontal formats.” Not only was he inspired by the
              artifacts he found in Ukrainian lands, but would quite literally
              infuse his paintings with it. Burliuk was known to drag a new
              canvas outside, fling it into the dirt, and paint on it with clay
              and sand so that this canvas would become “the flesh and blood of
              the land.” It’s clear that in everything he did, Burliuk drew
              inspiration from the strength and determination of his ancestors —
              and in his art, we see these core elements of what Ukrainian
              identity represented to Burliuk.
            </p>
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

export default DavydComp;
