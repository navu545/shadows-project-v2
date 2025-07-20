import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { hamburger, closeHamburger } from "../assets/images";
import { shadowsLogoPng } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "About us", path: "/about" },
    { label: "Creative Studio", path: "/creative" },
    { label: "NGO", path: "/ngo" },
  ];

  useEffect(() => {
    if (contentRef.current) {
      if (isMobileMenuOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full border-b border-gray-200">
      <div className="navbar-wrap flex flex-row justify-between items-center pb-5 mt-5 max-w-6xl w-full px-3 mx-auto">
        <div className="navbar-logo mt-2 w-10">
          <Link to="/">
            <img
              src={shadowsLogoPng}
              alt="navbar-logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-20">
          <div className="links-pages flex gap-6 mt-2 relative">
            {navItems.map(({ label, path }) => {
              const isActive = currentPath === path;

              return (
                <Link key={path} to={path} className="group relative">
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full [background-image:linear-gradient(to_right,#2597FF,#FFF500)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <div
                    className={`relative z-10 px-4 py-1 rounded-full border-2 transition-all duration-300
                    ${
                      isActive
                        ? "border-transparent text-white bg-transparent"
                        : `text-black border-transparent 
                          group-hover:[background-image:linear-gradient(white,white),linear-gradient(to_right,#2597FF,#FFF500)] 
                          group-hover:[background-origin:border-box] 
                          group-hover:[background-clip:padding-box,border-box] 
                          group-hover:text-black`
                    }`}
                  >
                    {label}
                  </div>
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
              className="px-8 py-2 mt-2 bg-black text-white rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white"
            >
              Join Us
            </button>

            <Link to="/donate">
              <button className="px-8 py-2 mt-2 bg-black text-white rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white">
                Donate
              </button>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          <img
            src={isMobileMenuOpen ? closeHamburger : hamburger}
            alt="menu toggle"
            className="h-6 w-6"
          />
        </button>
      </div>

      <motion.div
        layout
        initial={false}
        animate={{
          height: height,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ overflow: "hidden" }}
        className="w-full md:hidden mt-2"
      >
        <div ref={contentRef}>
          <div className="flex flex-col items-start gap-2 py-4 px-4 text-xl">
            {[{ label: "Home", path: "/" }, ...navItems].map(
              ({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative w-full"
                >
                  {currentPath === path && (
                    <div className="absolute inset-0 w-auto px-4 py-1 rounded-full bg-gray-200" />
                  )}
                  <div
                    className={`relative z-10 px-4 py-1 rounded-full transition-colors duration-300 w-full ${
                      currentPath === path
                        ? "text-black"
                        : "text-black hover:underline"
                    }`}
                  >
                    {label}
                  </div>
                </Link>
              )
            )}

            <div className="flex gap-4 px-4 mt-2 w-full">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSftFAJCrFFyp4fIbNhBBEJEiXKCyY9Fp36bLcSyhXWCmN0A1Q/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full px-6 py-2 bg-black text-white rounded-full text-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700">
                  Join Us
                </button>
              </Link>
              <Link to="/donate" className="w-full">
                <button className="w-full px-6 py-2 bg-black text-white rounded-full text-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
