import React from 'react';
import { NavLink } from "react-router-dom";


const Breadcrumbs = ({items}) => {
    console.log(items);

    const itemLink = (item) => {
        return (
            <NavLink to={item.to} className="inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                {item.label}
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor"  d="m1 9 4-4-4-4"/>
                </svg>
            </NavLink>
        );
    }


    return (
        <nav className=" flex text-gray-700 " aria-label="BreadcrumbCadinetAdresses">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => {
                    return (
                        <li className="inline-flex items-center text-xs" key={index}>
                            {item.to ? itemLink(item) : item.label}
                    </li>)
                })}
            </ol>
        </nav>

    );
};

export default Breadcrumbs;