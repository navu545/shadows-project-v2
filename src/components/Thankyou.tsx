import { thankYou } from "../assets/images";

interface ThankYouProp {
  thankState: () => void;
  onClose?: () => void
  inNGO?: boolean
}

const ThankYou: React.FC<ThankYouProp> = ({ thankState, onClose, inNGO }) => {
  return (
    <div className={`rounded-2xl text-center px-10 py-8 min-w-lg mx-auto shadow-xl bg-white max-w-xl ${inNGO && "min-h-[534px] pt-30"}`}>
      <img className="w-15 h-15 mx-auto mb-4" src={thankYou} alt="tick-mark" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Thank you for your request
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your interest in our project. Our team will contact you
        shortly with more details.
      </p>
      <button
        className="px-10 py-4 bg-gray-800 text-white rounded-full text-sm cursor-pointer"
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
