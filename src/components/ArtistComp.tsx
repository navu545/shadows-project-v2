import { artist1,artist2,artist3,artist4,artist5 } from "../assets/images"
import { Link } from "react-router-dom";

const ArtistComp = () => {
  return (
    <div className="artist-wrap flex flex-col items-center">
      <div className="artists max-w-7xl items-center">
        <div className="artists-heading">
          <h1>MEET OUR UKRAINIAN ARTISTS</h1>
        </div>
        <div className="artists-imgs flex gap-10">
          <div>
            <Link to="/kazymyr">
              <img src={artist1} alt="Artist 1" />
            </Link>
          </div>
          <div>
            <Link to="/davyd">
              <img src={artist2} alt="Artist 2" />
            </Link>
          </div>
          <div>
            <Link to="/ripyn">
              <img src={artist3} alt="Artist 3" />
            </Link>
          </div>
          <div>
            <Link to="/exter">
              <img src={artist4} alt="Artist 4" />
            </Link>
          </div>
          <div>
            <Link to="/mariia">
              <img src={artist5} alt="Artist 5" />
            </Link>
          </div>
        </div>
        <div>
          <Link to="/campaignHome">
            <button className="rounded-full border-2 border-black flex items-center justify-center cursor-pointer italic text-3xl w-60 h-60">
              HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArtistComp
