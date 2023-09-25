import { NavLink } from "react-router-dom";
const Tabs = () => {
    return (
        <ul className="flex flex-row p-0 m-0 font-medium rounded-lg bg-gray-50 space-x-8 border-0">
            <li><NavLink to="/cabinet" className="py-2.5 px-5 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої адреси</NavLink></li>
            <li><NavLink to="/cabinet/myData" className="py-2.5 px-5 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої дані</NavLink></li>
            <li><NavLink  to="#" className="py-2.5 px-5 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Оповіщення</NavLink></li>
        </ul>
    );
};

export default Tabs;
