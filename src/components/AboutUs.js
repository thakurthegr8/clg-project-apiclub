import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">

  <div class="flex flex-wrap w-full mb-8">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h1 class="text-2xl lg:text-5xl font-semibold text-black flex flex-wrap justify-center font-extrabold">About Us</h1>
        <div class="h-1 w-20 bg-red-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">Look at this example of a long, rambling testimonial… “I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          {/* Replace www.dropbox with dl.dropboxusercontent */}
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={'https://dl.dropboxusercontent.com/s/43veva8fb9yzo2n/IMG_0495.jpg?dl=0'}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/oxhx9m97ee5w0jy/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%281%29.jpeg?dl=0"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dl.dropboxusercontent.com/s/43veva8fb9yzo2n/IMG_0495.jpg?dl=0"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dl.dropboxusercontent.com/s/p9uc2hb8sab0meo/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%282%29.jpeg?dl=0"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/oxhx9m97ee5w0jy/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%281%29.jpeg?dl=0"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dl.dropboxusercontent.com/s/p9uc2hb8sab0meo/WhatsApp%20Image%202021-05-29%20at%203.40.44%20PM%20%282%29.jpeg?dl=0"/>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
