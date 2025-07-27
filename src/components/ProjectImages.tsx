import { useRef, useEffect } from "react";
import { newhome1, newhome2 } from "../assets/images";
import { useNavigate } from "react-router-dom";

const ProjectImages = () => {
  const images = [newhome1, newhome2];
  const scrollRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = scrollRef.current;
    const indicator = indicatorRef.current;
    if (!el || !indicator) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll = el.scrollWidth - el.clientWidth;
          const percent = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
          indicator.style.transform = `translateX(${percent}%)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
  
      <div className="hidden xs:flex space-x-4">
        <img
          src={newhome1}
          alt="Project 1"
          className="w-1/2 h-auto object-cover rounded cursor-pointer"
          onClick={() => navigate("/campaign")}
        />
        <img
          src={newhome2}
          alt="Project 2"
          className="w-1/2 h-auto object-cover rounded cursor-pointer"
          onClick={() =>
            window.open(
              "https://graffiti-chronicles.shadowsproject.org/",
              "_blank"
            )
          }
        />
      </div>

   
      <div className="relative xs:hidden w-full rounded">
     
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent z-10" />

      
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab pb-4 scrollbar-hide"
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2 snap-center">
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-auto object-cover rounded"
                onClick={() =>
                  i === 0
                    ? navigate("/campaign")
                    : window.open(
                        "https://graffiti-chronicles.shadowsproject.org/",
                        "_blank"
                      )
                }
              />
            </div>
          ))}
        </div>

     
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded overflow-hidden">
          <div
            ref={indicatorRef}
            className="h-full bg-gray-800 rounded transition-transform duration-50"
            style={{
              width: "50%",
              transform: "translateX(0%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
