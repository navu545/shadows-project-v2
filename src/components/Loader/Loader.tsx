import { loaderLogoColor } from '../../assets/images';
import "./loader.css"

const Loader = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img
        src={loaderLogoColor}
        alt="Animated logo"
        className="w-24 h-24 object-contain logo-pulse"
      />
    </div>
  );
}

export default Loader
