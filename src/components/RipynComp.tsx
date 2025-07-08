import {
  ripyn,
  diary,
  resource1,
  resource2,
  resource3,
} from "../assets/images";
import { Link } from "react-router-dom";

const RipynComp = () => {
  return (
    <div className="ripyn-wrap flex flex-col items-center">
      <div className="ripyn max-w-7xl items-center">
        <div className="ripyn-img-heading">
          <img src={ripyn}></img>
          <div className="ripyn-heading">
            <div>
              <h1>ILIA RIPYN</h1>
              <p>Born in Chuhuiv, Ukraine (1844 - 1930)</p>
              <div>
                <img></img>
              </div>
            </div>
          </div>
          <div className="ripyn-text">
            <p>
              Kazimir Malevych is a Ukrainian artist. Malevych was born in 1879
              in Kyiv to a Polish father and a Ukrainian mother. He spoke and
              wrote in Ukrainian, and described his artistic awakening in the
              villages of Kharkiv, where he lived from ages 12 to 15, watching
              peasants paint ovens with birds, flowers, and animals using
              homemade clays. “The village was engaged in art… I watched their
              work with great excitement,” he wrote. Later, he taught not only
              in Leningrad but also at the Kyiv Art Institute — a hub of
              Ukrainian modernism often referred to as the “Ukrainian Bauhaus.”
              In his diaries and letters, he longed for his hometown,
              remembering Kyiv’s unique brick buildings, the Dnipro River, and
              its street life filled with farmers and colors. Malevych always
              referred to himself as Ukrainian. It is reflected throughout his
              life and work, and was often mentioned in his diary: “… I
              feel more and more like returning to Kyiv. Original and unique
              Kyiv is vivid in my memories. Buildings from colored bricks,
              mountainous terrain, the Dnipro river, boats… City life
              influenced me. Farmers crossing the Dnipro bringing butter, milk,
              cream and filling the streets of Kyiv, giving the city a special
              color.” He wasn’t just from Ukraine, his work was shaped by it.
              Culturally, politically, and spiritually. During the 1930s,
              Malevych became one of the only Ukrainian artists to depict the
              Holodomor, Stalin’s man-made famine that killed millions. In one
              of his most haunting works, faces are replaced by the hammer and
              sickle, a cross, and a coffin. The message was clear: where there
              is Soviet rule, there is death and hunger. a littl bit more text
              here so we can show these diariesxxxx
            </p>
          </div>
          <div className="diary-img">
            <img src={diary}></img>
          </div>
          <div className="ripyn-second-text">
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

export default RipynComp;
