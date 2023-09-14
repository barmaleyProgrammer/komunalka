import React from 'react';
import {NavLink} from "react-router-dom";



const BreadcrumbCadinetAdresses = () => {
    return (
        <nav className=" flex text-gray-700 " aria-label="BreadcrumbCadinetAdresses">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <NavLink to="/" className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Головна
                    </NavLink>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor"  d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Часті питання</span>
                    </div>
                </li>
            </ol>
        </nav>

    );
};

export default BreadcrumbCadinetAdresses;