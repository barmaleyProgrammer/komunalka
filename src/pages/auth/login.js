import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import icon_komunalka from "../../img/icon_komunalka.svg";
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

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    }
    return (
        <div className="mt-10 p-10 mx-auto rounded-lg shadow-lg w-1/4">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="" />
            <h4 className="text-black_figma text-center">Вхід</h4>
            <div className="text-red-950 text-center">{ formError }</div>
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
                    <div onClick={togglePassInput} className={'eye-ico'}>
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
                    <div className="text-black_figma basis-1/2 text-sm text-right">Забули пароль?</div>
                </div>
                <Button type="submit" label={'Увійти'} cssType={'primary'} />
                <div>
                    Ще немає аккаунту? <NavLink to="/auth/register" className="text-[#3E77AA]">Зареєструватися</NavLink>
                </div>

                <div className="flex gap-2">
                    <hr className="w-1/3 text-borderColor mt-3"/>
                    <span className="w-1/3 whitespace-nowrap">чи за допомогою</span>
                    <hr className="w-1/3 text-borderColor mt-3"/>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-xs w-1/2 h-11">
                        <div className="flex p-2 ml-2 space-x-1">
                            <img src={google} alt="" />
                            <p className="text-sm">Войти с Google</p>
                        </div>
                    </div>
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-xs w-1/2 h-11">
                        <div className=" lex p-1 ml-0 mt-1 space-x-1">
                            <img src={facebook} alt="" />
                            <p className="text-sm">Войти с Facebook</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded-xs w-1/2 h-11">
                        <div className="komunalka flex p-2 ml-8 space-x-1">
                            <img src={icon_komunalka} alt="" />
                            <p>Комуналка</p>
                        </div>
                    </div>
                    <div className="basis-1/2 text-center border border-[#E8E8E8;] rounded-xs w-1/2 h-11">
                        <div className="logo_gerc p-1.5 ml-14">
                            <img src={logo_gerc} alt="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
