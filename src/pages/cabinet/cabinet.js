import { useState, useContext } from 'react';
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import Breadcrumbs from "../../components/breadcrumbs";
import Tabs from "../../components/tabs";
import icon_house from "../../img/icon_house.svg";
import api from "../../api";
import DropDownMenu from "../../components/dropDownMenu";
import Modal from '../../components/modal/modal'
import InputField from "../../components/inputField";
import Button from "../../components/button";

const Cabinet = () => {
    const [state, dispatch] = useContext(Context);
    const navigate = useNavigate();
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

    const deleteAddress = async (e, objectId) => {
        e.stopPropagation();
        await api.deleteObject(objectId);
        const newObjects = state.addresses.filter((item) => item.objectId !== objectId);
        dispatch({ type: 'setAddresses', payload: newObjects });
        api.getAddress();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentAddress((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const openModal = (e, objectId) => {
        e.stopPropagation();
        const res =  state.addresses.find((item) => item.objectId === objectId);
        setCurrentAddress(res);
        setModalActive(true);
    };

    const updateAddress = async () => {
        const {objectId, name} = currentAddress;
        await api.renameAddress(objectId, name);
        setCurrentAddress('');
        setModalActive(false);
        await api.getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data }));
    }

    const AddressBlock = (item) => {
        return (
            <div className="cursor-pointer p-4 relative border rounded-lg border-[#E7E7E7] w-80 h-48" onClick={() => navigate(`/counters/${item.item.objectId}`)}>
                <div className="absolute top-1 right-1 z-10">
                    <DropDownMenu
                        delete={(e) => deleteAddress(e, item.item.objectId)}
                        popup={(e) => openModal(e, item.item.objectId)}
                    />
                </div>
                <div className="flex">
                    <img src={icon_house} className="h-8" alt="kamunalka logo"/>
                    <p className="pl-2 pt-1">{ item.item.name }</p>
                </div>
                <div className="pt-2 text-sm">{ item.item.address }</div>
            </div>
        );
    };

    return (
        <>
            <div className="mt-2 mx-auto w-[1152px]">
                <div>
                    <Breadcrumbs items={breadCrumbs}/>
                </div>
                <div className="my-4">
                    <Tabs />
                </div>
                <div className="space-y-2 rounded-lg shadow-lg">
                    <h3 className="text-center text-xl pb-6">Мої адреси</h3>
                    <div className="flex justify-center gap-x-10 p-5">
                        {state.addresses?.map((item, key) => {
                            return <AddressBlock item={item} key={key}/>
                        })}
                        <div className="cursor-pointer flex justify-center items-center border rounded-lg border-[#E7E7E7] w-80 h-48" onClick={() => navigate("/cabinet/addAddress")}>
                            <AiOutlinePlus />
                            <div className="pl-2">Додати адресу</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <InputField
                    // label={'Перейменувати адресу'}
                    type={'text'}
                    placeholder={'Назва адреси'}
                    name={'name'}
                    required={true}
                    value={currentAddress.name}
                    autoComplete="off"
                    onChange={handleInputChange}
                />
                <div className="pt-2">
                    <Button type="button" onClick={updateAddress} label={'Оновити'} cssType={'primary'} />
                </div>
            </Modal>
        </>
    );
};

export default Cabinet;
