import {
  kazymyr,
  diary,
  resource1,
  resource2,
  resource3,
  kazymyrArrow
} from "../assets/images";
import { Link } from "react-router-dom";

const KazymyrComp = () => {
  return (
    <div className="kazymyr-wrap flex flex-col items-center">
      <div className="kazymyr max-w-7xl items-center">
        <div className="kazy-img-heading">
          <img src={kazymyr}></img>
          <div className="kazymyr-heading">
            <div>
              <h1>KAZYMYR MALEVYCH</h1>
              <p>Born in Kyiv, Ukraine (1879 - 1973)</p>
            </div>
            <div>
              <img src={kazymyrArrow}></img>
            </div>
          </div>
          <div className="kazymyr-text">
            <h1>Kazimir Malevych is a Ukrainian artist.</h1>
            <p>
              Malevych was born in 1879 in Kyiv to a Polish-Ukrainian family and
              spent the first 17 years of his life in Ukraine. His father worked
              at sugar-beet factories which are usually built out in the sticks,
              far from any city which meant the family lived in small, rural
              villages. Malevych spoke and wrote in Ukrainian, and described his
              artistic awakening in the villages of Kharkiv, where he lived from
              ages 12 to 15, watching peasants paint ovens with birds, flowers,
              and animals using homemade clay. “The village was engaged in art…
              I watched their work with great excitement,” he wrote in his
              diaries. ”It was against this background that my feeling for art
              developed,” wrote Malevych as he described his admiration for the
              Ukrainian peasants’ colorful traditional attire and their customs.
              Apart from the Ukrainian peasants’ ways of life. Malevych deeply
              loved the Ukrainian landscape which also served as inspiration for
              his art, and was often reflected in his diaries:
            </p>
          </div>
          <div className="diary-img">
            <img src={diary}></img>
          </div>
          <div className="kazymyr-second-text">
            <p>
              Later, he taught not only in Leningrad but also at the Kyiv Art
              Institute — a hub of Ukrainian modernism often referred to as the
              “Ukrainian Bauhaus.” And even when he left Ukraine - Ukraine did
              not leave him. In his diaries and letters, he longed for his
              hometown, remembering Kyiv’s unique brick buildings, the Dnipro
              River, and its street life filled with farmers and colors. “[My
              closest friend and I] would discuss other matters when we ate, or
              reminisce about Ukraine. He and I were both Ukrainians,” wrote
              Malevych in ?. Malevych always referred to himself as Ukrainian.
              It is reflected throughout his life and work, and was often
              mentioned in his diary: “… I feel more and more like returning to
              Kyiv. Original and unique Kyiv is vivid in my memories. Buildings
              from colored bricks, mountainous terrain, the Dnipro river,
              boats…City life influenced me. Farmers crossing the Dnipro
              bringing butter, milk, cream and filling the streets of Kyiv,
              giving the city a special color.” He wasn’t just from Ukraine, his
              work was shaped by it. Culturally, politically, and spiritually.
              During the 1930s, Malevych became one of the only Ukrainian
              artists to depict the Holodomor, Stalin’s man-made famine that
              killed millions in his “peasant” series. In one of his most
              haunting works, faces are replaced by the hammer and sickle, a
              cross, and a coffin. The message was clear: where there is Soviet
              rule, there is death and hunger.
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

export default KazymyrComp;
