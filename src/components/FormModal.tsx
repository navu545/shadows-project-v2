import ReactDOM from "react-dom";
import Formcomp from "./FormComp";

interface FormModalProps {
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ onClose }) => {
  // Render directly into body to avoid transform issues
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="flex flex-col max-w-2xl w-full items-center">
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <Formcomp onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FormModal;
