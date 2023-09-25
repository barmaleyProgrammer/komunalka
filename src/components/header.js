import { useContext } from "react";
import { Context } from "../store";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
    const [state] = useContext(Context);
    const NotLoggedIn = () => {
        return (
            <>
                <NavLink to="/auth/login" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded w-full text-black_figma bg-white_figma border border-yellow_figma">
                    Увійти
                </NavLink>
                <NavLink to="/auth/register" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium rounded w-full text-white_figma bg-yellow_figma">
                    Зареєструватися
                </NavLink>
            </>
        );
    }

    return (
        <header className="w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/">
                    <img src={logo_lichylnyk} className="h-8 mr-3" alt="Flowbite Logo" />
                </NavLink>
                <div className="flex md:order-2">
                    { state.isLoggedIn ? <Logout /> : <NotLoggedIn />}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="/main">Послуги</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="/news">Новини</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="/faq">Часті питання</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="/about">Про нас</NavLink>
                        </li>
                        <li>
                            <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="/contacts">Контакти</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink className="py-2 pl-3 pr-4 text-sm text-white bg-black rounded md:bg-transparent md:p-0" to="cabinet">Особистий кабінет</NavLink>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
