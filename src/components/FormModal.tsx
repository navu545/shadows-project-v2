import Formcomp from "./FormComp";
import { crossPNG } from "../assets/images";

interface FormModalProps {
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="flex flex-col max-w-2xl w-full items-center">
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <Formcomp />
          <img
            src={crossPNG}
            onClick={onClose}
            className="absolute scale-15 bottom-102 left-95 cursor-pointer"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
