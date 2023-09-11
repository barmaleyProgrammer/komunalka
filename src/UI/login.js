import { useState } from "react";
import InputField from "../components/inputField";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import logo_gerc from "../img/logo_gerc.svg";
import icon_komunalka from "../img/icon_komunalka.svg";
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";
import eye from "../img/eye.svg";
import Button from "../components/button";
import api from "../api";

const Login = () => {

    const [toggleIcon, setToggleIcon] = useState('o');
    const [type, setTape] = useState('password');
    const eye = toggleIcon;

    const [form, setForm] = useState({
        email: 'grebenyukvd@gmail.com',
        password: 'Test_Drive2',
        // password: 'Test_Drive2',

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
            const res = await api.signIn(form);
        } catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
        setForm({
            email: '',
            password: '',
        });
    };

    const togglePassInput = (e) => {
        if (type === 'password') {
            setTape('text')
            setToggleIcon('X')
        } else {
            setTape('password')
            setToggleIcon('o')
        }
    }
    return (
        <div className="mt-10 p-10 mx-auto rounded-lg shadow-lg w-[464px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center">Вхід</h4>
            <div className="text-xs text-red-900 text-center">{formError}</div>
            <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'Введіть свій email'}
                    name={'email'}
                    required={true}
                    value={form.email}
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
                    <span onClick={togglePassInput} className={'eye-ico'}>
                        <img src={eye} />
                    </span>
                </div>
                <div className="flex">
                    <div className="flex basis-1/2 mt-1">
                        <input disabled checked id="disabled-checkbox" type="checkbox" value=""
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="disabled-checkbox"
                               className="ml-2 text-sm text-gray-400 dark:text-gray-500">
                        Запам’ятати мене
                        </label>
                    </div>
                    <div className="text-black_figma basis-1/2 text-right">
                        <p>Забули пароль?</p>
                    </div>
                </div>

                <Button type="submit" label={'Увійти'} cssType={'primary'} />
                <div className="flex">
                    <p className="not-italic text-[15px] leading-[1.5rem] font-[400]">
                        <a className=" text-[#2A3744)]">Ще немає аккаунту? </a>
                        <a className="text-[#3E77AA]">Зареєструватися</a>
                    </p>
                </div>

                <div className="flex space-x-2">
                    <div className="basis-1/3 mt-1">
                        <hr className=" w-full text-borderColor"/>
                    </div>
                    <div className="text-black_figma basis-1/3 text-right">
                        <span className="whitespace-nowrap">чи за допомогою</span>
                    </div>
                    <div className="basis-1/3 mt-1">
                        <hr className="w-full text-borderColor"/>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className="flex p-2 ml-2 space-x-1">
                            <img src={google}/>
                            <p>Войти с Google</p>
                        </div>
                    </div>
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className=" flex p-1 ml-0 mt-1 space-x-1">
                            <img src={facebook}/>
                            <p>Войти с Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className="komunalka flex p-2 ml-8 space-x-1">
                            <img src={icon_komunalka}/>
                            <p>Комуналка</p>
                        </div>
                    </div>
                    <div className="basis-1/2 text-center border border-[#E8E8E8;] rounded-[2px] w-[188px] h-[44px]">
                        <div className="logo_gerc p-1.5 ml-14">
                            <img src={logo_gerc} className="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
