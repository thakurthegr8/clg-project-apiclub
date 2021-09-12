import React from 'react';
const tempUrl = `https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`;
const TeamCard = ({data}) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <img src={tempUrl} className="rounded-lg object-fit w-auto sm:w-32 sm:h-32" style={{aspectRatio:"1/1"}}/>
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
