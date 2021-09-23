import React from 'react'
import OurMissionData from  "../datafactory/OurMissionData.json";

export default function OurMission() {
    return (
        <div>
            <section className="text-gray-600">
  <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
  <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      {/* <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">Our Mission</h1> */}
      <span   className="ml-6 bg-clip-text font-extrabold justify-center tracking-tighter text-transparent bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-3xl sm:text-5xl md:text-7xl lg:text-6xl">Our Mission</span>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{OurMissionData.description}</p>
    </div>
    <iframe className="w-full h-auto h-min-44" style={{minHeight:"500px"}} width="auto" height="auto" src="https://www.youtube.com/embed/mC-pC5zaVJk" title="YouTube video player" frameborder="0" allow="autoplay; " allowfullscreen></iframe>
    <div className="text-center lg:w-2/3 w-full">
    </div>
  </div>
</section>
        </div>
    )
}
