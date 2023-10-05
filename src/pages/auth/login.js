import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
// import icon_komunalka from "../../img/icon_komunalka.svg";
import logo_com_block from "../../img/logo_com_block.png";
import google from "../../img/google.svg";
import facebook from "../../img/facebook.svg";
import eye from "../../img/eye.svg";
import Button from "../../components/button";
import api from "../../api";
import { Context } from "../../store";

const Login = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [type, setTape] = useState('password');

    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        rememberMe: false

    });
    const [formError, setFormError] = useState('');

    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
        }));
    };

    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.signIn(form);
            dispatch({ type: 'logIn' });
            await api.getObject().then((data) => {
                dispatch({ type: 'setAccount', payload: data.account });
                // dispatch({ type: 'setAddresses', payload: data.addresses });
            });
            await api.getService().then((data) => {
                dispatch({ type: 'serviceTypes', payload: data });
            });
            await api.getAddress().then((data) => {
                dispatch({ type: 'setAddresses', payload: data });
            })
            navigate('/cabinet');
        } catch (e) {
            setFormError(e);
            setForm({
                email: '',
                password: '',
            });
        }
    };
    // const SocialNetworks = async (event) => {
    //     const url = new URL(window.location);
    //     event.preventDefault();
    //         const result = await api.authSocialNetworks();;
    //         if (result.status === 302) {
    //             sessionStorage.setItem(url.searchParams.get('accessToken'));
    //             navigate('/cabinet');
    //         }
    // };

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    }
    return (
        <div className="mt-20 mb-20 p-10 mx-auto rounded-lg shadow-lg sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/3 max-w-[450px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="" />
            <h4 className="text-black_figma text-center">Вхід</h4>
            <div className="text-red-950 text-center">{ formError }</div>
            <form className="space-y-2" onSubmit={Submit}>
                <InputField
                    label={'Email'}
                    type={'email'}
                    placeholder={'Введіть свій email'}
                    name={'email'}
                    required={true}
                    value={form.email}
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
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-400">
                            Запам’ятати мене
                        </label>
                    </div>
                    <NavLink to="/auth/reset" className="text-[#3E77AA] pt-1 basis-1/2 text-sm text-right">Забули пароль?</NavLink>
                </div>
                <Button type="submit" label={'Увійти'} cssType={'primary'} />
                <div className="py-2 font-light text-sm">
                    Ще немає аккаунту? <NavLink to="/auth/register" className="text-[#3E77AA]">Зареєструватися</NavLink>
                </div>

                <div className="flex gap-2 text-[#797878]">
                    <hr className="w-1/3 mt-3"/>
                    <span className="w-1/3 whitespace-nowrap">чи за допомогою</span>
                    <hr className="ml-4 w-1/3 mt-3"/>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex py-3 justify-center space-x-1">
                            <img src={google} alt="" />
                            <NavLink to="" className="text-sm whitespace-nowrap" >Ввійти з Google</NavLink>
                        </div>
                    </div>
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex py-3 justify-center space-x-1">
                            <img src={facebook} alt="" />
                            <NavLink to="" className="text-sm whitespace-nowrap" >Ввійти з Facebook</NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex p-2 justify-center space-x-1">
                            <img src={logo_com_block} alt=""/>
                            {/*<p className="text-sm pt-1">Комуналка</p>*/}
                        </div>
                    </div>
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex p-2 justify-center">
                            <img src={logo_gerc} alt="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
