import type { RefObject } from "react";
import Formcomp from "./FormComp";

interface formProps {
  formRef?: RefObject<HTMLDivElement | null>;
}

const Form = ({ formRef }: formProps) => {
  return (
    <div ref={formRef} className="form-wrap flex flex-col items-center mb-20">
      <div className="form-head bg-[#E9F0ED] flex-col max-w-6xl rounded-lg relative overflow-hidden">
        <div className="flex p-10">
          <div className="form-headline z-10 p-4 mt-10">
            <h1 className="text-4xl font-normal">
              For museums looking to request supplies, or general inquiries,
              contact us here
            </h1>
          </div>
          <div className="z-10">
            <Formcomp />
          </div>
        </div>

        <div className="tape-container absolute top-90">
          <img
            className="tape-down scale-150 mt-5"
            src="https://ik.imagekit.io/shadows/Shadows-project/YellowTape2.png"
            alt="downward-tape"
          ></img>
        </div>

        <div className="tape-container absolute top-90">
          <img
            className="tape-up scale-150 mb-10 -rotate-2"
            src="https://ik.imagekit.io/shadows/Shadows-project/YellowTape1.png"
            alt="upward-tape"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Form;
