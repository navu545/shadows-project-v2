import { Link, useLocation } from "react-router-dom";
import { footerInsta, footerLink } from "../assets/images";

const Footer = () => {
  const location = useLocation();

  const scrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetPath: string
  ) => {
    if (location.pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="footer-wrapper flex items-center justify-center bg-black text-white mt-auto">
      <div className="footer-links flex items-center gap-10 py-8">
        <div className="hidden md:flex items-center gap-10">
          <Link to="/about" onClick={(e) => scrollToTop(e, "/about")}>
            <p>About Us</p>
          </Link>
          <Link
            to="/creative"
            onClick={(e) => scrollToTop(e, "/creative")}
          >
            <p>Creative Projects</p>
          </Link>
          <Link to="/ngo" onClick={(e) => scrollToTop(e, "/ngo")}>
            <p>Aid Program</p>
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSftFAJCrFFyp4fIbNhBBEJEiXKCyY9Fp36bLcSyhXWCmN0A1Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Join Us</p>
          </a>
          <Link
            to="/donate"
            onClick={(e) => scrollToTop(e, "/donate")}
          >
            <p>Donate</p>
          </Link>
        </div>

        <div className="flex md:hidden gap-6">
          <img
            src={footerInsta}
            className="cursor-pointer h-10 w-10"
            onClick={() =>
              window.open(
                "https://www.instagram.com/shadows.project/",
                "_blank"
              )
            }
          />
          <img
            src={footerLink}
            className="cursor-pointer h-10 w-10"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/the-shadows-project/",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
