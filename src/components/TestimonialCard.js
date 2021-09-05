import React from 'react';

const TestimonialCard = ({data}) => {
    return (
        <div className="flex flex-col border bg-red-500 shadow-md  border-red-600 rounded">
            {/* <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"/> */}
            <div className="flex flex-col flex-wrap justify-start items-start p-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#fff" className="text-center md:text-left w-full"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
            <p className="text-left tracking-tight  text-white leading-normal mt-2">
                {data.quote}
            </p>
            <span className="text-base font-semibold text-left text-white bg-red-600 rounded p-1">
               - {data.name}
            </span>
            </div>
        </div>
    );
}

export default TestimonialCard;
