import { useContext, useState } from 'react';
import InputField from "../../components/inputField";
import Tabs from "../../components/tabs";
import { Context } from "../../store";
import Breadcrumbs from "../../components/breadcrumbs";
import api from "../../api";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import eye from "../../img/eye.svg";

const MyData = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);
    const [form, setForm] = useState({
        firstName: state.user.firstName,
        email: state.user.email,
        lastName: state.user.lastName,
        secondName: state.user.secondName,
        phone: state.user.phone,
        // password: state.user.password,
    });
    const [formError, setFormError] = useState('');
    const [type, setTape] = useState('password');
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
    ]

    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.updateUser(form);
            dispatch({ type: 'setAccount', payload: form })
            // navigate('/cabinet');
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
            <div className="mt-2 mx-auto w-[1152px]">
                <div>
                    <Breadcrumbs items={breadCrumbs}/>
                </div>
                <div className="my-4">
                    <Tabs />
                </div>
                <div className="w-[1152px] mx-auto p-20 font-light space-y-2 rounded-lg shadow-lg ">
                    <h1 className="font-normal text-lg pb-2 py-4">Основна інформація</h1>
                    <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                        <div className="grid grid-flow-row grid-cols-2 gap-4 py-4">
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
                            {/*<div className={'relative'}>*/}
                            {/*    <InputField*/}
                            {/*        label={'Пароль'}*/}
                            {/*        type={type}*/}
                            {/*        name={'password'}*/}
                            {/*        required={true}*/}
                            {/*        value={form.password}*/}
                            {/*        placeholder="Змінити"*/}
                            {/*        autoComplete="off"*/}
                            {/*        onChange={handleInputChange}*/}
                            {/*    />*/}
                            {/*    <div onClick={togglePassInput} className="eye-ico cursor-pointer">*/}
                            {/*        <img src={eye} alt="" />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="w-40 mx-auto">
                            <Button type="submit" cssType="primary" label={'Зберігти зміни'} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyData;
