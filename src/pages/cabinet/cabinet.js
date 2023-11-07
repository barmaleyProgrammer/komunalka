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
import AddAddress from './addAddress';

const Cabinet = () => {
    const [state, dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [formError, setFormError] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalAddAddressActive, setModalAddAddressActive] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
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
        try {
            const result = await api.deleteObject(objectId);
            const newObjects = state.addresses.filter((item) => item.objectId !== objectId);
            dispatch({ type: 'setAddresses', payload: newObjects });
            api.getAddress();
            if (result.status === 200) {
                // setModalActive(true);
            }
            setModalConfirmDelete(false);
        }
        catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
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
    const showConfirmDelete = (e, objectId) => {
        e.stopPropagation();
        const res =  state.addresses.find((item) => item.objectId === objectId);
        setCurrentAddress(res);
        setModalConfirmDelete(true);
    };
    const openModalAddAddresses = (e) => {
        e.stopPropagation();
        setModalAddAddressActive(true);
    };

    const updateAddress = async () => {
        const {objectId, name} = currentAddress;
        await api.renameAddress(objectId, name);
        setCurrentAddress('');
        setModalActive(false);
        await api.getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data }));
    }



    const AddressBlock = ({ item }) => {
        return (
            <div className="cursor-pointer p-4 relative border rounded-lg border-[#E7E7E7] w-[368px]" onClick={() => navigate(`/counters/${item.objectId}`)}>
                <div className="absolute top-1 right-1 z-10">
                    <DropDownMenu
                        rename={(e) => openModal(e, item.objectId)}
                        delete={(e) => showConfirmDelete(e, item.objectId)}
                    />
                </div>
                <div className="flex">
                    <img src={icon_house} className="h-8" alt="kamunalka logo"/>
                    <p className="font-medium pl-2 pt-1">{ item.name }</p>
                </div>
                <div className="pt-2 text-sm mb-4">{ item.address }</div>
                <div className="text-xs space-y-1">
                    <p>Загальна площа xx м2</p>
                    <p>Опалювальна площа xx м2</p>
                    <p>Проживаючих x</p>
                    <p>Кількість лічильників x</p>
                </div>
                <div className="text-base font-medium w-40 h-10 mx-auto mt-4">
                    <Button type="submit" cssType="secondary" label={'Перейти'} />
                </div>
            </div>
        );
    };

    return (
        <>
                <div>
                    <Breadcrumbs items={breadCrumbs}/>
                </div>
                <div className="mt-6 mb-8">
                    <Tabs />
                </div>
                <div className="rounded-lg shadow-myCustom py-8">
                    <h3 className="text-center text-xl">Мої адреси</h3>
                    <div className="w-[820px] mx-auto flex justify-start flex-wrap gap-10 p-5">
                        {
                            state.addresses?.map((item, key) => {
                                return <AddressBlock item={item} key={key}/>
                            })
                        }
                        {
                            (state.addresses.length < 4)
                            ?
                            <div className="cursor-pointer flex justify-center items-center border rounded border-[#E7E7E7] w-[368px] h-48" onClick={(e) => openModalAddAddresses(e)}>
                                <AiOutlinePlus />
                                <div className="pl-2">Додати адресу</div>
                            </div>
                            : ''
                        }

                    </div>
                </div>
                {
                modalActive && (
                    <Modal close={() => setModalActive(false)}>
                        <div className="p-2">
                            <InputField
                                // label={'Перейменувати адресу'}
                                type={'text'}
                                placeholder={'Назва адреси'}
                                name={'name'}
                                required={true}
                                maxLength={'10'}
                                value={currentAddress.name}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="pt-2 w-32 mx-auto mb-2">
                            <Button type="button" onClick={updateAddress} label={'Оновити'} cssType={'primary'} />
                        </div>
                    </Modal>
                )
            }

            {
                modalConfirmDelete && (
                    <Modal close={() => setModalConfirmDelete(false)}>
                        <div className="p-10 w-[464px] text-base">
                            <p className="mt-4 mb-6 text-center font-medium">Видалення об’єкту</p>
                            <p className="text-left px-8 font-light">Ви дійсно бажаєте видалити адресу</p>
                            <p className="text-left px-8 font-medium">“Назва адреси” {currentAddress.name}?</p>
                        </div>
                        <div className="flex justify-center mb-6 gap-x-4">
                            <div className="w-[154px] h-12 text-center py-2 font-medium">
                                <Button type="button" label={'Так'} cssType={''} onClick={(e) => deleteAddress(e, currentAddress.objectId)} />
                            </div>
                            <div className="w-[154px] h-[48px]">
                                <Button type="button" label={'Ні'} cssType={'primary'} onClick={() => setModalConfirmDelete(false)} />
                            </div>
                        </div>
                    </Modal>
                )
            }

            {
                modalAddAddressActive && (
                    <Modal close={() => setModalAddAddressActive(false)}>
                        <AddAddress close={() => setModalAddAddressActive(false)} />
                    </Modal>
                )
            }

        </>
    );
};

export default Cabinet;
