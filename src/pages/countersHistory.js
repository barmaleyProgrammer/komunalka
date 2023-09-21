import {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom";
import water from "../img/logo_counters/water.svg";
import gas from "../img/logo_counters/gas.svg";
import electric from "../img/logo_counters/electric.svg";
import api from "../api";
import Breadcrumbs from "../components/breadcrumbs";
// import InputField from "../components/inputField";
import Button from "../components/button";


const CountersHistory = () => {
    const { objectId } = useParams();
    const [counters, setCounters] = useState([]);
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
            "label": 'Історія показань'
        },
    ]

    useEffect( () => {
        const fetchData = async () => {
            // await api.getCounterValue(objectId).then((result) => counters.current = [...result]);
            await api.getCountersHistory(objectId).then((result) => setCounters(result));
            await api.getAddress(objectId).then((result) => {
                // const address = result.find((item) => item.objectId == objectId);
                console.log('отримано', objectId)
                setAddress(address);
            });
            // const result3 = await api.getDebt(objectId);
        };
        fetchData();
    }, []);


    // const handleInputChange = (event, index) => {
    //     // counters.current[index].currentReadings = event.target.value;
    //     setCounters((prevData) => {
    //         const clone = [...prevData];
    //         clone[index].currentReadings = event.target.value;
    //         return clone;
    //     });
    // };

    const CounterBlock = ({item, index}) => {
        return (
            <div className="flex gap-x-4 rounded-lg border border-borderColor w-full h-auto">
                <div className="w-2/3">
                    <ul>
                        <li className="text-xs">Лічильник №{item.counterNo}</li>
                        <li className="text-sm">{item.abcounter}</li>
                        <li className="text-sm">{item.nameFirme}<br/>{item.namePlat}</li>
                    </ul>
                </div>
                <div className="w-44">
                   <p>Передані показники<br/>{item.oldValue}</p>
                </div>
                <div className="w-44">
                    <p>{item.newTransmissionTime}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="font-light mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="mb-4 mt-3 text-[24px]">{address.name}</h2>
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
                <h3 className="py-4 text-[20px] text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Мої лічильники</NavLink></li>
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Історія показань</NavLink></li>
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Графіки споживань</NavLink></li>
                        <li><NavLink to="#" className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0 md:dark:text-black">Історія фотографій</NavLink></li>
                    </ul>
                </div>
                <div className="mt-4 mb-4 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to="/cabinet" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-[#FD9800] bg-[#F7F9FE]">Обрати місяць</NavLink>
                        </li>
                        <li>
                            <NavLink to="/myData" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-[#FD9800] bg-[#F7F9FE]">Обрати рік</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {counters.map((item, key) => <CounterBlock item={item} key={`CounterBlock_${item.id}`} index={key} />)}
                    {/*{counters.current?.map((item, key) => <CounterBlock item={item} key={`CounterBlock_${item.id}`} index={key} />)}*/}

                    <Button type="button" label={'Переглянути ще'} cssType={'primary'} />
                </div>
            </div>
        </div>
    );
};

export default CountersHistory;
