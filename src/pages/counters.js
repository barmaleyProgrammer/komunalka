import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";
import api from "../api";

const Counters = () => {
    const { objectId } = useParams();
    const [counter, setCounter] = useState([]);
    const [address, setAddress] = useState({});
    const [debt, setDebt] = useState([]);
    console.log(objectId)
    // getCounterValue

    useEffect( () => {
        const fetchData = async () => {
            const result = await api.getCounterValue(objectId);
            setCounter(result);
            const result3 = await api.getDebt(objectId);
            setDebt(result3);
            await api.getAddress(objectId).then((result) => {
                const address = result.filter((item) => item.objectId == objectId);
                setAddress(address);
            });
        };
        fetchData();
    }, []);

    const CounterBlock = (item) => {
        return (
            <>
                <div className="flex gap-x-4 rounded-lg border border-borderColor w-full h-auto">
                    <div className="w-1">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                               type="checkbox"
                               value={item.item.id}
                        />
                    </div>
                    <div className="w-2/3">
                        <ul>
                            <li className="text-xs">(Лічильник №1)</li>
                            <li className="text-sm">{item.item.deviceNumber}</li>
                            <li className="text-sm">(КПВОК “КИЇВТЕПЛОЕНЕРГО”)<br/>{item.item.namePlat}</li>
                        </ul>
                    </div>
                    <div className="w-44">
                        <p>Попередні показники<br/>{item.item.currentReadings}</p>
                    </div>
                    <div className="w-44">
                        <p>Актуальні показники</p>
                        <input type="text"/>
                    </div>
                </div>
            </>
        );
    };



    return (
        <div className="font-light mt-10 p-10 py-6 mx-auto w-[1152px]">
            <h2 className="mb-4 text-[24px]">Назва адреси</h2>
            <div className="mt-[34px]">
                <p className="text-[16px]">Лічильники</p>
            </div>
            <div className="mt-[24px] h-[234px] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h3 className="py-4 text-[20px] text-center">Тип послуги</h3>
                <div className="flex space-x-[100px] text-[14px] justify-center">
                    <NavLink to="/">
                        <img src={water} className="h-[72px]" alt="Flowbite Logo" />
                        <p className="py-[9px] text-center">вода</p>
                    </NavLink>
                    <NavLink to="/">
                        <img src={gas} className="h-[72px]" alt="Flowbite Logo" />
                        <p className="py-[9px] text-center">газ</p>
                    </NavLink>
                    <NavLink to="/">
                        <img src={electric} className="h-[72px]" alt="Flowbite Logo" />
                        <p className="py-[9px] text-center">Електроенергія</p>
                    </NavLink>
                    <NavLink to="/">
                        <img src={water} className="h-[72px]" alt="Flowbite Logo" />
                        <p className="py-[9px] text-center">Тепло</p>
                    </NavLink>
                </div>
            </div>
            <div className="mt-[24px] py-4 px-[58px] h-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h3 className="py-4 text-[20px] text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black" to="">Мої лічильники</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black" to="">Історія показань</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black" to="">Графіки споживань</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black" to="">Історія фотографій</NavLink>
                        </li>
                    </ul>
                </div>
                <h5 className="py-4 text-[16px] ">Обрати всі</h5>
                <div>
                    {counter.map((item, key) => {
                        return <CounterBlock item={item} key={key}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Counters;