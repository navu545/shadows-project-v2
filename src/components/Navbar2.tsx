import { Link } from "react-router-dom";

const NavbarTwo = () => {
  return (
    <div className="w-full border-b border-gray-800 bg-black">
      <div className="navbar-wrap flex flex-row justify-between items-center pb-5 pt-5 max-w-6xl w-full px-3 mx-auto">
        <div className="navbar-logo mt-2 flex items-center gap-6">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/LogoNew.svg"
              alt="navbar-logo"
              className="filter brightness-0 invert"
            />
          </Link>

          <Link to="/credits">
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent text-white cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Project Credits
            </div>
          </Link>
        </div>

        <div className="flex gap-5">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSftFAJCrFFyp4fIbNhBBEJEiXKCyY9Fp36bLcSyhXWCmN0A1Q/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent text-white cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Support Us
            </div>
          </a>

          <a
            href="https://www.rdnystreetwear.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent text-white underline cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Shop Activism
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
