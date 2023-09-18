import { useState } from 'react';
import {NavLink} from "react-router-dom";

const DropDownMenu = (props) => {
    const [state, setState] = useState(false);
    return (
        <div className="relative">
            <button
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                type="button"
                onClick={() => setState(!state)}
            >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
            <div className={`absolute z-10 bg-white_figma divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${state ? '':'hidden'}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Перейменувати адресу</NavLink></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Налаштування сповішень</a></li>
                    <li><NavLink to="#" onClick={props.delete} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Видалити</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DropDownMenu;