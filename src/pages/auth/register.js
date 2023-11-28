import {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import logo_com_block from "../../img/logo_com_block.png";
import Button from "../../components/button";
import api from "../../api";
import eye from "../../img/eye.svg";
import CheckPassword from "../../components/checkPassword/checkPassword";
import PhoneField from "../../components/phoneField";
import {Context} from "../../store";

const Register = ({ close, showLogin }) => {
    const [,dispatch] = useContext(Context);
    // const [form, setForm] = useState({
    //     email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
    //     password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
    //     firstName: (process.env.NODE_ENV === 'development') ? 'first_Імʼя' : '',
    //     lastName: (process.env.NODE_ENV === 'development') ? 'last_Прізвище' : '',
    //     secondName: (process.env.NODE_ENV === 'development') ? 'second_По батькові' : '',
    //     phone: (process.env.NODE_ENV === 'development') ? '876454876' : '',
    //     source: (process.env.NODE_ENV === 'development') ? 'localhost_3000' : '2',
    //     // source: `${window.location.protocol}//${window.location.host}/auth/validate`,
    //     rememberMe: false
    // });
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        secondName: '',
        phone: '',
        source: '2',
        rememberMe: false
    });

    const [type, setType] = useState('password');
    const [validateFlag, setValidateFlag] = useState(false);
    const [inputPassFlag, setInputPassFlag] = useState(false);
    const [loading, setLoading] = useState(false);

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
            setType('text')
        } else {
            setType('password')
        }
    }
    const Submit = (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {...form};
        payload.phone = payload.phone.replace(/\D/g, '');
        api.signUp(payload).then((result) => {
            if (result.status === 200) {
                setValidateFlag(true);
            }
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
        }).finally(() => setLoading(false))
    };

    const Valid = () => {
        return (
            <>
                <div className="text-xs text-black_figma p-5 text-center w-full h-auto">
                    <h1 className="mb-5 text-lg font-medium">Підтвердження акаунту</h1>
                    <h3 className="mb-3 text-left text-base">Дякуємо за реєстрацію! </h3>
                    <p className="text-left text-base">Будь ласка, перевірте свою електронну пошту та підтвердіть свою реєстрацію,
                        щоб розпочати користуватися нашим сервісом. Не забудьте перевірити папку «Спам»,
                        якщо лист не зʼявиться в основній скринці.<br/> З повагою, команда LYCHYLNYK.</p>
                    {/*<p className="text-left text-base mt-4 underline underline-offset-4">Надіслати мені лист повторно</p>*/}
                </div>
                <div className="pt-2 w-44 mx-auto">
                    <Button type="button" label={'Ok'} cssType={'primary'} onClick={close} />
                </div>
            </>
        );
    };

    return (
        <div className="px-10 py-6 space-y-3 mt-2 mx-auto w-[464px] rounded-lg">
            {/*<img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />*/}
            <h4 className="text-black_figma text-center text-lg">Реєстрація</h4>
            { validateFlag
                ? <Valid />
                : <form className="space-y-2" onSubmit={Submit}>
                        <InputField
                            label={'Email'}
                            type={'email'}
                            placeholder={'example@gmail.com'}
                            name={'email'}
                            required={true}
                            cssClass="email-field"
                            value={form.email}
                            autocomplete="on"
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Прізвище'}
                            placeholder={'Іванов'}
                            name={'lastName'}
                            required={true}
                            value={form.lastName}
                            autocomplete="on"
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Імʼя'}
                            placeholder={'Іван'}
                            name={'firstName'}
                            required={true}
                            value={form.firstName}
                            autocomplete="off"
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'По батькові'}
                            placeholder={'Іванович'}
                            name={'secondName'}
                            required={false}
                            value={form.secondName}
                            autocomplete="on"
                            onChange={handleInputChange}
                        />
                        <PhoneField
                            label={'Телефон(не менше 12цифр)'}
                            placeholder="+380ХХ ХХХ ХХ ХХ"
                            maskPlaceholder={null}
                            name={'phone'}
                            cssClass="email-field"
                            pattern="^\+\d{12,15}$"
                            required={true}
                            onChange={handleInputChange}
                            value={form.phone}
                        />
                        <div className={'relative'}>
                            <InputField
                                label={'Пароль'}
                                type={type}
                                name={'password'}
                                required={true}
                                value={form.password}
                                autocomplete="off"
                                onChange={handleInputChange}
                                onFocus={() => setInputPassFlag(true)}
                                onBlur={() => setInputPassFlag(false)}
                            />
                            { inputPassFlag ? <CheckPassword password={form.password} /> : <></> }
                            <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                                <img src={eye} alt="" />
                            </div>

                        </div>
                        <hr className="border border-[#E2E8F0]"/>
                        <div className="text-black_figma text-sm font-light">
                            При вході через сайти партнерів є змога<br />автоматично додати адреси
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                                <div className="flex p-2 justify-center space-x-1">
                                    <img src={logo_com_block} alt=""/>
                                    {/*<p className="text-sm pt-1">Комуналка</p>*/}
                                </div>
                            </div>
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded" title="">
                                <div className="flex p-2 justify-center space-x-1">
                                    <img src={logo_gerc} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="py-2 font-light text-sm">
                            Виникли питання? <NavLink to="/faq" className="text-[#3E77AA]" onClick={close}>Детальніше</NavLink>
                        </div>
                        <div className="flex mt-5">
                            <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                   id="rememberMe"
                                   name={'rememberMe'}
                                   type="checkbox"
                                   checked={form.rememberMe}
                                   onChange={handleInputChange}
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm font-light">
                                Я згоден з <NavLink to="/userAgreement" className="text-[#3E77AA]" onClick={close}>умовами угоди користувача</NavLink>
                            </label>
                        </div>
                        <Button type="submit" label={'Зареєструватися'} loading={loading} cssType={'primary'} disabled={!form.rememberMe} />
                        <div className="text-center py-2 font-light text-sm">
                            Вже є аккаунт? <NavLink to="#" className="text-[#3E77AA]" onClick={showLogin}>Вхід</NavLink>
                        </div>
                    </form>
            }
        </div>
    );
};

export default Register;
