import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { hamburger, closeHamburger } from "../assets/images";

const NavbarTwo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isMobileMenuOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full bg-[#171717] text-white border-b border-neutral-800">
      <div className="navbar-wrap flex justify-between items-center pb-3 pt-7 max-w-7xl w-full px-3 mx-auto">
        {/* Logo + Manifesto */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/LogoNew.svg"
              alt="navbar-logo"
              className="filter brightness-0 invert w-10"
            />
          </Link>

          <Link to="/campaignHome">
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box] hidden md:block">
              Project Manifesto
            </div>
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-5">
          <Link to="/bank-information">
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Support Us
            </div>
          </Link>

          <a
            href="https://www.rdnystreetwear.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent underline cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding_box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Shop Activism
            </div>
          </a>

          <Link to="/credits">
            <div className="relative z-10 px-4 py-1 rounded-full border-2 border-transparent cursor-pointer transition-all duration-300 group hover:bg-black hover:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,#2597FF,#FFF500)_border-box]">
              Project Credits
            </div>
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
        >
          <img
            src={isMobileMenuOpen ? closeHamburger : hamburger}
            alt="menu toggle"
            className="h-6 w-6 filter invert"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        layout
        initial={false}
        animate={{
          height: height,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ overflow: "hidden" }}
        className="md:hidden w-full"
      >
        <div ref={contentRef}>
          <div className="flex flex-col items-start gap-3 py-4 px-4 text-white text-lg">
            {/* Campaign Link */}
            <div className="relative w-full">
              {currentPath === "/campaignHome" && (
                <div className="absolute inset-0 bg-white/10 rounded-full" />
              )}
              <Link
                to="/campaignHome"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative z-10 w-full px-4 py-2 rounded-full hover:bg-neutral-800">
                  Project Manifesto
                </div>
              </Link>
            </div>

            {/* Support Us Link */}
            <div className="relative w-full">
              {currentPath === "/bank-information" && (
                <div className="absolute inset-0 bg-white/10 rounded-full" />
              )}
              <Link
                to="/bank-information"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative z-10 w-full px-4 py-2 rounded-full hover:bg-neutral-800">
                  Support Us
                </div>
              </Link>
            </div>

            {/* Shop Activism Link */}
            <div className="relative w-full">
              <a
                href="https://www.rdnystreetwear.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative z-10 w-full px-4 py-2 rounded-full hover:bg-neutral-800">
                  Shop Activism
                </div>
              </a>
            </div>

            {/* Project Credits Link */}
            <div className="relative w-full ">
              {currentPath === "/credits" && (
                <div className="absolute inset-0 bg-white/10 rounded-full" />
              )}
              <Link to="/credits" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative z-10 w-full px-4 py-2 rounded-full hover:bg-neutral-800">
                  Project Credits
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavbarTwo;
