import React from 'react';

const TeamCard = ({data}) => {
    return (
        <div className="flex flex-col sm:flex-row">
            {data.imgUrl && <img src={`https://dl.dropboxusercontent.com/s/${data.imgUrl}`} className="rounded-lg object-fit w-auto sm:w-32 sm:h-32 md:w-44 md:h-44" style={{aspectRatio:"1/1"}}/>}
            <div className="flex flex-1 py-2 sm:p-4">
                <div className="flex flex-col justify-start">
                {data.designation && <h1 className="text-gray-500 text-sm md:text-lg tracking-tight">{data.designation}</h1>}
                <h1 className="text-black font-semibold text-base md:text-xl tracking-tight">{data.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
