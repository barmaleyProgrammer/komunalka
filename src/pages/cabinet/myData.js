import {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../../components/inputField';
import Tabs from '../../components/tabs';
import { Context } from '../../store';
import Breadcrumbs from '../../components/breadcrumbs';
import { updateUser, changePassword, changeEmailRequest, deleteAccount } from '../../api';
import Button from '../../components/button';
import eye from '../../img/eye.svg';
import my_data_changed from './../../img/modal_mydata_changed.png';
import Modal from '../../components/modal/modal';
import './myData.css';
import { useNavigate } from 'react-router-dom';
import CheckPassword from '../../components/checkPassword/checkPassword';
import PhoneField from '../../components/phoneField';

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '/cabinet',
        'label': 'Особистий кабінет'
    },
    {
        'to': '',
        'label': 'Мої дані'
    },
];


const MyData = () => {
    const [state, dispatch] = useContext(Context);
    const [form, setForm] = useState({
        firstName: state.user.firstName,
        email: state.user.email,
        lastName: state.user.lastName,
        secondName: state.user.secondName,
        phone: state.user.phone,
        // source: (process.env.NODE_ENV === 'development') ? 'localhost_3000' : '2',

    });
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(state.user.email);
    const [type, setTape] = useState('password');
    const [inputPassFlag, setInputPassFlag] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const [modalChangeEmail, setModalChangeEmail] = useState(false);
    const [modalCheckEmail, setModalCheckEmail] = useState(false);
    const [modalRequestDelAccount, setModalRequestDelAccount] = useState(false);
    const navigate = useNavigate();

    const Submit = (event) => {
        event.preventDefault();
        updateUser(form).then(() => {
            dispatch({ type: 'setAccount', payload: form })
            setModalActive(true);
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
        });
    };

    const ChangePassword = (event) => {
        event.preventDefault();
        setShowChangePasswordModal(false);
        changePassword(password).then(() => {
            setModalActive(true);
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
        });
    };

    const ChangeEmailRequest = (event) => {
        event.preventDefault();
        setModalChangeEmail(false);
        changeEmailRequest(email, form.source).then(() => {
            setModalCheckEmail(true);
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
        });
    };

    const DeleteAccount = (event) => {
        event.preventDefault();
        deleteAccount().then(() => {
            setModalRequestDelAccount(false);
            dispatch({ type: 'logOut' });
            navigate('/');
        }).catch((error) => {
            dispatch({ type: 'error', payload: error });
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const togglePassInput = () => {
        if (type === 'password') {
            setTape('text')
        } else {
            setTape('password')
        }
    };


    return (
        <>
            <Breadcrumbs items={breadCrumbs} />
            <div className="mt-6 mb-8">
                <Tabs />
            </div>
            <div className="py-10 px-20 font-light space-y-2 rounded-lg shadow-myCustom">
                <h1 className="font-normal text-lg pb-2 py-2">Основна інформація</h1>
                {
                    modalRequestDelAccount && (
                        <Modal close={() => setModalRequestDelAccount(false)}>
                            <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                <p className="mt-8">Ви впевнені, що бажаєте видалити профіль?</p>
                            </div>
                            <div className="pt-2 w-44 mx-auto mb-8">
                                <Button type="button" label={'Так, впевнений!'} cssType={'primary'} onClick={DeleteAccount} />
                            </div>
                        </Modal>
                    )
                }
                {
                    modalActive && (
                        <Modal close={() => setModalActive(false)}>
                            <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                <img src={ my_data_changed } alt=""/>
                                <p className="mt-8">Зміни успішно збережені</p>
                            </div>
                            <div className="pt-2 w-44 mx-auto mb-8">
                                <Button type="button" label={'Ok'} cssType={'primary'} onClick={() => setModalActive(false)} />
                            </div>
                        </Modal>
                    )
                }
                {
                    modalChangeEmail && (
                        <Modal close={() => setModalChangeEmail(false)}>
                            <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                <p className="mt-8">Ви впевнені, що бажаєте змінити email?</p>
                            </div>
                            <div className="pt-2 w-44 mx-auto mb-8">
                                <Button type="button" label={'Так, впевнений!'} cssType={'primary'} onClick={ChangeEmailRequest} />
                            </div>
                        </Modal>
                    )
                }
                {
                    modalCheckEmail && (
                        <Modal close={() => setModalCheckEmail(false)}>
                            <div className="w-96 p-6">
                                <div className="text-xs text-black_figma p-5 text-center w-full">
                                    <p className="text-left text-base">Будь ласка, перевірте свою електронну пошту, та натисніть на посилання.
                                        Не забудьте перевірити папку «Спам», якщо лист не зʼявиться в основній скринці.
                                        <br/> З повагою, команда LYCHYLNYK.</p>
                                </div>
                                <div className="pt-2 w-44 mx-auto">
                                    <Button type="button" label={'Ok'} cssType={'primary'} onClick={() => setModalCheckEmail(false)} />
                                </div>
                            </div>
                        </Modal>
                    )
                }
                {
                    showChangePasswordModal && (
                        <Modal close={() => setShowChangePasswordModal(false)}>
                            <div className="flex flex-col justify-center p-10 items-center text-lg w-[464px]">
                                <p className="mt-8">Ви впевнені, що бажаєте змінити пароль?</p>
                            </div>
                            <div className="pt-2 w-44 mx-auto mb-8">
                                <Button type="button" label={'Так, впевнений!'} cssType={'primary'} onClick={ChangePassword} />
                            </div>
                        </Modal>
                    )
                }

                <form className="space-y-2" action="#" autoComplete="off" onSubmit={Submit}>
                    <div className="grid grid-flow-row grid-cols-2 gap-x-5 py-4 pr-60">
                        <InputField
                            label={'Прізвище'}
                            type={'text'}
                            name={'lastName'}
                            placeholder={'Іванов'}
                            required={true}
                            value={form.lastName}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <InputField
                            label={'Email'}
                            type={'email'}
                            placeholder={'Введіть свій email'}
                            name={'email'}
                            readOnly={false}
                            cssClass="email-field"
                            value={email}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label={'Ім’я'}
                            type={'text'}
                            name={'firstName'}
                            placeholder={'Іван'}
                            required={true}
                            value={form.firstName}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <PhoneField
                            label={'Телефон(не менше 12цифр)'}
                            placeholder="+388888888888"
                            maskPlaceholder={null}
                            name={'phone'}
                            cssClass="email-field"
                            pattern="^\+\d{12,15}$"
                            required={true}
                            onChange={handleInputChange}
                            value={form.phone}
                        />
                        <InputField
                            label={'По батькові'}
                            type={'text'}
                            name={'secondName'}
                            placeholder={'Іванович'}
                            required={false}
                            value={form.secondName}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <div className={'relative'}>
                            <InputField
                                label={'Пароль'}
                                type={type}
                                name={'password'}
                                value={password}
                                onFocus={() => setInputPassFlag(true)}
                                onBlur={() => setInputPassFlag(false)}
                                placeholder="Змінити"
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div onClick={togglePassInput} className="eye-ico cursor-pointer">
                                <img src={eye} alt="" />
                            </div>
                            { inputPassFlag ? <CheckPassword password={password} /> : <></> }
                            <NavLink to="#" className="changeEmail text-sm ml-6" onClick={() => setModalChangeEmail(true)}>Змінити Email</NavLink>
                            <NavLink to="#" className="changePassword text-sm ml-6" onClick={() => setShowChangePasswordModal(true)}>Змінити пароль</NavLink>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-80 h-12">
                            <Button type="submit" cssType="primary" label={'Зберігти зміни'} />
                        </div>
                        <NavLink to="#" className="text-base mt-2 ml-6" onClick={(e) => setModalRequestDelAccount(e, true)}>Видалити профіль</NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyData;
