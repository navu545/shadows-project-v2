import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "About us", path: "/aboutpage" },
    { label: "Creative Studio", path: "/creativePage" },
    { label: "NGO", path: "/NGO" },
  ];

  return (
    <div className="navbar-wrapper flex flex-col items-center border-b border-gray-200 w-full">
      <div className="navbar-wrap flex flex-row justify-between items-center pb-5 mt-5 max-w-6xl w-full">
        <div className="navbar-logo mt-2">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/LogoNew.svg"
              alt="navbar-logo"
            />
          </Link>
        </div>

        <div className="links-wrpper flex items-center gap-20">
          <div className="links-pages flex gap-6 mt-2 font-semibold relative">
            {navItems.map(({ label, path }) => {
              const isActive = currentPath === path;

              return (
                <Link
                  key={path}
                  to={path}
                  className="relative px-4 py-2 rounded-full"
                >
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 bg-gray-200 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
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
