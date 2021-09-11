import React from 'react';

const TestimonialCard = ({data}) => {
    return (
<<<<<<< HEAD
        <div className="flex flex-col border bg-red-500 shadow-md  border-red-600 rounded">
            {/* <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"/> */}
            <div className="flex flex-col flex-wrap justify-start items-start p-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#fff" className="text-center md:text-left w-full"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
            <p className="text-left tracking-tight  text-white leading-normal mt-2">
=======
        <div className="flex flex-row text-center items-center border  shadow-md rounded">

{/* <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center"> */}

            <img className=" ml-4 mt-2 mb-2 sm:w-28 sm:h-28 h-16 w-16 sm: rounded-full border-2  flex-shrink-0" src={`https://dl.dropboxusercontent.com/${data.url}`}/>
            <div className="flex flex-col flex-wrap justify-start items-start px-6 pb-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#fff" className="text-center md:text-left w-full"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg> */}
            <p className="text-left tracking-tight  text-black leading-normal mt-2">
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
                {data.quote}
            </p>
            <span className="text-base font-semibold text-left text-white bg-red-600 rounded p-1">
               - {data.name}
            </span>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default TestimonialCard;
=======
export default TestimonialCard;
>>>>>>> 878a62477d642d9422093ddfa61cd2b04f90c00c
