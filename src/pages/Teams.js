import React, { Fragment } from 'react';
import { Tab } from "@headlessui/react";
import { data } from "../datafactory/teamsData.json"
import TeamCategorySection from '../components/TeamCategorySection';
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
                <Tab.Panels>
                    {
                        data.map(item => <Tab.Panel><TeamCategorySection heading={item.category} categoryData={item.categoryData} key={Math.random()}/></Tab.Panel>)
                    }
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default Teams;
