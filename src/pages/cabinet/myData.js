import {useContext, useState} from 'react';
import { NavLink } from "react-router-dom";
import InputField from "../../components/inputField";
import Tabs from "../../components/tabs";
import { Context } from "../../store";
import Breadcrumbs from "../../components/breadcrumbs";
import api from "../../api";
import Button from "../../components/button";
import eye from "../../img/eye.svg";
import my_data_changed from './../../img/modal_mydata_changed.png';
import Modal from "../../components/modal/modal";
import CheckPassword from "../../components/checkPassword/checkPassword";

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
        "label": 'Мої дані'
    },
];


const MyData = () => {
    const [state, dispatch] = useContext(Context);
    const [form, setForm] = useState({
        firstName: state.user.firstName,
        email: state.user.email,
        lastName: state.user.lastName,
        secondName: state.user.secondName,
        phone: state.user.phone,
    });
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [type, setTape] = useState('password');
    const [inputPassFlag, setInputPassFlag] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

    const Submit = async (event) => {
        event.preventDefault();
        try {
            const result = await api.updateUser(form);
            // console.log(result)
            dispatch({ type: 'setAccount', payload: form })

            if (result.status === 200) {
                // setValidateFlag(true);
                setModalActive(true);
            }
        } catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
    };

    const ChangePassword = async (e) => {
        e.preventDefault();
        setShowChangePasswordModal(false);
        try {
            const result = await api.changePassword(password);
            if (result.status === 200) {
                // setValidateFlag(true);
                setModalActive(true);
            }
        } catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    }


    return (
        <>
            <div className="w-[1152px] mx-auto px-20 mt-2">
                <Breadcrumbs items={breadCrumbs} />
                <div className="mt-6 mb-8">
                    <Tabs />
                </div>
                <div className="py-10 px-20 font-light space-y-2 rounded-lg shadow-myCustom">
                    <h1 className="font-normal text-lg pb-2 py-2">Основна інформація</h1>
                    <div className="text-xs text-red-900 text-center">{ formError }</div>
                    {
                        modalActive && (
                            <Modal close={() => setModalActive(false)}>
                                <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                    <img src={ my_data_changed } alt=""/>
                                    <p className="mt-8">Зміни успішно збережені</p>
                                </div>
                                <div className="pt-2 w-44 mx-auto mb-8">
                                    <Button type="button" label={'Ok'} cssType={'primary'} onClick={() => setModalActive(false)} />
                                </div>
                            </Modal>
                        )
                    }
                    {
                        showChangePasswordModal && (
                            <Modal close={() => setShowChangePasswordModal(false)}>
                                <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                    <p className="mt-8">Ви впевнені, що бажаєте змінити пароль?</p>
                                </div>
                                <div className="pt-2 w-44 mx-auto mb-8">
                                    <Button type="button" label={'Так, впевнений!'} cssType={'primary'} onClick={ChangePassword} />
                                </div>
                            </Modal>
                        )
                    }

                    <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="grid grid-flow-row grid-cols-2 gap-x-5 py-4 pr-60">
                            <InputField
                                label={'Прізвище'}
                                type={'text'}
                                name={'lastName'}
                                placeholder={'Іванов'}
                                required={true}
                                value={form.lastName}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <InputField
                                label={'Email'}
                                type={'email'}
                                placeholder={'Введіть свій email'}
                                name={'email'}
                                readOnly={true}
                                cssClass="email-field"
                                value={form.email}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <InputField
                                label={'Ім’я'}
                                type={'text'}
                                name={'firstName'}
                                placeholder={'Іван'}
                                required={true}
                                value={form.firstName}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <InputField
                                label={'Телефон'}
                                type={'phone'}
                                placeholder={'+38(0_ _) _ _ _ - _ _ - _ _'}
                                name={'phone'}
                                required={true}
                                value={form.phone}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <InputField
                                label={'По батькові'}
                                type={'text'}
                                name={'secondName'}
                                placeholder={'Іванович'}
                                required={true}
                                value={form.secondName}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <div className={'relative'}>
                                <InputField
                                    label={'Пароль'}
                                    type={type}
                                    name={'password'}
                                    required={true}
                                    value={password}
                                    onFocus={() => setInputPassFlag(true)}
                                    onBlur={() => setInputPassFlag(false)}
                                    placeholder="Змінити"
                                    autoComplete="off"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                                    <img src={eye} alt="" />
                                </div>
                                { inputPassFlag ? <CheckPassword password={password} /> : <></> }
                                <NavLink to="#" className="changePassword text-sm ml-6" onClick={() => setShowChangePasswordModal(true)}>Змінити</NavLink>

                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-80 h-12">
                                <Button type="submit" cssType="primary" label={'Зберігти зміни'} onClick={(e) => Submit(e)}/>
                            </div>
                            <NavLink to="#" className="text-base mt-2 ml-6">Видалити профіль</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyData;
