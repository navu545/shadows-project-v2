import { loaderLogoColor } from "../../assets/images";
import "./loader.css";

const LoaderBlack = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <img
        src={loaderLogoColor}
        alt="Animated logo"
        className="w-24 h-24 object-contain logo-pulse-white"
      />
    </div>
  );
};

export default LoaderBlack;
