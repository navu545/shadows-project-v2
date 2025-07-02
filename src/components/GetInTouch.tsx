import { newhome3 } from "../assets/images";

interface GetInTouchProps {
  onClick: () => void;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ onClick }) => {
  return (
    <div className="getintouch-wrapper relative flex sm:max-w-7xl sm:min-h-[320px] bg-[#E9F0ED] rounded-2xl mb-10 items-center overflow-hidden">
      <div className="getintouch-textwrap m-5 xs:m-10 sm:w-4/5 w-full pr-25 xs:pr-0">
        <h2 className="text-xl xs:text-2xl sm:text-3xl sm:mb-5 font-semibold mb-3">
          Get in Touch
        </h2>
        <p className="leading-tight mb-5 sm:text-xl xs:text-l">
          Whether you're a student, a researcher, a cultural worker, or someone
          who shares our mission — we’d love to hear from you.
        </p>
        <button
          onClick={onClick}
          className="px-3 py-2 text-xs bg-black text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white xxs:px-7 xxs:py-1.5 xxs:text-sm xs:text-base xs:mt-2 sm:px-8 sm:py-2.5"
        >
          Contact us
        </button>
      </div>
      <div
        className="
          tiltimg-newhome
          xs:static
          xs:ml-0
          absolute
          -right-18
          top-15
          bottom-0
          my-auto
          w-[200px]
          xs:w-auto
        "
      >
        <img className="w-full h-auto" src={newhome3} />
      </div>
    </div>
  );
};

export default GetInTouch;
