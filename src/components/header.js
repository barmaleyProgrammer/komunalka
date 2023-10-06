import {useContext, useState} from "react";
import { Context } from "../store";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
// import AddAddress from "../pages/cabinet/addAddress";
import Modal from "./modal/modal";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";

const Header = () => {
    const [state] = useContext(Context);
    const [modalRegistration, setModalRegistration] = useState(false);
    const [modalAuthorization, setModalAuthorization] = useState(false);

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
                <NavLink to="#" className="py-2.5 px-5 mr-5 mb-2 text-sm rounded w-full text-black_figma bg-white_figma border border-yellow_figma" onClick={(e) => openModalAuthorization(e)}>
                    Увійти
                </NavLink>
                <NavLink to="#" className="py-2.5 px-5 mr-2 mb-2 text-sm rounded w-full text-white_figma bg-yellow_figma" onClick={(e) => openModalRegistration(e)}>
                    Зареєструватися
                </NavLink>
            </>
        );
    }

    return (
        <header>
            <div className="flex flex-wrap gap-24 items-center justify-center mx-auto p-4">
                <NavLink to="/">
                    <img src={logo_lichylnyk} className="mr-3" alt="" />
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
            <Modal active={modalRegistration} setActive={setModalRegistration}>
                <Register close={() => setModalRegistration(false)}/>
            </Modal>
            <Modal active={modalAuthorization} setActive={setModalAuthorization}>
                <Login close={() => setModalAuthorization(false)}/>
            </Modal>
        </header>
    );
};

export default Header;
