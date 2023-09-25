import { useContext } from "react";
import { Context } from "../App";
import { NavLink } from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";
import warm from "../img/logo_counters/warm.svg";


const ServiceTypes = ({types = []}) => {
    const [state] = useContext(Context);
    const serviceIcons = {
        1: warm,
        2: electric,
        3: gas,
        4: water
    };

    return (
        <div className="p-5 rounded-lg shadow-lg">
            <h3 className="py-4 text-lg text-center">Тип послуги</h3>
            <div className="flex space-x-32 text-sm justify-center">
                {state?.serviceTypes?.filter((item) => types.includes(item.id)).map((item, key) => {
                    return (
                        <NavLink to="#" key={key} className="flex flex-col w-36 items-center">
                            <img src={serviceIcons[item.id]} className="h-20" alt={item.name} />
                            <p className="pt-4">{item.name}</p>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default ServiceTypes;
