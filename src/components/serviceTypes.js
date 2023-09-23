import { NavLink } from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";

const ServiceTypes = () => {
    return (
        <div className="mt-[24px] h-[234px] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <h3 className="py-4 text-[20px] text-center">Тип послуги</h3>
            <div className="flex space-x-[100px] text-[14px] justify-center">
                <NavLink to="#">
                    <img src={water} className="h-[72px]" alt="Flowbite Logo" />
                    <p className="py-[9px] text-center">вода</p>
                </NavLink>
                <NavLink to="#">
                    <img src={gas} className="h-[72px]" alt="Flowbite Logo" />
                    <p className="py-[9px] text-center">газ</p>
                </NavLink>
                <NavLink to="#">
                    <img src={electric} className="h-[72px]" alt="Flowbite Logo" />
                    <p className="py-[9px] text-center">Електроенергія</p>
                </NavLink>
                <NavLink to="#">
                    <img src={water} className="h-[72px]" alt="Flowbite Logo" />
                    <p className="py-[9px] text-center">Тепло</p>
                </NavLink>
            </div>
        </div>
    );
};

export default ServiceTypes;
