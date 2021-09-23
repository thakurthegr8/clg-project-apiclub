import React from 'react'
import QuoteCard from './QuoteCard'
import {quoteData} from "../datafactory/quoteData.json";


export default function Quote() {
    return (
        <section className="flex flex-col mx-auto container justify-center items-center  px-4">
          <div className="flex flex-col md:text-center">
            <h1 className="bg-clip-text text-center text-2xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 flex flex-wrap justify-center font-extrabold">
              Be seen, be heard and make your impact.
            </h1>
            <p className="text-gray-700 mt-2 text-base md:text-lg">
              Here we thrive, inspire, give and connect, in dedication of our
              members'
              <br className="hidden md:block" /> individual and collective
              success.
            </p>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-8">
              {quoteData.map((quote) => (
                <QuoteCard quote={quote} key={Math.random()}/>
              ))}
            </div>
          </div>
        </section>

    )
}
