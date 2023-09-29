import {useState, useContext, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import logo_gerc from "../../img/logo_gerc.svg";
import icon_komunalka from "../../img/icon_komunalka.svg";
import eye from "../../img/eye.svg";
import Button from "../../components/button";
import api from "../../api";
import { Context } from "../../store";

const NewPassword = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [type, setTape] = useState('password');

    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        // token: (process.env.NODE_ENV === 'development') ? 'b5b7af42291a92382204134ab1b16925' : '',
        // rememberMe: false

    });
    const [formError, setFormError] = useState('');
    const [validateFlag, setValidateFlag] = useState(false);
    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
        }));
    };

    const Submit = async (event) => {
        const url = new URL(window.location);
        const token = url.searchParams.get('code') || '';
        event.preventDefault();
        {
            await api.newPassword(form);
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
        <div className="mt-20 mb-20 p-10 mx-auto rounded-lg shadow-lg sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/3 max-w-[450px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="" />
            <h4 className="text-black_figma text-center">Новий пароль</h4>
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
                <Button type="submit" label={'Увійти'} cssType={'primary'} />
                <div className="flex flex-row space-x-2">
                    <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                        <div className="flex p-2 justify-center space-x-1">
                            <img src={icon_komunalka} alt="" />
                            <p className="text-sm pt-1">Комуналка</p>
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

export default NewPassword;
