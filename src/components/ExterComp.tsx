import {
  exter,
  diary,
  resource1,
  resource2,
  resource3,
} from "../assets/images";
import { Link } from "react-router-dom";

const ExterComp = () => {
  return (
    <div className="Exter-wrap flex flex-col items-center">
      <div className="Exter max-w-7xl items-center">
        <div className="Exter-img-heading">
          <img src={exter}></img>
          <div className="Exter-heading">
            <h1>ALEXANDRA EXTER</h1>
            <p>Born in Białystok, Poland (1882 - 1949)</p>
          </div>
          <div className="Exter-text">
            <p>
              Oleksandra Exter was one of Ukraine’s most influential modernist
              artists. Yet in many Western museums, she’s mislabeled as Russian
              — or described simply as Polish-born — erasing the central role
              that Ukraine played in her life and work. Exter was born in 1882
              into a wealthy family in the Grodno Governorate of the Russian
              Empire (now Białystok, Poland). Two years after her birth, her
              parents relocated to Kyiv, where she spent her childhood. Exter
              lived in the city for over 35 years. She studied at Kyiv’s St.
              Olha Gymnasium and later at the Kyiv Art School under the renowned
              Ukrainian painter Mykola Pymonenko. Oleksandra played an important
              role in the Kyiv art scene. Her painting studio was a cornerstone
              for Kyiv’s intellectual elite, like luminaries of world decorative
              art Vadym Meller, Anatol Petrytsky, and P. Tchelitchew, artists
              Oleksander Bohomazov and Vladimir Baranoff-Rossine, theater
              director Les Kurbas, and many others. Alongside Oleksandr
              Bohomazov, she organized and took part in some of the first modern
              art exhibitions in the Russian Empire, including “Zveno,”
              “Kiltse,” and “Lanka.” In 1906, she curated one of the earliest
              exhibitions of Ukrainian folk art at the National Art Museum. Like
              many Ukrainian modernists, she found deep inspiration in folk
              traditions. Exter collaborated with peasant workshops in Verbivka,
              Skoptsi, and other villages, working hand-in-hand with local women
              artisans. She believed that avant-garde art and Ukrainian craft
              belonged together. As she once said, “In the ornament of Ukrainian
              embroidery, there is a rhythm as complex as in any cubist
              composition.” Ekster was an outstanding avant-garde artist, also
              called an “avant-garde Amazon”. She was inspired by the vibrant
              colors and rhythmic compositions of Ukrainian culture, and
              Oleksandra played a pivotal role in spreading her tradition and
              roots among her European peers, while embracing Cubism infused
              with dynamic color. After she moved to Paris in the 1920s, Exter
              befriended and collaborated with Picasso and Léger, and her Paris
              studio became a gathering place for the European avant-garde. But
              Kyiv remained the birthplace of her vision. “My color comes from
              Ukraine,” she told students at the Académie Moderne. “It was
              there, in the markets, in the embroidery, in the villages… that I
              learned to see.”
            </p>
          </div>
          <div className="diary-img">
            <img src={diary}></img>
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

export default ExterComp;
