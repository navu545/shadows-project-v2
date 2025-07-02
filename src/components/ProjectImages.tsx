import { useRef, useState, useEffect } from "react";
import { newhome1, newhome2 } from "../assets/images";

const ProjectImages = () => {
  const images = [newhome1, newhome2];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeftPercent, setScrollLeftPercent] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const percent = (el.scrollLeft / maxScroll) * 100;
      setScrollLeftPercent(percent);
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
          className="w-1/2 h-auto object-cover rounded"
        />
        <img
          src={newhome2}
          alt="Project 2"
          onClick={() =>
            window.open(
              "https://graffiti-chronicles.shadowsproject.org/",
              "_blank"
            )
          }
          className="w-1/2 h-auto object-cover rounded cursor-pointer"
        />
      </div>

      <div className="relative xs:hidden w-full rounded">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab pb-4"
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2 snap-center">
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-auto object-cover rounded"
                onClick={() =>
                  window.open(
                    "https://graffiti-chronicles.shadowsproject.org/",
                    "_blank"
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* Sliding progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-gray-500 rounded transition-all duration-50"
            style={{
              width: "50%",
              transform: `translateX(${scrollLeftPercent}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
