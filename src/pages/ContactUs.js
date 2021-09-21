import React from 'react'
import ContactForm from '../components/ContactForm'

export default function 
() {
    return (
        <div className="min-h-screen">

            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.3324702342543!2d78.07292901445263!3d30.398307708725298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d70603f128a5%3A0x359bb8f9c7797984!2sDIT%20University!5e0!3m2!1sen!2sin!4v1631534928099!5m2!1sen!2sin" styles="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">DIT University, Makkawala, Dehradun, Uttarakhand-248009. </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">apiclubditu@gmail.com</a>
        </div>
      </div>
    </div><ContactForm/>
  </div>
  
</section>

        </div>
    )
}
