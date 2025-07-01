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
    <div className="footer-wrapper flex items-center justify-center bg-black text-white">
      <div className="footer-links flex items-center gap-10 py-8">
        <div className="hidden md:flex items-center gap-10">
          <Link to="/aboutpage" onClick={(e) => scrollToTop(e, "/aboutpage")}>
            <p>About Us</p>
          </Link>
          <Link
            to="/creativePage"
            onClick={(e) => scrollToTop(e, "/creativePage")}
          >
            <p>Creative Projects</p>
          </Link>
          <Link to="/NGO" onClick={(e) => scrollToTop(e, "/NGO")}>
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
            to="/bank-information"
            onClick={(e) => scrollToTop(e, "/bank-information")}
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
