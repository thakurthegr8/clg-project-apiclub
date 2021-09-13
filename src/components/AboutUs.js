import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">

  <div className="flex flex-wrap w-full mb-8">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 className="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">About Us</h1>
        <div className="h-1 w-20 bg-red-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-700">Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="flex flex-wrap">
        <div className="md:p-2 p-1 w-1/2">
          {/* Replace www.dropbox with dl.dropboxusercontent */}
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={'https://dl.dropboxusercontent.com/s/43veva8fb9yzo2n/IMG_0495.jpg?dl=0'}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/oxhx9m97ee5w0jy/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%281%29.jpeg?dl=0"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dl.dropboxusercontent.com/s/43veva8fb9yzo2n/IMG_0495.jpg?dl=0"/>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dl.dropboxusercontent.com/s/p9uc2hb8sab0meo/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%282%29.jpeg?dl=0"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/oxhx9m97ee5w0jy/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%281%29.jpeg?dl=0"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/p9uc2hb8sab0meo/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%282%29.jpeg?dl=0"/>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
