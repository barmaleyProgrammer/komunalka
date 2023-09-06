import { useState } from "react";
import InputField from "../components/inputField";
import logo from "../img/logo.svg";
import logo_gerc from "../img/logo_gerc.png";
import logo_komunalka from "../img/logo_komunalka.png";
import Button from "../components/button";

export default () => {
    const [form, setForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const Submit = (event) => {
        event.preventDefault();
        console.log(form);
        // вот тут нужно отправить запрос на сервер для регистрации нового пользователя
    };

    return (
        <div className="mt-10 p-10 mx-auto rounded-lg shadow-lg min-w-[25%]">
            <img src={logo} className="h-16 mb-8 mx-auto" alt="Flowbite Logo" />
            <h4 className="text-black_figma text-center">Реєстрація</h4>
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
                    placeholder={'Бандера'}
                    name={'firstName'}
                    required={true}
                    value={form.firstName}
                    onChange={handleInputChange}
                />
                <InputField
                    label={'Імʼя'}
                    placeholder={'Степан'}
                    name={'lastName'}
                    required={true}
                    value={form.lastName}
                    onChange={handleInputChange}
                />
                <InputField
                    label={'По батькові'}
                    placeholder={'Андрійович'}
                    name={'middleName'}
                    required={true}
                    value={form.middleName}
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
                <hr className="w-full text-borderColor"/>
                <div className="text-black_figma text-sm">
                    При вході через сайти партнерів є змога<br />автоматично додати адреси
                </div>
                <div className="flex space-x-1">
                    <div className="basis-1/2 border border-borderColor rounded-sm flex justify-center items-center py-2">
                        <img src={logo_komunalka} />
                    </div>
                    <div className="basis-1/2 border border-borderColor rounded-sm flex justify-center items-center py-2">
                        <img src={logo_gerc} />
                    </div>
                </div>
                <Button type="submit" label={'Зареєструватися'} cssType={'primary'} />
            </form>
        </div>
    );
}
