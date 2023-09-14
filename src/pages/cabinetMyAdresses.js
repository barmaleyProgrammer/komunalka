import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import Breadcrumb from "../components/breadcrumb";
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
                <div className="space-x-2 border rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]">
                    <DropDownMenu />
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
                        <NavLink to={`/counters/${item.item.objectId}`} className="py-2.5 px-5 mr-2 mb-2 text-[16px] font-medium rounded-[4px] w-full text-black_figma bg-white_figma border border-yellow_figma">
                            Перейти
                        </NavLink>
                        <button onClick={() => deleteAddress(item.item.objectId)}>Видалити</button>

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
            <div className=" space-y-2 rounded-lg shadow-lg  h-auto">
                <h3 className="text-center text-[20px] pb-6">Мої адреси</h3>
                <div className="flex justify-center gap-x-10">
                        <div className="cursor-pointer space-x-2 flex justify-center items-center border rounded-[4px] border-[#E7E7E7] w-[360px] h-[204px]"
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