import { useState } from "react";
import { newhome1, newhome2, recentProjectRight } from "../assets/images";

const ProjectImages = () => {
  const images = [newhome1, newhome2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="hidden sm:flex space-x-4">
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

      <div className="relative sm:hidden overflow-hidden w-full rounded">
        {currentIndex === 0 && (
          <button
            onClick={goRight}
            className="absolute right-5 top-1/2 -translate-y-1/2 p-2 bg-[#D9D9D9] rounded-full z-10 hover:bg-gray-300"
          >
            <img src={recentProjectRight} alt="Next" className="w-8 h-8" />
          </button>
        )}
        {currentIndex === 1 && (
          <button
            onClick={goLeft}
            className="absolute left-5 top-1/2 -translate-y-1/2 p-2 bg-[#D9D9D9] rounded-full z-10 hover:bg-gray-300"
          >
            <img
              src={recentProjectRight}
              alt="Previous"
              className="w-8 h-8 transform -scale-x-100"
            />
          </button>
        )}

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2">
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
      </div>
    </div>
  );
};

export default ProjectImages;
