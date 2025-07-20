import { thankYou } from "../assets/images";
import { useEffect } from "react";

interface ThankYouProp {
  thankState: () => void;
  onClose?: () => void;
  inNGO?: boolean;
  width?: number;
  height?: number;
}

const ThankYou: React.FC<ThankYouProp> = ({ thankState, onClose, inNGO, width, height }) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        thankState();
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [thankState, onClose]);

  return (
    <div
      className={
        inNGO
          ? "rounded-2xl text-center mx-auto shadow-xl bg-white pt-30 px-5"
          : "rounded-2xl text-center min-w-xs py-5 px-3 xs:px-10 xs:py-8 xs:min-w-lg mx-auto shadow-xl bg-white max-w-xl"
      }
      style={
        inNGO
          ? {
              width: `${(width ?? 0) + 0.11 * (width ?? 0)}px`,
              height: `${(height ?? 0) + 0.11 * (height ?? 0)}px`,
            }
          : {}
      }
    >
      <img className="w-15 h-15 mx-auto mb-4" src={thankYou} alt="tick-mark" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Thank you for your request
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your interest in our project. Our team will contact you
        shortly with more details.
      </p>
      <button
        className="px-10 py-4 bg-black text-white rounded-full transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white text-sm cursor-pointer"
        onClick={() => {
          thankState();
          onClose?.();
        }}
      >
        Got it
      </button>
    </div>
  );
};

export default ThankYou;
