import React from 'react'
import { motion } from 'framer-motion'

const textAnimation = {
    hidden: {
        color:"#00000000"
    },
    visible: {
        color:["#000", "#00000000","#000"]
    },
    transition:{
        ease:"easeInOut",
        duration:2000,
        repeat:Infinity
    }
}

export default function Teams() {
    return (
        <div>
            
          <div class="flex flex-wrap w-full">
      <div class="lg:w w-full mb-6 lg:mb-0">
      <div class="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
      <h1 class="text-2xl lg:text-5xl font-semibold text-gray-800 flex flex-wrap justify-center font-extrabold py-8">Our Team</h1></div>
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      </div>
    </div>
    

            <motion.h1 className="text-7xl font-extrabold" variants={textAnimation} initial="hidden" animate="visible" transition="transition">Teams Section</motion.h1>
   </div>
   )
   }
