import {useContext, useState} from 'react';
import { NavLink } from "react-router-dom";
import InputField from "../components/inputField";
import RadioMyData from "../components/assets/radioMyData";
import {Context} from "../App";
import Breadcrumbs from "../components/breadcrumbs";
import api from "../api";
import Button from "../components/button";

const MyData = () => {
    const [state, dispatch] = useContext(Context);
    const [form, setForm] = useState(state.user);
    const [formError, setFormError] = useState('');
    const breadCrumbs = [
        {
            "to": '/cabinet',
            "label": 'Мої адреси'
        },
        {
            "to": '/myData',
            "label": 'Мої дані'
        },
        {
            "to": '',
            "label": 'Оповіщення'
        },
    ]

    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.updateUser(form);
            dispatch({ type:'setAccount', payload: form })

        } catch (e) {
            console.error(e.message);
            // setFormError(e.message);
            // setForm({
            //     email: '',
            //     password: '',
            // });
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    return (
        <div className="mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
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
            <div className="w-2/3 mx-auto p-20 font-light space-y-2 rounded-lg shadow-lg ">
                <h1 className="font-normal text-lg pb-2 py-4">Основна інформація</h1>
                <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                    <div className="grid grid-flow-row grid-cols-2 gap-4 py-4">
                        <InputField
                            label={'Прізвище'}
                            type={'text'}
                            name={'firstName'}
                            required={true}
                            value={form.firstName}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Email'}
                            type={'email'}
                            placeholder={'Введіть свій email'}
                            name={'email'}
                            required={true}
                            value={form.email}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Ім’я'}
                            type={'text'}
                            name={'lastName'}
                            required={true}
                            value={form.lastName}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Телефон'}
                            type={'phone'}
                            placeholder={'+38(0_ _) _ _ _ - _ _ _ - _ _'}
                            name={'phone'}
                            required={true}
                            value={form.phone}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'По батькові'}
                            type={'text'}
                            name={'secondName'}
                            required={true}
                            value={form.secondName}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Пароль'}
                            type={'type'}
                            name={'password'}
                            // required={true}
                            // value={form.password}
                            // onChange={handleInputChange}
                        />
                        <h1 className="font-normal text-lg pb-2 py-4">Додадково</h1>
                    </div>
                    <div className="px-2">
                        <RadioMyData />
                    </div>
                    <div className="mb-4">
                    <InputField
                        label={'Дата народження'}
                        type={'date'}
                        name={'data'}
                        // required={true}
                        // value={form.password}
                        // onChange={handleInputChange}
                    />
                    </div>
                    <Button type="submit" cssType="primary">
                        Зберігти зміни
                    </Button>
                </form>
            </div>

        </div>
    );
};

export default MyData;
