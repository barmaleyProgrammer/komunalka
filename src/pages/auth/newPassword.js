import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/inputField';
import logo_lichylnyk from '../../img/logo_lichylnyk.svg';
import eye from '../../img/eye.svg';
import Button from '../../components/button';
import { newPassword } from '../../api';
import Modal from '../../components/modal/modal';
import CheckPassword from '../../components/checkPassword/checkPassword';
import { Context } from '../../store';

const NewPassword = ({ close }) => {
    const [, dispatch] = useContext(Context);
    const url = new URL(window.location);
    const navigate = useNavigate();
    const [type, setTape] = useState('password');
    const [modalActive, setModalActive] = useState(true);
    const [inputPassFlag, setInputPassFlag] = useState(false);
    const [form, setForm] = useState({
        email: url.searchParams.get('email') || '',
        password: (process.env.NODE_ENV === 'development') ? 'Test_Drive5' : '',
        token: url.searchParams.get('code') || ''
    });

    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
        }));
    };

    const Submit = (event) => {
        event.preventDefault();
        newPassword(form).catch((error) => {
            dispatch({type: 'error', payload: error});
            navigate('/');
        });
    };

    const closeModal = () => {
        setModalActive(false)
        navigate('/');
    };

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    };

    return (
        <div>
            {modalActive && (
                <Modal close={() => closeModal()}>
                    <div className="p-10 w-full">
                        <img src={logo_lichylnyk} className="h-16 mb-8 mx-auto" alt=""/>
                        <h4 className="text-black_figma text-center">Новий пароль</h4>
                        <form className="space-y-2" onSubmit={Submit}>
                            <InputField
                                label={'Email'}
                                type={'email'}
                                placeholder={'Введіть свій email'}
                                name={'email'}
                                // required={true}
                                readOnly={true}
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
                                    onFocus={() => setInputPassFlag(true)}
                                    onBlur={() => setInputPassFlag(false)}
                                    onChange={handleInputChange}
                                />
                                {inputPassFlag ? <CheckPassword password={form.password}/> : <></>}
                                <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                                    <img src={eye} alt=""/>
                                </div>
                            </div>
                            <Button type="submit" label={'Зберегти'} cssType={'primary'}/>
                        </form>
                    </div>
                </Modal>
            )
            }
        </div>
    );
};

export default NewPassword;
