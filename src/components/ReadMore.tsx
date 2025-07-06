import { useState, useEffect, useRef } from "react";
import { Microphone } from "../assets/images";

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);
  const [showReadButton, setShowReadButton] = useState(false);
  const paraRef = useRef<HTMLDivElement>(null);

  const getCollapsedHeight = () => {
    const width = window.innerWidth;
    if (width < 375) return 45; 
    if (width < 475 && width >374) return 50;
    if (width < 640 && width >474) return 60;
    return 55;
  };

  const collapsedHeight = getCollapsedHeight();

  useEffect(() => {
    if (paraRef.current) {
      setShowReadButton(paraRef.current.scrollHeight > collapsedHeight);
    }
  }, []);

  const dynamicStyle: React.CSSProperties = {
    overflow: "hidden",
    transition: "max-height 0.5s ease",
    maxHeight: expanded
      ? paraRef.current?.scrollHeight
        ? `${paraRef.current.scrollHeight}px`
        : "1000px"
      : `${collapsedHeight}px`,
  };

  return (
    <div className="flex flex-col items-center sm:mb-30 p-3 xxs:p-1 xs:p-0 mb-5 -mt-5">
      <div className="flex max-w-7xl bg-[#E9F0ED] rounded-2xl px-4 py-2 xxs:px-4 xxs:py-4 sm:py-5 sm:px-5">
        <div className="hidden xs:block mr-5">
          <img src={Microphone} className="sm:w-70" />
        </div>

        <div>
          <div ref={paraRef} style={dynamicStyle}>
            <p className="text-[10px] xxs:text-xs xs:text-sm sm:text-xl">
              <span className="font-extrabold">Skrynia</span> is the Ukrainian
              word for chest trunk. It is also the name of an underground
              dissident literary and art magazine published in Lviv in 1971. Our
              culture was under attack then and forced to exist only in the
              shadows. Decades later, we are still fighting – but we refuse to
              exist in the shadows once again. We chose the name Skrynia as a
              tribute to our cultural leaders who fought before us and as a hope
              that we can preserve our art, artifacts, and archives in safe
              chests to be protected forever. Thanks for your support.
            </p>
          </div>

          {showReadButton && (
            <button
              className="font-semibold underline underline-offset-2 cursor-pointer text-[10px] xxs:text-xs xs:text-sm sm:text-xl"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "read less" : "read more..."}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
