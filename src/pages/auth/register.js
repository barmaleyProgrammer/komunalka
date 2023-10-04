import { useState, useEffect } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import icon_komunalka from "../../img/icon_komunalka.svg";
import Button from "../../components/button";
import api from "../../api";
import eye from "../../img/eye.svg";
import Modal from "../../components/modal/modal";

const Register = () => {
    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        firstName: (process.env.NODE_ENV === 'development') ? 'first_Імʼя' : '',
        lastName: (process.env.NODE_ENV === 'development') ? 'last_Прізвище' : '',
        secondName: (process.env.NODE_ENV === 'development') ? 'second_По батькові' : '',
        phone: (process.env.NODE_ENV === 'development') ? '876454876' : '',
        source: (process.env.NODE_ENV === 'development') ? 'localhost_3000' : '2',
        // source: `${window.location.protocol}//${window.location.host}/auth/validate`,
        rememberMe: false
    });
    const [formError, setFormError] = useState('');
    const [type, setTape] = useState('password');
    const [smallChars, setSmallChars] = useState(false);
    const [bigChars, setBigChars] = useState(false);
    const [digitChars, setDigitChars] = useState(false);
    const [validateFlag, setValidateFlag] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        // const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
            // [name]: value
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
            const result = await api.signUp(form);
            if (result.status === 200) {
                setValidateFlag(true);
                setModalActive(true);
            }
        } catch (e) {
            setFormError(e);
        }
    };

    useEffect( () => {
        const smallCheck = new RegExp('[a-z]');
        const bigCheck = new RegExp('[A-Z]');
        const digitCheck = new RegExp('[0-9]');

        if (smallCheck.test(form.password)) {
            setSmallChars(true);
        } else {
            setSmallChars(false);
        }

        if (bigCheck.test(form.password)) {
            setBigChars(true);
        } else {
            setBigChars(false);
        }

        if (digitCheck.test(form.password)) {
            setDigitChars(true);
        } else {
            setDigitChars(false);
        }

    }, [form.password]);

    //  const phoneNumberFormatter = () => {
    //     const inputField = document.getElementById('phone-number');
    //     // const formattedInputValue = formatPhoneNumber(inputField.value);
    //     const phoneNumber = inputField.value.replace(/[^\d]/g, '');
    //     const formattedInputValue = `(+${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 5)
    //     }-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
    //     inputField.value = formattedInputValue;
    // }

    return (
        <div className="mt-20 mb-20 p-10 mx-auto rounded-lg shadow-lg sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center text-lg">Реєстрація</h4>
            <div className="text-xs text-red-900 text-center">{ formError }</div>
            { validateFlag ?
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="text-xs text-black_figma p-5 text-center w-[572px] h-auto">
                        <h1 className="mb-5 text-lg font-medium">Підтвердження акаунту</h1>
                        <h3 className="mb-3 text-left text-base">Дякуємо за реєстрацію! </h3>
                        <p className="text-left text-base">Будь ласка, перевірте свою електронну пошту та підтвердіть свою реєстрацію,
                            щоб розпочати користуватися нашим сервісом. Не забудьте перевірити папку «Спам»,
                            якщо лист не зʼявиться в основній скринці.<br/> З повагою, команда LYCHYLNYK.</p>
                        {/*<p className="text-left text-base mt-4 underline underline-offset-4">Надіслати мені лист повторно</p>*/}
                    </div>
                    <div className="pt-2 w-44 mx-auto">
                        <Button type="button" label={'Ok'} cssType={'primary'} onClick={() => setModalActive(false)} />
                    </div>
                </Modal> :
                <form className="space-y-2" onSubmit={Submit}>
                    <InputField
                        label={'Email'}
                        type={'email'}
                        placeholder={'example@gmail.com'}
                        name={'email'}
                        required={true}
                        cssClass="email-field"
                        value={form.email}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <InputField
                        label={'Прізвище'}
                        placeholder={'Іванов'}
                        name={'lastName'}
                        required={true}
                        value={form.lastName}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <InputField
                        label={'Імʼя'}
                        placeholder={'Іван'}
                        name={'firstName'}
                        required={true}
                        value={form.firstName}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <InputField
                        label={'По батькові'}
                        placeholder={'Іванович'}
                        name={'secondName'}
                        required={true}
                        value={form.secondName}
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
                    <div className={'relative'}>
                        <InputField
                            label={'Пароль'}
                            type={type}
                            name={'password'}
                            required={true}
                            value={form.password}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                            <img src={eye} alt="" />
                        </div>
                        <div className="pl-2 flex flex-col text-xs font-light">
                            <div className="pt-1 flex">
                            <span className="pointer">
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3.5" r="3" fill={smallChars ? '#1F9A14': '#E11A00'}/>
                                </svg>
                            </span>
                                Малі літери
                            </div>
                            <div className="pt-1 flex">
                            <span className="pointer">
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3.5" r="3" fill={bigChars ? '#1F9A14': '#E11A00'}/>
                                </svg>
                            </span>
                                Великі літери
                            </div>
                            <div className="pt-1 flex">
                            <span className="pointer">
                                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3.5" r="3" fill={digitChars ? '#1F9A14': '#E11A00'}/>
                                </svg>
                            </span>
                                Цифри
                            </div>
                        </div>
                    </div>
                    <hr className="border border-[#E2E8F0]"/>
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
                    <div className="py-2 font-light text-sm">
                        Виниклики питання? <NavLink to="#" className="text-[#3E77AA]">Детальніше</NavLink>
                    </div>
                    <Button type="submit" label={'Зареєструватися'} cssType={'primary'} />
                    <div className="flex mt-5">
                            <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                   id="rememberMe"
                                   name={'rememberMe'}
                                   type="checkbox"
                                   checked={form.rememberMe}
                                   onChange={handleInputChange}
                            />
                        <div className="px-2 font-light text-sm">
                            Я згоден з <NavLink to="#" className="text-[#3E77AA]">умовами угоди користувача</NavLink>
                        </div>
                    </div>
                    <div className="text-center py-2 font-light text-sm">
                        Вже є аккаунт? <NavLink to="/auth/login" className="text-[#3E77AA]">Вхід</NavLink>
                    </div>
                </form>
            }

        </div>
    );
};

export default Register;
