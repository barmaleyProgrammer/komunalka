import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import api from "./../../api";

const Logout = () => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const signOut = (event) => {
        event.preventDefault();
        api.signOut();
        navigate('/');
    };

    return (
        <div className="relative">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={() => setState(!state)}
            >
                signOut
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div className={`z-30 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${state ? '':'hidden'}`} onClick={() => setState(false)}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink></li>
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink></li>
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink></li>
                    <li><NavLink to="#" onClick={signOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Logout;