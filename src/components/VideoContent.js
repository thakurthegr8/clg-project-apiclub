import React from 'react';

const VideoContent = () => {
    return (
        <section className="flex flex-col mx-auto container justify-center items-center py-10 px-4 space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4  md:p-12 rounded-md md:border border-black" >
                <div className="space-y-4 flex flex-col justify-center p-4 items-center md:items-start ">
                    {/* <h1 className=" text-2xl lg:text-5xl font-semibold text-black font-extrabold">
                        Our Mission
                    </h1> */}
                    <span   className="ml-6 bg-clip-text font-extrabold justify-center tracking-tighter text-transparent bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-4xl sm:text-6xl md:text-7xl lg:text-7xl">Our Mission</span>
                    <p className="text-base md:text-lg tracking-tight text-gray-700 text-left md:text-left">
                        API in our club stands for activities programming and internships. The API club is a club at DIT UNIVERSITY. As the name itself suggests, it helps us polish our skills in these fields. Thus, providing a platform towards growth where a combination of hard work and balance helps us to become leaders for tomorrow.
                    </p>
                    {/* <button className="max-w-xs text-white font-semibold px-4 py-2 bg-red-600 rounded ">Watch More Videos</button> */}
                </div>
                <video muted autoPlay playsInline loop preload="auto" className="rounded-xl shadow-md w-full max-w-2xl" src="https://dl.dropboxusercontent.com/s/y8vf74vwguupinw/API%20video.mp4?dl=0" controls  ></video>
                {/* <iframe style={{ aspectRatio: "16/9" }} className="rounded-xl shadow-md w-full max-w-2xl" src="https://dl.dropboxusercontent.com/s/y8vf74vwguupinw/API%20video.mp4?dl=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             */}
        </div>
        </section>
    );
}

export default VideoContent;
