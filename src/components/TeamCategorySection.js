import React from 'react';
import TeamCard from './TeamCard';

const EventTeamSection = ({heading, categoryData}) => {
    return (
        <div className="py-4 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{heading}</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3  gap-4 md:gap-8">
                {
                    categoryData.map(item=><TeamCard data={item} key={Math.random()}/>)
                }
            </div>
        </div>
    );
}

export default EventTeamSection;
