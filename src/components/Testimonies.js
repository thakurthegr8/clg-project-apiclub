

import React from 'react';
import TestimonialCard from './TestimonialCard';
import {committeeHeadData} from "../datafactory/committeeHeadData.json";

const Testimonies = () => {
    return (
        <section className="flex flex-col mx-auto container justify-center items-center py-12 px-4">
          <div className="flex flex-col md:text-center">
          <div class="lg:w w-full mb-6 lg:mb-0">
      <h1 class="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">Testimonials</h1>
        <div class="h-1 w-20 bg-yellow-400 rounded mb-8"></div>
      </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4">
             {
               committeeHeadData.map(item=><TestimonialCard data={item}/>)
             }
            </div>
          </div>
        </section>
    );
}

export default Testimonies;


