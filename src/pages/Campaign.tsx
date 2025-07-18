import {
  campaign1,
  campaign2,
  campaign3,
  campaign4,
  campaign5,
  campaign6,
} from "../assets/images";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const tiltProps = {
  whileHover: { rotate: [0, -5, 5, -5, 0] },
  transition: { duration: 0.4 },
};

const Campaign = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-[#171717]"
      style={{ zoom: 1.12 }}
    >
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
          <h1
            className="
              text-2xl
              xxs:text-3xl
              font-light
              italic
              mb-4
            "
          >
            OUR CULTURE HAS BEEN
            <br />
            <span className="not-italic font-normal">STOLEN</span> FOR{" "}
            <span className="not-italic font-normal">TOO LONG.</span>
          </h1>
          <h1
            className="
              text-2xl
              xxs:text-3xl
              font-light
              italic
            "
          >
            WE'RE HERE TO{" "}
            <span className="not-italic font-normal">TAKE IT BACK.</span>
          </h1>
        </div>

        <div className="hidden sm:block">
          <h1
            className="
              text-xl
              xs:text-2xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              xl:text-5xl
              mb-8
              italic
              font-light
            "
          >
            OUR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="not-italic font-normal">CULTURE</span>
            &nbsp;&nbsp;&nbsp;&nbsp; HAS&nbsp;&nbsp;&nbsp;&nbsp; BEEN
            <br />
            <span className="not-italic font-normal">STOLEN</span> FOR{" "}
            <span className="not-italic font-normal">TOO LONG.</span>
          </h1>
          <h1
            className="
              text-xl
              xs:text-2xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              xl:text-5xl
              font-light
              italic
            "
          >
            WE'RE HERE TO{" "}
            <span className="not-italic font-normal">TAKE IT BACK.</span>
          </h1>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden w-full h-full">
        <motion.img
          src={campaign1}
          alt=""
          {...tiltProps}
          className="absolute -top-[6%] -left-[7%] w-[31vw] sm:w-[26vw] z-10 cursor-pointer"
        />
        <motion.img
          src={campaign2}
          alt=""
          {...tiltProps}
          className="absolute top-[30%] -left-[8%] w-[27vw] sm:w-[24vw] z-9 cursor-pointer"
        />
        <motion.img
          src={campaign3}
          alt=""
          {...tiltProps}
          className="absolute top-[62%] left-[0%] w-[30vw] sm:w-[26vw] cursor-pointer"
        />

        <motion.img
          src={campaign4}
          alt=""
          {...tiltProps}
          className="absolute -top-[3%] right-[1%] w-[25vw] z-10 cursor-pointer"
        />
        <motion.img
          src={campaign5}
          alt=""
          {...tiltProps}
          className="absolute top-[30%] -right-[3%] w-[24vw] cursor-pointer"
        />
        <motion.img
          src={campaign6}
          alt=""
          {...tiltProps}
          className="absolute top-[70%] right-[5%] w-[24vw] cursor-pointer"
        />
      </div>

      <div className="hidden lg:block">
        <motion.img
          src={campaign1}
          alt=""
          {...tiltProps}
          className="absolute -top-[5vw] left-[2vw] w-[22vw] z-10 cursor-pointer"
        />
        <motion.img
          src={campaign2}
          alt=""
          {...tiltProps}
          className="absolute top-[10vw] -left-[5vw] w-[17vw] z-9 cursor-pointer"
        />
        <motion.img
          src={campaign3}
          alt=""
          {...tiltProps}
          className="absolute top-[22vw] left-[6vw] w-[19vw] cursor-pointer"
        />
        <motion.img
          src={campaign4}
          alt=""
          {...tiltProps}
          className="absolute -top-[3vw] right-[4vw] w-[18vw] cursor-pointer"
        />
        <motion.img
          src={campaign5}
          alt=""
          {...tiltProps}
          className="absolute top-[7vw] -right-[6vw] w-[15vw] cursor-pointer"
        />
        <motion.img
          src={campaign6}
          alt=""
          {...tiltProps}
          className="absolute -bottom-[5vw] right-[24vw] w-[18vw] cursor-pointer"
        />
      </div>

      <Link to="/campaignHome">
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
    </div>
  );
};

export default Campaign;
