import React from "react";
import { motion } from "framer-motion";
const icon1 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",

  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgb(255 ,238 ,0)",

  }
}
const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",

  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgb(255,3,3)",

  }
}
const icon3 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",

  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgb(255,3,3)",

  }
}
const icon4 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0,0,0,0)",

  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill: "rgb(255,3,3)",

  }
}
const item = {
  width: "100%",
  overflow: "visible",
  stroke: "#ff0303",
  strokeWidth: 2,
  strokeLinejoin: "round",
  strokeLinecap: "round",
}

const item2 = {
  width: "100%",
  overflow: "visible",
  stroke: "#ffee00",
  strokeWidth: 2,
  strokeLinejoin: "round",
  strokeLinecap: "round",
}

export default function HeroLogo() {

  return (
    <div className="flex flex-col">
    <div className="text-xs sm:text-lg md:text-base lg:text-3xl  text-black font-black text-center uppercase italic overflow-hidden logoHeading" ><span className="leading-tight tracking-tight" style={{color:"#ff0303"}}>Leaders </span><span className="leading-tight tracking-tight" style={{color:"#ffee00"}}>for Tomorrow</span></div>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className=" transition-transform " style={item}
      viewBox="0 0 253.009 204.173"
    >
      <motion.g
        id="Group_1"
        data-name="Group 1"
        transform="translate(-559.782 -303.509)"
      >
        <motion.path
          variants={icon1}
          initial="hidden"
          animate="visible"
          style={item2}
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
          id="Path_1"
          data-name="Path 1"
          d="M3199.782,246.509h27.172l113.72,182.32-14.219,21.853Z"
          transform="translate(-2640 57)"

        />
        <motion.path
          id="Path_2"
          data-name="Path 2"
          d="M3236.834,246.509l160.981.23-73.572,119.282-15.774-24.87,45.017-71.5-103.37-.23Z"
          transform="translate(-2640 57)"
          variants={icon2}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          id="Path_3"
          data-name="Path 3"
          d="M3402.275,281.763h28.832l-79.53,128.207-14.191-23.8Z"
          transform="translate(-2640 57)"
          variants={icon3}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
        <motion.path
          id="Path_4"
          data-name="Path 4"
          d="M3423.753,246.509l-16.914,27.1h29.786l16.165-27.1Z"
          transform="translate(-2640 57)"
          variants={icon4}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
      </motion.g>
    </motion.svg>

    </div>
  );
}



