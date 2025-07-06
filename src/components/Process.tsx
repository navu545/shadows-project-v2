import { howitworks1, howitworks2, howitworks3 } from "../assets/images";

const Process = () => {
  return (
    <div className="process-wrap flex flex-col items-center mb-20">
      <div className="process text-center max-w-6xl">
        <h1 className="text-2xl xxs:text-3xl xs:text-5xl font-bold mb-5 xxs:mb-7 xs:mb-12 sm:mb-15">
          How it works
        </h1>
        <div className="steps grid grid-cols-3 gap-10 text-xs xxs:text-sm xs:text-lg px-2">
          <div className="flex flex-col items-center">
            <img className="w-14 xs:w-20 mb-4" src={howitworks1} alt="Step 1" />
            <p>Fill out the form below</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-14 xs:w-20 mb-4" src={howitworks2} alt="Step 2" />
            <p>
              Indicate whether you need help or want to provide help yourself
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-14 xs:w-20 mb-4" src={howitworks3} alt="Step 3" />
            <p>Wait for an answer from our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
