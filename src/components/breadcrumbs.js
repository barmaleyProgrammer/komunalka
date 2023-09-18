import React from 'react';
import { NavLink } from "react-router-dom";


const Breadcrumbs = ({items}) => {
    console.log(items);

    const itemLink = (item) => {
        return (
            <NavLink to={item.to} className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                {item.label}
            </NavLink>
        );
    }


    return (
        <nav className=" flex text-gray-700 " aria-label="BreadcrumbCadinetAdresses">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => {
                    return (
                        <li className="inline-flex items-center" key={index}>
                            {item.to ? itemLink(item) : item.label}
                    </li>)
                })}
            </ol>
        </nav>

    );
};

export default Breadcrumbs;