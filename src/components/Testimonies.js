import React from 'react';
import TestimonialCard from './TestimonialCard';
import {quoteData} from "../datafactory/quoteData.json";

const Testimonies = () => {
    return (
        <section className="flex flex-col mx-auto container justify-center items-center py-10 px-4">
          <div className="flex flex-col md:text-center">
            <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">
              Testimonials
            </h1>
            <p className="text-gray-700 mt-2 text-base md:text-lg">
              Some words from our club members
            </p>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-8">
             {
               quoteData.map(item=><TestimonialCard/>)
             }
            </div>
          </div>
        </section>
    );
}

export default Testimonies;
