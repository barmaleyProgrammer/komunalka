import React from 'react';
import BreadcrumbCadinetMyData from "../components/breadcrumbCadinetMyData";
import {NavLink} from "react-router-dom";

const MyData = () => {
    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <BreadcrumbCadinetMyData />
            </div>
            <div className="mt-4 mb-4 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <NavLink to="/cabinet" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої адреси</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myData" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої дані</NavLink>
                    </li>
                    <li>
                        <NavLink className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]" to="">Оповіщення</NavLink>
                    </li>
                </ul>
            </div>
            <div className=" space-y-2 rounded-lg shadow-lg  h-auto">
                <h3 className="text-sm pb-2 py-4">Основна інформація</h3>

            </div>
        </div>
    );
};

export default MyData;