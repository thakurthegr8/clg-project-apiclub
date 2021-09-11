import React from 'react'
import OurMissionData from  "../datafactory/OurMissionData.json";

export default function OurMission() {
    return (
        <div>
            <section class="text-gray-600">
  <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
  <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 class="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">Our Mission</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">{OurMissionData.description}</p>
    </div>
    <iframe className="w-full h-auto h-min-44" style={{minHeight:"500px"}} width="auto" height="auto" src="https://www.youtube.com/embed/mC-pC5zaVJk" title="YouTube video player" frameborder="0" allow="autoplay; " allowfullscreen></iframe>
    <div class="text-center lg:w-2/3 w-full">
    </div>
  </div>
</section>
        </div>
    )
}
