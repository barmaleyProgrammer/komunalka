import {useEffect, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import Breadcrumb from "../components/breadcrumb";
import icon_house from "../img/icon_house.svg";
import addAdressForm from "../components/assets/addAdressForm";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import icon_komunalka from "../img/icon_komunalka.svg";
import {NavLink} from "react-router-dom";
import api from "../api";


const CabinetMyAdresses = () => {
    const [myObjects, setMyObjects] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await api.getObject();
            setMyObjects(result.addresses);
        };
        fetchData();
    }, []);

    const AddresBlock = (item) => {
        console.log(item.item);
        return (
            <>
                <div className="mr-[196px] space-x-2 border rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]">
                    <div className="komunalka ml-[16px] mt-[16px] space-x-1">
                        <ul>
                            <li className="flex">
                                <img src={icon_house} className="h-8 mr-2" alt="kamunalka logo"/>
                                <p className="text-[16px]">{ item.item.name }</p>
                            </li>
                            <li className="mt-[8px]">
                                <p className="text-[14px]">вул. Софіївська, 16/16</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-[77px] px-[127px]">
                        <NavLink to={`/counters/${item.item.objectId}`} className="py-2.5 px-5 mr-2 mb-2 text-[16px] font-medium rounded-[4px] w-full text-black_figma bg-white_figma border border-yellow_figma">
                            Перейти
                        </NavLink>
                    </div>
                </div>
            </>
        );
    };


    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumb />
            </div>
            <div className=" space-y-2 rounded-lg shadow-lg  h-[564px]">
                <h3 className="text-center text-[20px] pb-6">Мої адреси</h3>
                <div className="flex space-x-[24px]">
                    <NavLink to="/addAdressForm">
                        <div className="ml-[196px] space-x-2 flex justify-center items-center border rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]">
                            <AiOutlinePlus />
                            <p className="">Додати адресу</p>
                        </div>
                    </NavLink>
                    {myObjects.map((item, key) => {
                        return <AddresBlock item={item} key={key}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CabinetMyAdresses;