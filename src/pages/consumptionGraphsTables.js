import {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";
import api from "../api";
import Breadcrumbs from "../components/breadcrumbs";
import  'react-calendar/dist/Calendar.css' ;

const ConsumptionGraphsTables = () => {
    const { objectId } = useParams();
    const [counters, setCounters] = useState([]);
    // console.log('лічильники', counters);
    // const counters = useRef(undefined);
    const [address, setAddress] = useState({});

    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '/cabinet',
            "label": 'Особистий кабінет'
        },
        {
            "to": '/cabinet',
            "label": 'Мої адреси'
        },
        {
            "to": `/counters/${objectId}`,
            "label": 'Лічильники'
        },
        {
            "to": '',
            "label": 'Графіки споживань'
        },
    ]

    useEffect( () => {

        const fetchData = async () => {
            const payload = {
                // objectId: "870036",
                dateStart: '2020-01-01',
                dateEnd: '2023-08-01'
            };
            await api.getCountersHistory(objectId, payload).then((result) => setCounters(result));
        };
        fetchData();
    }, []);

    // const openModal1 = (objectId) => {
    //     setModalActive(true);
    // };
    // const openModal2 = (objectId) => {
    //     setModalActive(true);
    // };
    // const handleInputChange = (event, index) => {
    //     // counters.current[index].currentReadings = event.target.value;
    //     setCounters((prevData) => {
    //         const clone = [...prevData];
    //         clone[index].currentReadings = event.target.value;
    //         return clone;
    //     });
    // };







    return (
        <div className="font-light mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <div className="mt-[34px]">
                <p className="text-[16px]">Лічильники</p>
            </div>
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
            <div className="mt-[24px] py-4 px-[58px] h-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h3 className="py-4 text-sm text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li><NavLink to={`/counters/${objectId}`} className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Мої лічильники</NavLink></li>
                        <li><NavLink to={`/countersHistory/${objectId}`} className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Історія показань</NavLink></li>
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Графіки споживань</NavLink></li>
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Історія фотографій</NavLink></li>
                    </ul>
                </div>
                <div className="text-sm py-4 space-y-2">
                    <p>Підприємство: xxxx</p>
                    <p>Послуга: xxxx</p>
                    <p>Номер лічильників: xxxx</p>
                </div>
                <div className="border-collapse border rounded-xl py-10 px-10 border-[#E7E7E7]">
                    <h4 className="text-lg font-normal mt-0 mb-4">Таблиця споживання</h4>
                    <table className="w-1/2 border-collapse border-black_figma">
                        <thead>
                        <tr>
                            <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">Період</td>
                            <td className="border-[#E7E7E7] font-normal border-b text-sm p-2">13573101</td>
                        </tr>
                        </thead>
                        {counters.map((item, index) =>
                        <tbody key={index}>
                        <tr>
                            <td className="border-[#E7E7E7] font-normal border-r p-2">Червень 2023</td>
                            <td className="border-[#E7E7E7] font-normal text-sm p-2">127</td>
                        </tr>
                        </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ConsumptionGraphsTables;
