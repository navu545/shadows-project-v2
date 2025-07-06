import type { RefObject } from "react";
import Formcomp from "./FormComp";

interface formProps {
  formRef?: RefObject<HTMLDivElement | null>;
}

const Form = ({ formRef }: formProps) => {
  return (
    <div ref={formRef} className="form-wrap flex flex-col items-center mb-20">
      <div
        className="
      form-head
      bg-[#E9F0ED]
      flex flex-col md:flex-row
      max-w-6xl
      rounded-lg
      relative
      overflow-hidden
    "
      >
        <div className="flex flex-col md:flex-row w-full p-5 md:p-10">
      
          <div
            className="
          form-headline
          md:mt-10
          z-10
          p-2 md:p-4
          mb-4 md:mb-0
          text-center md:text-left
        "
          >
            <h1
              className="
            text-lg
            xxs:text-xl
            xs:text-2xl
            md:text-3xl
            lg:text-4xl
            font-normal
          "
            >
              For museums looking to request supplies, or general inquiries,
              contact us here
            </h1>
          </div>

          <div className="z-10 w-full md:w-auto">
            <Formcomp formOnNgo />
          </div>
        </div>

       
        <div className="tape-container absolute top-90 hidden md:block">
          <img
            className="tape-down scale-150 mt-5"
            src="https://ik.imagekit.io/shadows/Shadows-project/YellowTape2.png"
            alt="downward-tape"
          />
        </div>
        <div className="tape-container absolute top-90 hidden md:block">
          <img
            className="tape-up scale-150 mb-10 -rotate-2"
            src="https://ik.imagekit.io/shadows/Shadows-project/YellowTape1.png"
            alt="upward-tape"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
