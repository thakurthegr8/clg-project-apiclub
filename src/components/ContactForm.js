import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {


    const [state, handleSubmit] = useForm("xbjqwyvg");
    
    return (
        <form onSubmit={handleSubmit}>

<div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">We all need people who will give us feedback. That’s how we improve.</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
      </div>
    {!state.succeeded?
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg" >Submit</button>
      :<p className="text-s text-gray-500 mt-3">Thanks for helping us grow.</p>}
      
    </div>
      </form>
    );
  }





