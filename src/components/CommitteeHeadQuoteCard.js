import React from "react";

export default function CommitteeHeadQuoteCard({ data }) {
    
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 border border-${data.color}-600 rounded overflow-hidden justify-center`} >
      <div
        className={`flex flex-col space-y-4 p-8 justify-center bg-${data.color}-200`}
      >
        <h1 className={`text-2xl font-semibold lg:text-5xl text-${data.color}-800`}>{data.quote}</h1>
        <h1 className="text-xl font-medium">
         - {data.name},{" "}
          <span className="uppercase bg-black text-white p-1 text-base">
            {data.designation}
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center bg-black text-white items-center">
      <img
          src={
            "https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"
          }
          className="w-max object-fill object-cover transform scale-50 rounded-full"
        />
        
        </div>
    </div>
  );
}
