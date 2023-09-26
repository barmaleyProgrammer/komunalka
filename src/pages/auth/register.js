import { useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import icon_komunalka from "../../img/icon_komunalka.svg";
import Button from "../../components/button";
import api from "../../api";

const Register = () => {
    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        firstName: (process.env.NODE_ENV === 'development') ? 'Barm' : '',
        lastName: (process.env.NODE_ENV === 'development') ? 'aley' : '',
        secondName: (process.env.NODE_ENV === 'development') ? 'Bob' : '',
        phone: (process.env.NODE_ENV === 'development') ? '876454876' : '',
        source: '2',
        // source: `${window.location.protocol}//${window.location.host}/auth/validate`,
    });
    const [formError, setFormError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.signUp(form);
        } catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
    };

    return (
        <div className="mt-20 p-10 mx-auto rounded-lg shadow-lg w-1/4">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center text-lg">Реєстрація</h4>
            <div className="text-xs text-red-900 text-center">{formError}</div>
            <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'example@gmail.com'}
                    name={'email'}
                    required={true}
                    value={form.email}
                    onChange={handleInputChange}
                />
                <InputField
                    label={'Прізвище'}
                    placeholder={'Іванов'}
                    name={'firstName'}
                    required={true}
                    value={form.firstName}
                    onChange={handleInputChange}
                />
                <InputField
                    label={'Імʼя'}
                    placeholder={'Іван'}
                    name={'lastName'}
                    required={true}
                    value={form.lastName}
                    onChange={handleInputChange}
                />
                <InputField
                    label={'По батькові'}
                    placeholder={'Іванович'}
                    name={'secondName'}
                    required={true}
                    value={form.secondName}
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
                    label={'Пароль'}
                    type={'password'}
                    name={'password'}
                    required={true}
                    value={form.password}
                    onChange={handleInputChange}
                />
                <div className="text-black_figma text-sm font-light">
                    При вході через сайти партнерів є змога<br />автоматично додати адреси
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className="komunalka flex p-2 ml-8 space-x-1">
                            <img src={icon_komunalka} alt=""/>
                            <p>Комуналка</p>
                        </div>
                    </div>
                    <div className="basis-1/2 text-center border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className="logo_gerc p-1.5 ml-14">
                            <img src={logo_gerc} alt="" />
                        </div>
                    </div>
                </div>
                <Button type="submit" label={'Зареєструватися'} cssType={'primary'} />
                <div className="font-light">
                    Вже є аккаунт? <NavLink to="/auth/login" className="text-[#3E77AA]">Вхід</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Register;
