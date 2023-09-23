import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Breadcrumbs from "../../components/breadcrumbs";
import Tabs from "../../components/tabs";
import icon_house from "../../img/icon_house.svg";
import { NavLink } from "react-router-dom";
import api from "../../api";
import DropDownMenu from "../../components/dropDownMenu";
import Modal from '../../components/modal/modal'
import InputField from "../../components/inputField";
import Button from "../../components/button";

const Cabinet = () => {
    const navigate = useNavigate();
    const [myObjects, setMyObjects] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [currentAddress, setCurrentAddress] = useState('');
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
            "to": '',
            "label": 'Мої адреси'
        },
    ]

    useEffect( () => {
        const fetchData = () => {
            api.getAddress().then((result) => setMyObjects(result));
        };
        fetchData();
    }, []);

    const deleteAddress = async (objectId) => {
        await api.deleteObject(objectId);
        const newObjects = myObjects.filter((item) => item.objectId !== objectId);
        setMyObjects(newObjects);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentAddress((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const openModal = (objectId) => {
        const res =  myObjects.find((item) => item.objectId === objectId);
        setCurrentAddress(res);
        setModalActive(true);
    };

    const updateAddress = async () => {
        const {objectId, name} = currentAddress;
        await api.renameAddress(objectId, name);
        setCurrentAddress('');
        setModalActive(false);
        await api.getAddress().then((result) => setMyObjects(result));
    }

    const AddresBlock = (item) => {
        return (
            <>
                <div className="mb-4 relative space-x-2 border rounded-lg border-[#E7E7E7] w-[360px] h-[204px]">
                    <div className="absolute right-0">
                    <DropDownMenu
                        delete={() => deleteAddress(item.item.objectId)}
                        popup={() => openModal(item.item.objectId)}
                    />
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
                    </div>
                </div>
            </>
        );
    };


    return (
        <>
            <div className="mt-2 mx-auto w-[1152px]">
                <div>
                    <Breadcrumbs items={breadCrumbs}/>
                </div>
                <div className="mt-4 mb-4 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <Tabs />
                </div>
                <div className=" space-y-2 rounded-lg shadow-lg  h-auto">
                    <h3 className="text-center text-[20px] pb-6">Мої адреси</h3>
                    <div className="flex justify-center gap-x-10">
                            <div className="cursor-pointer space-x-2 flex justify-center items-center border rounded-lg border-[#E7E7E7] w-[360px] h-[204px]"
                                 onClick={() => navigate("/cabinet/addAddress")}>
                                <AiOutlinePlus />
                                <p className="">Додати адресу</p>
                            </div>
                        {myObjects.map((item, key) => {
                            return <AddresBlock item={item} key={key}/>
                        })}
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <InputField
                    label={'Перейменувати адресу'}
                    type={'text'}
                    placeholder={'Назва адреси'}
                    name={'name'}
                    required={true}
                    value={currentAddress.name}
                    onChange={handleInputChange}
                />
                <Button type="button" onClick={updateAddress} label={'Оновити'} cssType={'primary'} />
            </Modal>
        </>
    );
};

export default Cabinet;
