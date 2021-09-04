import React from "react";
import { motion } from "framer-motion";
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill:"rgba(0,0,0,0)",
    
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    fill:"rgba(0,0,0,1)",
    
  }
}
const item ={
  width: "100%",
  overflow: "visible",
  stroke: "#000",
  strokeWidth: 2,
  strokeLinejoin: "round",
  strokeLinecap: "round",
}
export default function HeroLogo() {
  
  return (
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
      variants={icon}
      initial="hidden"
      animate="visible"
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
        variants={icon}
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
        variants={icon}
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
        variants={icon}
        initial="hidden"
      animate="visible"
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
      }}
      />
    </motion.g>
  </motion.svg>
  );
}
