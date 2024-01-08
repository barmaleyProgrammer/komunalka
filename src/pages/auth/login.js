import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import logo_com_block from "../../img/logo_com_block.png";
import google from "../../img/google.svg";
import facebook from "../../img/facebook.svg";
import eye from "../../img/eye.svg";
import Button from "../../components/button";
import { signIn, getObject, getServices, getServiceTypes, getAddress, authSocialNetworks } from "../../api";
import { Context } from "../../store";
import Loader from "../../components/Loader/loader";

const Login = ({ close, showRegister, showResetPass }) => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [type, setTape] = useState('password');
    const [loginType, setLoginType] = useState('email');
    const [loginPattern, setLoginPattern] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        rememberMe: false
    });
    // const [form, setForm] = useState({
    //     email: '',
    //     password: '',
    //     rememberMe: false
    // });


    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
        }));
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        if (value.search(/^\d+/) !== -1) {
            setLoginType('tel');
            setLoginPattern('^\\d{12+}$');
            setTimeout(() => {
                event.target.setSelectionRange(String(value).length, String(value).length);
            }, 1);
        } else {
            setLoginType('email');
            setLoginPattern(null);
        }
        setForm((prevProps) => ({
            ...prevProps,
            email: value
        }));
    };

    const Submit = (event) => {
        event.preventDefault();
        dispatch({ type: 'error', payload: '' });
        setIsLoading(true);
        signIn(form).then(() => {
            dispatch({ type: 'logIn' });
            const req1 = getObject().then((data) => {
                dispatch({ type: 'setAccount', payload: data.account });
            });
            const req2 = getServices().then((data) => {
                dispatch({ type: 'services', payload: data });
            });
            const req3 = getServiceTypes().then((data) => {
                dispatch({ type: 'serviceTypes', payload: data });
            });
            const req4 = getAddress().then((data) => {
                dispatch({ type: 'setAddresses', payload: data });
            })
            Promise.all([req1, req2, req3, req4]).then(() => {
                navigate('/cabinet');
                close();
            }).catch((error) => {
                dispatch({type: 'error', payload: error});
            });
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
            // setForm({
            //     email: '',
            //     password: '',
            //     rememberMe: false
            // });
        }).finally(() => setIsLoading(false));
    };
    const SocialNetworks = (event, type) => {
        event.preventDefault();
        authSocialNetworks(type);
    };

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    }

    return (
        <div className="px-10 py-6 space-y-3 mt-2 mx-auto w-[464px] rounded-lg shadow-lg">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="" />
            <h4 className="text-black_figma text-center">Вхід</h4>
                { isLoading ? <Loader /> :
                    <form className="space-y-2" onSubmit={Submit}>
                        <InputField
                            label={'Телефон(не менше 12цифр) або Email'}
                            type={loginType}
                            placeholder={'Введіть свій телефон або Email'}
                            name={'tel'}
                            cssClass="email-field"
                            required={true}
                            value={form.email}
                            autocomplete="on"
                            pattern={loginPattern}
                            // pattern="^[a-zA-Z0-9\-.]+@[a-z0-9]+\.[a-z]{2,3}|(\+\d{12,15})$"
                            onChange={handleInputChange2}
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
                        </div>
                        <div className="flex">
                            <div className="flex basis-1/2 mt-1">
                                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                   id="rememberMe"
                                   name={'rememberMe'}
                                   type="checkbox"
                                   checked={form.rememberMe}
                                   onChange={handleInputChange}
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm font-light">
                                    Запам’ятати мене
                                </label>
                            </div>
                            <NavLink to="#" className="pt-1 basis-1/2 text-base font-light text-right" onClick={showResetPass}>Забули пароль?</NavLink>
                        </div>
                        <Button type="submit" label={'Увійти'} cssType={'primary'} />
                        <div className="py-2 font-light text-base">
                            Ще немає аккаунту? <NavLink to="#" onClick={showRegister} className="text-[#3E77AA]">Зареєструватися</NavLink>
                        </div>

                        <div className="flex gap-2 text-[#797878]">
                            <hr className="w-1/3 mt-3"/>
                            <span className="w-1/3 whitespace-nowrap">чи за допомогою</span>
                            <hr className="ml-4 w-1/3 mt-3"/>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                                 onClick={(event) => SocialNetworks(event, 'google')}
                            >
                                <div className="flex py-3 justify-center space-x-2">
                                    <img src={google} alt="" />
                                    <p className="text-sm whitespace-nowrap">Ввійти з Google</p>
                                </div>
                            </div>
                            <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                                onClick={(event) => SocialNetworks(event, 'facebook')}
                                >
                                <div className="flex py-3 justify-center space-x-2">
                                    <img src={facebook} alt="" />
                                    <p className="text-sm whitespace-nowrap">Ввійти з Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                                <div className="flex p-2 justify-center space-x-1">
                                    <img src={logo_com_block} alt=""/>
                                </div>
                            </div>
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                                <div className="flex p-2 justify-center">
                                    <img src={logo_gerc} alt="" />
                                </div>
                            </div>
                        </div>
                    </form>
                }
        </div>
    );
};

export default Login;
