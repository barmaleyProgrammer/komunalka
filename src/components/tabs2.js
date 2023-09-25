import { NavLink } from "react-router-dom";
const Tabs2 = ({ objectId }) => {
    return (
        <ul className="flex flex-row p-0 mt-0 font-medium space-x-8 border-0">
            <li><NavLink to={`/counters/${objectId}`} className="text-sm p-0">Мої лічильники</NavLink></li>
            <li><NavLink to={`/counters/${objectId}/history`} className="text-sm p-0">Історія показань</NavLink></li>
            <li><NavLink to={`/counters/${objectId}/graphsTables`} className="text-sm p-0">Графіки споживань</NavLink></li>
            <li><NavLink to="#" className="text-sm p-0">Історія фотографій</NavLink></li>
        </ul>
    );
};

export default Tabs2;
