import React from 'react'
import ConnectIcon from './ConnectIcon';
import GiveIcon from './GiveIcon';
import InspireIcon from './InspireIcon';
import ThriveIcon from './ThriveIcon'

export default function QuoteCard(props) {
    const{heading,quote,color} = props.quote;
    return (
        <div className={`border border-${color}-500 flex flex-col rounded overflow-hidden transform hover:rotate-1 transition cursor-pointer max-w-xs`}>
        <div className={`bg-${color}-100 flex justify-center w-full items-center`}>
         {heading==="Thrive"&&<ThriveIcon color={color}/>}
         {heading==="Inspire"&&<InspireIcon color={color}/>}
         {heading==="Give"&&<GiveIcon color={color}/>}
         {heading==="Connect"&&<ConnectIcon color={color}/>}
        </div>
        <div className="flex flex-col p-4 text-left space-y-2">
            <div>
            <span className={`bg-${color}-600 uppercase p-1 text-base font-medium text-white`}>{heading}</span>
            </div>
            <p className="text-gray-800 font-medium">
            {quote}
            </p>
        </div>
      </div>
    )
}
