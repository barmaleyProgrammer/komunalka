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
            <button className="py-2.5 px-2 text-sm font-medium rounded w-full text-white_figma bg-yellow_figma inline-flex items-center"
                type="button"
                onClick={() => setState(!state)}
            >
                Menu/signOut
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <div className={`z-30 absolute bg-white_figma divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${state ? '':'hidden'}`} onClick={() => setState(false)}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><NavLink to="/cabinet" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Мої адреса</NavLink></li>
                    <li><NavLink to="/myData" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Мої дані</NavLink></li>
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Оповіщення</NavLink></li>
                    <li><NavLink to="#" onClick={signOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Вийти</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default Logout;
