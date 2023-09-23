import { NavLink } from "react-router-dom";
const Tabs2 = ({ objectId }) => {
    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li><NavLink to={`/counters/${objectId}`} className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0">Мої лічильники</NavLink></li>
            <li><NavLink to={`/counters/${objectId}/history`} className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0">Історія показань</NavLink></li>
            <li><NavLink to={`/counters/${objectId}/graphsTables`} className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0">Графіки споживань</NavLink></li>
            <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0">Історія фотографій</NavLink></li>
        </ul>
    );
};

export default Tabs2;
