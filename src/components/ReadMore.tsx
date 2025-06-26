import { useState, useEffect, useRef } from "react";
import { Microphone } from "../assets/images";

const ReadMore = () => {
  const [expanded, setExpanded] = useState(false);
  const [showReadButton, setShowReadButton] = useState(false);
  const paraRef = useRef<HTMLDivElement>(null);

  const collapsedHeight = 55;
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
    <div className="flex flex-col items-center mb-30">
      <div className="flex max-w-7xl bg-[#E9F0ED] rounded-2xl py-5 px-5">
        <div className="mr-5">
          <img src={Microphone} className="w-70" />
        </div>

        <div>
          <div ref={paraRef} style={dynamicStyle}>
            <p className="text-xl">
              <span className="font-extrabold text-xl">Skrynia</span> is the Ukrainian word
              for chest trunk. It is also the name of an underground dissident
              literary and art magazine published in Lviv in 1971. Our culture
              was under attack then and forced to exist only in the shadows.
              Decades later, we are still fighting – but we refuse to exist in
              the shadows once again. We chose the name Skrynia as a tribute to
              our cultural leaders who fought before us and as a hope that we
              can preserve our art, artifacts, and archives in safe chests to be
              protected forever. Thanks for your support.
            </p>
          </div>

          {showReadButton && (
            <button
              className="font-semibold underline underline-offset-2 cursor-pointer text-xl"
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
