import { useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import icon_komunalka from "../../img/icon_komunalka.svg";
import Button from "../../components/button";
import api from "../../api";
import eye from "../../img/eye.svg";

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
    const [type, setTape] = useState('password');

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
    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.signUp(form);
        } catch (e) {
            setFormError(e);
        }
    };

    return (
        <div className="mt-20 mb-20 p-10 mx-auto rounded-lg shadow-lg sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center text-lg">Реєстрація</h4>
            <div className="text-xs text-red-900 text-center">{ formError }</div>
            <form className="space-y-2" onSubmit={Submit}>
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'example@gmail.com'}
                    name={'email'}
                    required={true}
                    cssClass="email-field"
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
                <div className={'relative'}>
                <InputField
                    label={'Пароль'}
                    type={type}
                    name={'password'}
                    required={true}
                    value={form.password}
                    onChange={handleInputChange}
                />
                <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                    <img src={eye} alt="" />
                </div>
                </div>
                <div className="text-black_figma text-sm font-light">
                    При вході через сайти партнерів є змога<br />автоматично додати адреси
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex p-2 justify-center space-x-1">
                            <img src={icon_komunalka} alt=""/>
                            <p className="text-sm pt-1">Комуналка</p>
                        </div>
                    </div>
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded" title="">
                        <div className="flex p-2 justify-center space-x-1">
                            <img src={logo_gerc} alt="" />
                        </div>
                    </div>
                </div>
                <Button type="submit" label={'Зареєструватися'} cssType={'primary'} />
                <div className="py-2 font-light text-sm">
                    Вже є аккаунт? <NavLink to="/auth/login" className="text-[#3E77AA]">Вхід</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Register;
