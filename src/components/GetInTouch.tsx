import { newhome3 } from "../assets/images";

interface GetInTouchProps {
  onClick: () => void;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ onClick }) => {
  return (
    <div className="getintouch-wrapper flex max-w-7xl min-h-[320px] bg-[#E9F0ED] rounded-2xl mb-10">
      <div className="getintouch-textwrap m-15 w-4/5">
        <h2 className="text-3xl mb-5 font-semibold">Get in Touch</h2>
        <p className="leading-tight mb-5 text-xl">
          Whether you're a student, a researcher, a cultural worker, or someone
          who shares our mission — we’d love to hear from you.
        </p>
        <button
          onClick={onClick}
          className="px-12 py-2.5 mt-2 bg-black text-white rounded-full text-m cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white"
        >
          Contact us
        </button>
      </div>
      <div className="tiltimg-newhome">
        <img className="mt-5 w-110 h-auto" src={newhome3}></img>
      </div>
    </div>
  );
};

export default GetInTouch;
