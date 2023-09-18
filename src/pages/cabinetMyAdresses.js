import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import BreadcrumbCadinetAdresses from "../components/breadcrumbCadinetAdresses";
import icon_house from "../img/icon_house.svg";
// import addAdressForm from "../components/assets/addAdressForm";
// import logo_lichylnyk from "../img/logo_lichylnyk.svg";
// import icon_komunalka from "../img/icon_komunalka.svg";
import {NavLink} from "react-router-dom";
import api from "../api";
import DropDownMenu from "../components/assets/dropDownMenu";


const CabinetMyAdresses = () => {
    const navigate = useNavigate();
    const [myObjects, setMyObjects] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            // const result = await api.getObject();
            // setMyObjects(result.addresses);
            await api.getAddress().then((result) => {
                setMyObjects(result);
            });

        };
        fetchData();
    }, []);

    const deleteAddress = async (objectId) => {
        await api.deleteObject(objectId);
        const newObjects = myObjects.filter((item) => item.objectId !== objectId);
        setMyObjects(newObjects);
    };

    const AddresBlock = (item) => {
        console.log(item);
        return (
            <>
                <div className="mb-4 relative space-x-2 border rounded-lg border-[#E7E7E7] w-[360px] h-[204px]">
                    <div className="absolute right-0">
                    <DropDownMenu delete={() => deleteAddress(item.item.objectId)}/>
                    </div>
                    <div className="komunalka ml-[16px] mt-[16px] space-x-1">
                        <ul>
                            <li className="flex">
                                <img src={icon_house} className="h-8 mr-2" alt="kamunalka logo"/>
                                <p className="text-[16px]">{ item.item.name }</p>
                            </li>
                            <li>
                                <p className="text-sm">{ item.item.address }</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <NavLink to={`/counters/${item.item.objectId}`} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded-lg w-full text-black_figma bg-white_figma border border-yellow_figma">
                            Перейти
                        </NavLink>
                        {/*<button onClick={() => deleteAddress(item.item.objectId)}>Видалити</button>*/}

                    </div>
                </div>
            </>
        );
    };


    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <BreadcrumbCadinetAdresses />
            </div>
            <div className="mt-4 mb-4 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                    <li>
                        <NavLink to="/cabinet" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої адреси</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myData" className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]">Мої дані</NavLink>
                    </li>
                    <li>
                        <NavLink className="w-auto h-[48px] py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded text-black_figma bg-[#CEDDE9]" to="">Оповіщення</NavLink>
                    </li>
                </ul>
            </div>
            <div className=" space-y-2 rounded-lg shadow-lg  h-auto">
                <h3 className="text-center text-[20px] pb-6">Мої адреси</h3>
                <div className="flex justify-center gap-x-10">
                        <div className="cursor-pointer space-x-2 flex justify-center items-center border rounded-lg border-[#E7E7E7] w-[360px] h-[204px]"
                             onClick={() => navigate("/addAdressForm")}>
                            <AiOutlinePlus />
                            <p className="">Додати адресу</p>
                        </div>
                    {myObjects.map((item, key) => {
                        return <AddresBlock item={item} key={key}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CabinetMyAdresses;