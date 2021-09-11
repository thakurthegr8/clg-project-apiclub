import React, { Fragment } from 'react';
import { Tab } from "@headlessui/react";
import {data} from "../datafactory/teamsData.json"
const Teams = () => {
    return (
        <div className="mx-auto container min-h-screen px-4 py-4 md:py-2 md:px-0">
            <Tab.Group>
                <div>
                    <Tab.List>
                        <div className="flex space-x-2 justify-between md:justify-start md:py-2">
                            {
                                data.map(tab => <Tab as={Fragment}>{
                                    ({ selected }) =>
                                        <button className={`px-4 py-2 font-semibold text-sm border-b-2 border-transparent   ${selected ? "border-b-2 border-red-600 text-red-600 " : " text-gray-500 hover:bg-gray-100"}`}>{tab.category}</button>}</Tab>)
                            }
                        </div>
                    </Tab.List>
                </div>
                <div className="py-4">
                    <Tab.Panels>
                        {
                            data.map(item => <Tab.Panel><h1 className="text-3xl md:text-4xl font-extrabold ">{item.category}</h1></Tab.Panel>)
                        }
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    );
}

export default Teams;
