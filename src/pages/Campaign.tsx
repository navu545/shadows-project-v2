import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tiltProps = {
  whileHover: { rotate: [0, -5, 5, -5, 0] },
  transition: { duration: 0.4 },
};

const Campaign = () => {
  const [useSimpleLayout, setUseSimpleLayout] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPhone = width <= 768;
      const landscape = width > height;

      setUseSimpleLayout(isPhone || height > width);
      setIsLandscape(isPhone && landscape);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (useSimpleLayout && isLandscape) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [useSimpleLayout, isLandscape]);

  return (
    <div
      className={`relative w-full bg-[#171717] ${
        useSimpleLayout
          ? "min-h-screen overflow-auto"
          : "h-screen overflow-hidden"
      }`}
      style={{ zoom: 1.12 }}
    >
      {useSimpleLayout ? (
        <div
          className={`flex flex-col justify-center items-center text-white px-6 text-center py-10 ${
            isLandscape
              ? "min-h-screen overflow-auto"
              : "h-full overflow-hidden"
          }`}
        >
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3].map((num, idx) => (
              <motion.img
                key={num}
                src={`https://ik.imagekit.io/shadows/Shadows-project/campaign${num}.png`}
                alt=""
                className="w-[28vw] xxs:w-[24vw]"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              />
            ))}
          </div>

          <h1 className="text-2xl xxs:text-3xl font-light italic mb-4">
            OUR CULTURE HAS BEEN
            <br />
            <span className="not-italic font-normal">STOLEN</span> FOR{" "}
            <span className="not-italic font-normal">TOO LONG.</span>
          </h1>
          <h1 className="text-2xl xxs:text-3xl font-light italic mb-8">
            WE'RE HERE TO{" "}
            <span className="not-italic font-normal">TAKE IT BACK.</span>
          </h1>

          <Link to="/manifesto">
            <button
              className="w-32 aspect-square rounded-full border-2 border-white text-white italic text-xl flex items-center justify-center hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
focus:text-white active:bg-[linear-gradient(to_right,#2597FF,#FFF500)] active:text-white mb-6"
            >
              ENTER
            </button>
          </Link>

          <div className="flex justify-center gap-4">
            {[4, 5, 6].map((num, idx) => {
              const customClass =
                num === 4
                  ? "scale-85 -rotate-7"
                  : num === 5
                  ? "scale-90 rotate-4"
                  : "";

              return (
                <motion.img
                  key={num}
                  src={`https://ik.imagekit.io/shadows/Shadows-project/campaign${num}.png`}
                  alt=""
                  className={`w-[28vw] xxs:w-[24vw] ${customClass}`}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div
            className="
              absolute
              top-[30%]
              xl:top-[37%]
              w-full
              px-5
              sm:px-0
              sm:w-auto
              sm:left-1/2
              sm:transform
              sm:-translate-x-1/2
              text-center
              text-white
              sm:text-start
            "
          >
            <div className="block sm:hidden">
              <h1 className="text-2xl xxs:text-3xl font-light italic mb-4">
                OUR CULTURE HAS BEEN
                <br />
                <span className="not-italic font-normal">STOLEN</span> FOR{" "}
                <span className="not-italic font-normal">TOO LONG.</span>
              </h1>
              <h1 className="text-2xl xxs:text-3xl font-light italic">
                WE'RE HERE TO{" "}
                <span className="not-italic font-normal">TAKE IT BACK.</span>
              </h1>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 italic font-light">
                OUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="not-italic font-normal">CULTURE</span>
                &nbsp;&nbsp;&nbsp;&nbsp; HAS&nbsp;&nbsp;&nbsp;&nbsp; BEEN
                <br />
                <span className="not-italic font-normal">STOLEN</span> FOR{" "}
                <span className="not-italic font-normal">TOO LONG.</span>
              </h1>
              <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic">
                WE'RE HERE TO{" "}
                <span className="not-italic font-normal">TAKE IT BACK.</span>
              </h1>
            </div>
          </div>

          <div className="hidden sm:block lg:hidden w-full h-full">
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign1.png"
              alt=""
              {...tiltProps}
              className="absolute -top-[6%] -left-[7%] w-[31vw] sm:w-[26vw] z-10 cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign2.png"
              alt=""
              {...tiltProps}
              className="absolute top-[30%] -left-[8%] w-[27vw] sm:w-[24vw] z-9 cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign3.png"
              alt=""
              {...tiltProps}
              className="absolute top-[62%] left-[0%] w-[30vw] sm:w-[26vw] cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaignHome5.png"
              alt=""
              {...tiltProps}
              className="absolute -top-[3%] right-[1%] w-[25vw] z-10 cursor-pointer scale-85 -rotate-7"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaignHome6.png"
              alt=""
              {...tiltProps}
              className="absolute top-[30%] -right-[3%] w-[24vw] cursor-pointer scale-90 rotate-4"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign6.png"
              alt=""
              {...tiltProps}
              className="absolute top-[70%] right-[5%] w-[24vw] cursor-pointer"
            />
          </div>

          <div className="hidden lg:block">
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign1.png"
              alt=""
              {...tiltProps}
              className="absolute -top-[5vw] left-[2vw] w-[22vw] z-10 cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign2.png"
              alt=""
              {...tiltProps}
              className="absolute top-[10vw] -left-[5vw] w-[17vw] z-9 cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign3.png"
              alt=""
              {...tiltProps}
              className="absolute top-[22vw] left-[6vw] w-[19vw] cursor-pointer"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaignHome5.png"
              alt=""
              {...tiltProps}
              className="absolute -top-[4vw] right-[4vw] w-[18vw] cursor-pointer scale-85 -rotate-7"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaignHome6.png"
              alt=""
              {...tiltProps}
              className="absolute top-[7vw] -right-[6vw] w-[15vw] cursor-pointer scale-90 rotate-4"
            />
            <motion.img
              src="https://ik.imagekit.io/shadows/Shadows-project/campaign6.png"
              alt=""
              {...tiltProps}
              className="absolute -bottom-[5vw] right-[24vw] w-[18vw] cursor-pointer"
            />
          </div>

          <Link to="/manifesto">
            <button
              className="
                absolute
                
                left-1/2
                top-[65%]
                xs:top-[62%]
                sm:top-[65%]
                md:top-[70%]
                lg:top-[60%]
                transform
                -translate-x-1/2
                hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
                hover:text-white
                focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white
                w-30
                xs:w-36
                aspect-square
                rounded-full
                border-2
                border-white
                text-white
                flex
                items-center
                justify-center
                italic
                text-lg
                xs:w-28
                xs:text-xl
                sm:w-32
                md:w-36
                md:text-2xl
                lg:left-[79vw]
                lg:-translate-x-0
                lg:w-[15vw]
                cursor-pointer
                
              "
            >
              ENTER
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Campaign;
