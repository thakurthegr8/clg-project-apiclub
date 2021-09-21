import React from 'react';

const TeamCard = ({data}) => {
    return (
        <div className="flex flex-col sm:flex-row">
            {data.imgUrl && <img src={`https://dl.dropboxusercontent.com/s/${data.imgUrl}`} className="rounded-lg object-fit w-auto sm:w-32 sm:h-32 md:w-44 md:h-44" style={{aspectRatio:"1/1"}}/>}
            <div className="flex flex-1 py-2 sm:p-4">
                <div className="flex flex-col justify-start">
                {data.designation && <h1 className="text-gray-500 text-sm md:text-lg tracking-tight">{data.designation}</h1>}
                <h1 className="text-black font-semibold text-base md:text-xl tracking-tight">{data.name}</h1>
                {/* <div className="mt-2 inline-flex sm:mt-2 sm:justify-start"> */}
                    {/* <a href={data.insUrl} rel="noopener noreferrer" target="_blank" className="text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a> */}
      <a href={data.ldnUrl} className=" text-gray-500" rel="noopener noreferrer" target="_blank">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
      {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
