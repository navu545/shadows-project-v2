import { useRef, useEffect, useState } from "react";

type Resource = {
  src: string;
  link: string;
  alt: string;
};

type MoreResourcesProps = {
  resource: Resource[];
};

const MoreResources = ({ resource }: MoreResourcesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollBigRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const bigIndicatorRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   const showScrollLarge =  windowWidth < 1280 || resource.length > 3;

  // Scroll indicator logic
  useEffect(() => {
    const el = scrollRef.current;
    const bigEl = scrollBigRef.current;
    const indicator = indicatorRef.current;
    const bigIndicator = bigIndicatorRef.current;

    let ticking = false;
    let bigTicking = false;

    const cleanups: (() => void)[] = [];

    if (el && indicator) {
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            const percent =
              maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
            indicator.style.transform = `translateX(${percent}%)`;
            ticking = false;
          });
          ticking = true;
        }
      };
      el.addEventListener("scroll", handleScroll);
      cleanups.push(() => el.removeEventListener("scroll", handleScroll));
    }

    if (bigEl && bigIndicator) {
      const bigHandleScroll = () => {
        if (!bigTicking) {
          window.requestAnimationFrame(() => {
            const maxScroll = bigEl.scrollWidth - bigEl.clientWidth;
            const percent =
              maxScroll > 0 ? (bigEl.scrollLeft / maxScroll) * 100 : 0;
            bigIndicator.style.transform = `translateX(${percent}%)`;
            bigTicking = false;
          });
          bigTicking = true;
        }
      };
      bigEl.addEventListener("scroll", bigHandleScroll);
      cleanups.push(() => bigEl.removeEventListener("scroll", bigHandleScroll));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [resource.length]); // optional dependency if number of items can change

  

  return (
    <div className="flex flex-col items-center sm:mb-20 w-full">
      {/* Large screens */}
      <div className="hidden xs:flex relative w-full mt-10 mb-10">
        <div
          className={`${
            showScrollLarge
              ? "pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white/90 to-transparent z-10"
              : ""
          }`}
        />
        <div
          className={`${
            showScrollLarge
              ? "pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent z-10"
              : ""
          }`}
        />

        <div
          ref={scrollBigRef}
          className={`flex gap-8 ${
            showScrollLarge
              ? "overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab scrollbar-hide"
              : ""
          }`}
        >
          {resource.map((res, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 ${
                showScrollLarge
                  ? "w-1/3 max-w-[400px] snap-center"
                  : "w-auto max-w-[400px] snap-center"
              } `}
            >
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg p-[10px] shadow"
              >
                <img
                  src={res.src}
                  alt={res.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </a>
            </div>
          ))}
        </div>

        {showScrollLarge && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded overflow-hidden">
            <div
              ref={bigIndicatorRef}
              className="h-full bg-gray-800 rounded transition-transform duration-50"
              style={{
                width: `50%`, // 3 images visible
                transform: "translateX(0%)",
              }}
            />
          </div>
        )}
      </div>

      {/* Small screens */}
      <div className="xs:hidden relative w-full rounded mt-10 mb-10">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white/90 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/90 to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab pb-4 scrollbar-hide"
        >
          {resource.map((res, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-2 snap-center">
              <img
                src={res.src}
                alt={res.alt}
                className="w-full h-auto object-cover rounded"
                onClick={() => window.open(res.link, "_blank")}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded overflow-hidden">
          <div
            ref={indicatorRef}
            className="h-full bg-gray-800 rounded transition-transform duration-50"
            style={{ width: "50%", transform: "translateX(0%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MoreResources;
