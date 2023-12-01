import {useContext, useState} from 'react';
import { Context } from '../store';
import logo_lichylnyk from '../img/logo_lichylnyk.svg';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Modal from './modal/modal';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import ResetPassword from '../pages/auth/resetPassword';
import ModalRegister from './modalRegister/modalRegister';

const Header = () => {
    const [state] = useContext(Context);
    const [modalRegistration, setModalRegistration] = useState(false);
    const [modalAuthorization, setModalAuthorization] = useState(false);
    const [modalResetPass, setModalResetPass] = useState(false);

    const openModalRegistration = (e) => {
        e.stopPropagation();
        setModalRegistration(true);
    };
    const openModalAuthorization = (e) => {
        e.stopPropagation();
        setModalAuthorization(true);
    };
    const NotLoggedIn = () => {
        return (
            <>
                <NavLink to="#" className="py-2.5 px-5 mr-5 mb-2 text-sm font-medium rounded w-full text-black_figma bg-white_figma border border-yellow_figma" onClick={(e) => openModalAuthorization(e)}>
                    Увійти
                </NavLink>
                <NavLink to="#" className="py-2.5 px-5 mr-2 mb-2 text-sm rounded w-full text-white_figma bg-yellow_figma" onClick={(e) => openModalRegistration(e)}>
                    Зареєструватися
                </NavLink>
            </>
        );
    }

    const showLogin = () => {
        setModalRegistration(false);
        setModalAuthorization(true);
    }
    const showRegister = () => {
        setModalAuthorization(false);
        setModalRegistration(true);
    }
    const showResetPass = () => {
        setModalAuthorization(false);
        setModalResetPass(true);
    }

    return (
        <header>
            <div className="w-[1152px] mx-auto py-4 flex flex-wrap gap-24 items-center justify-between">
                <NavLink to="/">
                    <img src={logo_lichylnyk} alt="" />
                </NavLink>
                <div className="flex items-center justify-between underline underline-offset-4 decoration-0">
                    <ul className="flex flex-row p-0 mt-0 space-x-8 border-0">
                        <li>
                            <NavLink className="p-0 text-sm" to="/">Послуги</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-0 text-sm" to="/news">Новини</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-0 text-sm" to="/faq">Часті питання</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-0 text-sm" to="/about">Про нас</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-0 text-sm" to="/contacts">Контакти</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    { state.isLoggedIn ? <Logout /> : <NotLoggedIn />}
                </div>
            </div>
            {
                modalRegistration && (
                    <ModalRegister close={() => setModalRegistration(false)}>
                        <Register close={() => setModalRegistration(false)} showLogin={showLogin}/>
                    </ModalRegister>
                )
            }
            {
                modalAuthorization && (
                    <Modal close={() => setModalAuthorization(false)}>
                        <Login close={() => setModalAuthorization(false)} showRegister={showRegister} showResetPass={showResetPass}/>
                    </Modal>
                )
            }
            {
                modalResetPass && (
                    <Modal close={() => setModalResetPass(false)}>
                        <ResetPassword close={() => setModalResetPass(false)} />
                    </Modal>
                )
            }
        </header>
    );
};

export default Header;
