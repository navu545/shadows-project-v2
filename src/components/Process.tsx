import { howitworks1, howitworks2, howitworks3 } from "../assets/images";

const Process = () => {
  return (
    <div className="process-wrap flex flex-col items-center mb-20">
      <div className="process text-center max-w-6xl">
        <h1 className="text-5xl font-bold mb-10">How it works</h1>
        <div className="steps grid grid-cols-3 gap-10 text-lg place-items-center">
          <div className="flex flex-col items-center">
            <img className="w-20 mb-2" src={howitworks1}></img>
            <p>Fill out the form below</p>
          </div>
          <div className="flex flex-col items-center mt-7">
            <img className="w-20 mb-5" src={howitworks2}></img>
            <p>
              Indicate whether you need help or want to provide help yourself
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20 mb-5" src={howitworks3}></img>
            <p>Wait for an answer from our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
