import { useContext, useState } from 'react';
import InputField from "../../components/inputField";
import Tabs from "../../components/tabs";
import { Context } from "../../store";
import Breadcrumbs from "../../components/breadcrumbs";
import api from "../../api";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const MyData = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);
    const [form, setForm] = useState(state.user);
    const [formError, setFormError] = useState('');
    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '/cabinet',
            "label": 'Особистий кабінет'
        },
        {
            "to": '',
            "label": 'Мої дані'
        },
    ]

    const Submit = async (event) => {
        event.preventDefault();
        try {
            await api.updateUser(form);
            dispatch({ type: 'setAccount', payload: form })
            navigate('/cabinet');
        } catch (e) {
            console.error(e.message);
            setFormError(e.message);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    return (
        <div className="mt-2 mx-auto w-1/2">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <div className="my-4">
                <Tabs />
            </div>
            <div className="w-2/3 mx-auto p-20 font-light space-y-2 rounded-lg shadow-lg ">
                <h1 className="font-normal text-lg pb-2 py-4">Основна інформація</h1>
                <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                    <div className="grid grid-flow-row grid-cols-2 gap-4 py-4">
                        <InputField
                            label={'Прізвище'}
                            type={'text'}
                            name={'firstName'}
                            required={true}
                            value={form.firstName}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Email'}
                            type={'email'}
                            placeholder={'Введіть свій email'}
                            name={'email'}
                            required={true}
                            value={form.email}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Ім’я'}
                            type={'text'}
                            name={'lastName'}
                            required={true}
                            value={form.lastName}
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
                            label={'По батькові'}
                            type={'text'}
                            name={'secondName'}
                            required={true}
                            value={form.secondName}
                            onChange={handleInputChange}
                        />
                        {/*<InputField*/}
                        {/*    label={'Пароль'}*/}
                        {/*    type={'type'}*/}
                        {/*    name={'password'}*/}
                        {/*    required={true}*/}
                        {/*    value={form.password}*/}
                        {/*    onChange={handleInputChange}*/}
                        {/*/>*/}
                    </div>
                    <div className="w-40 mx-auto">
                        <Button type="submit" cssType="primary" label={'Зберігти зміни'} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyData;
