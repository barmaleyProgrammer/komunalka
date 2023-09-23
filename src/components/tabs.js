import { NavLink } from "react-router-dom";
const Tabs = () => {
    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li><NavLink to="/cabinet" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої адреси</NavLink></li>
            <li><NavLink to="/cabinet/myData" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої дані</NavLink></li>
            <li><NavLink  to="#" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Оповіщення</NavLink></li>
        </ul>
    );
};

export default Tabs;
