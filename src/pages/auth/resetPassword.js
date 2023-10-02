import {useState, useContext, useEffect} from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField";
import logo_lichylnyk from "../../img/logo_lichylnyk.svg";
import Button from "../../components/button";
import api from "../../api";
// import { Context } from "../../store";

const ResetPasswordRequest = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: (process.env.NODE_ENV === 'development') ? 'grebenyukvd@gmail.com' : '',
        rememberMe: false

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
        await api.resetPasswordRequest(form.email).then(() => {
                // dispatch({ type: 'setAddresses', payload: data });
            })
            navigate('/');
        // } catch (e) {
        //     console.error(e.message);
        //     setFormError(e.message);
        //     setForm({
        //         email: '',
        //     });
        // }
    };

    return (
        <div className="mt-10 p-10 mx-auto rounded-lg shadow-lg w-[464px]">
            <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center">Відновлення пароля</h4>
            <div className="text-xs text-red-900 text-center">{formError}</div>
            <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                <InputField
                    type={'email'}
                    placeholder={'Введіть свій email'}
                    name={'email'}
                    required={true}
                    value={form.email}
                    onChange={handleInputChange}
                />
                <Button type="submit" label={'Надіслати'} cssType={'primary'} />
            </form>
        </div>
    );
};

export default ResetPasswordRequest;
