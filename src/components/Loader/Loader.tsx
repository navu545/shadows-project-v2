import { loaderLogoColor } from '../../assets/images';
import "./loader.css"

const Loader = () => {

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <img
        src={loaderLogoColor}
        alt="Animated logo"
        className="w-24 h-24 object-contain logo-pulse"
      />
    </div>
  );
}

export default Loader
