import React from "react";
import { committeeHeadData } from "../datafactory/committeeHeadData.json";
import CommitteeHeadQuoteCard from "./CommitteeHeadQuoteCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.css'
export default function CommitteeHeadQuotes() {
  return (
    <section>
      <div className="flex flex-col mx-auto container md:py-10 px-4  justify-center items-center">
        <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">
          Message From Our Executive Members.
        </h1>
        <p className="text-gray-700 text-base md:text-lg font-medium mt-4 mb-8">
             Here is the message from our beloved mentor to upcoming mentee.
            </p>
            <div className="flex flex-col gap-8 my-4">
        {committeeHeadData.map((data) => (
          <CommitteeHeadQuoteCard data={data} key={data.name}/>
        ))}
        </div>
      </div>
    </section>
  );
}
