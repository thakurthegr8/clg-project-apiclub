import React, { Component } from "react";
// import Gridlayout from "./Gridlayout";
import heroImg from "../assets/images/hero-bg.svg";
import { motion } from "framer-motion";
import Logo from "./Logo";
import hero from "../assets/images/hero-main.svg";
import HeroLogo from "./HeroLogo";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="mt-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto container p-4 mb-8 gap-8">
            <div className="flex flex-col justify-start text-left mt-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className=" justify-center md:justify-start font-semibold text-black flex flex-wrap flex-col font-extrabold"
              >
                <motion.span  animate={{color:["#00000000","#000","#000"]}} transition={{ type: "easeIntOut", duration: 3, repeat: Infinity }} className=" bg-clip-text tracking-tighter text-transparent bg-gradient-to-r from-red-500 to-pink-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Activities</motion.span>
                <motion.span animate={{color:["#000","#00000000","#000"]}} transition={{ type: "easeIntOut", duration: 3,  repeat: Infinity }} className=" bg-clip-text tracking-tighter text-transparent bg-gradient-to-r from-blue-500 to-green-400 py-2 -my-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Programming</motion.span>
                <motion.span   animate={{color:["#000","#000","#00000000"]}} transition={{ type: "easeIntOut", duration: 3, repeat: Infinity }} className="bg-clip-text tracking-tighter text-transparent bg-gradient-to-r from-yellow-500 to-red-400 mt-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Internships</motion.span>
              </motion.h1>
              {/* <motion.h1 initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5 , delay:0.5}}} className="text-5xl leading-none tracking-tighter md:text-2xl lg:text-8xl font-semibold text-black font-extrabold"> */}
              {/* Find your<br className="inline-block md:hidden"/> place at
               API Club */}
              {/* <strong className="p-2 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Activities</strong> Programming Internships
            </motion.h1> */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1.1 },
                }}
                className="mt-4 text-lg text-gray-600 font-medium"
              >
                Join API club at DIT University and experience a breakthrough.
                <br />
                We believe in helping others and that's it.
              </motion.p>
              <div className="mt-4">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1.3 },
                  }}
                  className="bg-red-500 flex-shrink-0 text-white w-full sm:w-auto text-black  text-sm md:text-base rounded-md py-3 px-4 hover:bg-red-500 font-semibold transform"
                >
                  Explore Now
                </motion.button>
              </div>
            </div>
            <div>
            <HeroLogo/>
            </div>
            {/* <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5 , delay:1.5}}} >
            <Gridlayout />
            </motion.div> */}
            {/* <motion.div initial={{scale:10}} animate={{scale:1}}><HeroLogo /></motion.div> */}
            {/* <iframe src='https://my.spline.design/apilogo-4e565065ab92e2d7b3158403e504e31e/' frameborder='0' width='100%' height='100%'></iframe> */}
          </div>
        </header>
      </div>
    );
  }
}
