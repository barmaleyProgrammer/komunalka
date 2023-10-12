import { useContext } from "react";
import { Context } from "../store";
import { NavLink } from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";
import warm from "../img/logo_counters/warm.svg";

const serviceIcons = {
    1: warm,
    2: electric,
    3: gas,
    4: water
};

const ServiceTypes = ({types = [1,4], selectedServiceType = null, setServiceType = undefined}) => {
    const [state] = useContext(Context);

    const Filerd = ({types, selectedServiceType, setServiceType}) => {
        if (!types.length) {
            return (<></>);
        }
        // const x = [];
        // for (let i = 0; i < state?.serviceTypes?.length; i++) {
        //     if (types.includes(state.serviceTypes[i].id)) {
        //         x.push(state.serviceTypes[i]);
        //     }
        // }

        const x = state?.serviceTypes?.filter((serviceType) => types.includes(serviceType.id));

        return x.map((serviceType, key) => {
            return (
                <NavLink
                    to="#"
                    key={key}
                    className={`flex flex-col items-center w-[72px] ${selectedServiceType === serviceType.id ? 'active2':''}`}
                    onClick={() => {
                        if (selectedServiceType === serviceType.id) {
                            setServiceType(null);
                        } else {
                            setServiceType(serviceType.id);
                        }
                    }}>
                    <img src={serviceIcons[serviceType.id]} className="h-[72px] w-[72px]" alt={serviceType.name} />
                    <p className="pt-4 text-xs text-center">{serviceType.name}</p>
                </NavLink>
            );
        })
    }


    return (
        <div className="p-5 rounded-lg shadow-myCustom h-56">
            <h3 className="py-4 text-lg text-center">Тип послуги</h3>
            <div className="flex space-x-32 text-sm justify-center">
                <Filerd types={types} selectedServiceType={selectedServiceType} setServiceType={setServiceType}/>
            </div>
        </div>
    );
};

export default ServiceTypes;
