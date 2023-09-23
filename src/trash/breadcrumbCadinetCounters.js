import React from 'react';
import {NavLink} from "react-router-dom";



const BreadcrumbCadinetAdresses = () => {
    return (
        <nav className=" flex text-gray-700 " aria-label="BreadcrumbCadinetAdresses">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600">
                        {/*<svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">*/}
                        {/*    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>*/}
                        {/*</svg>*/}
                        Головна
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor"  d="m1 9 4-4-4-4"/>
                        </svg>
                        <a href="/cabinet" className="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2">Особистий кабінет</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor"  d="m1 9 4-4-4-4"/>
                        </svg>
                        <NavLink to="/cabinet" className="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2">Мої адреси</NavLink>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor"  d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="ml-1 text-xs font-medium text-gray-500 md:ml-2">Лічильники</span>
                    </div>
                </li>
            </ol>
        </nav>

    );
};

export default BreadcrumbCadinetAdresses;
