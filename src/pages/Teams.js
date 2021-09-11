import React, { Fragment } from 'react';
import { Tab } from "@headlessui/react";
const newTabs = [
{
    "name":"New Events"
},
{
    "name":"Upcoming Events"
},
{
    "name":"Highlights"
}
]
const Teams = () => {
    return (
        <div className="mx-auto container max-w-2xl min-h-screen">
            <Tab.Group>
                <div className="bg-gray-50 rounded-2xl p-4 mt-8 border border-black">
                    <Tab.List>
                        <div className="flex justify-around">
                            {
                                newTabs.map(tab=><Tab as={Fragment}>{
                                    ({ selected }) =>
                                        <button className={`px-4 py-2 font-semibold text-xs md:text-sm rounded-2xl  ${selected ? "bg-red-600 text-white hover:bg-red-700" : " text-black hover:bg-gray-300"}`}>{tab.name}</button>}</Tab>)
                            }
                        </div>
                    </Tab.List>
                </div>
                <div className="py-8">
                    <Tab.Panels>
                        <Tab.Panel><h1 className="text-5xl font-extrabold ">New Events</h1></Tab.Panel>
                        <Tab.Panel><h1 className="text-5xl font-extrabold">Upcoming Events</h1></Tab.Panel>
                        <Tab.Panel><h1 className="text-5xl font-extrabold">Highlights</h1></Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    );
}

export default Teams;
