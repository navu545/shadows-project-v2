
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar-wrapper flex flex-col items-center border-b border-gray-200 w-full">
      <div className="navbar-wrap flex flex-row justify-between items-center pb-5 mt-5 max-w-6xl w-full">
        <div className="navbar-logo mt-2">
          <Link to="/newHome">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/LogoNew.svg"
              alt="navbar-logo"
            ></img>
          </Link>
        </div>

        <div className="links-wrpper flex items-center gap-20">
          <div className="links-pages flex gap-10 mt-2 font-semibold">
            <Link to="/aboutpage">
              <p>About us</p>
            </Link>

            <Link to="/creativePage">
              <p>Creative Studio</p>
            </Link>

            <Link to="/">
              <p>NGO</p>
            </Link>
          </div>

          <div className="navbar-btn-wrap flex gap-5">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSftFAJCrFFyp4fIbNhBBEJEiXKCyY9Fp36bLcSyhXWCmN0A1Q/viewform?usp=dialog"
                )
              }
              className="px-8 py-2 mt-2 bg-black text-white rounded-full text-sm cursor-pointer"
            >
              Join Us
            </button>

            <Link to="/bank-information">
              <button className="px-8 py-2 mt-2 bg-black text-white rounded-full text-sm cursor-pointer">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;

