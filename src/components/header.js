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
                <NavLink to="/auth/login" className="py-2.5 px-5 mr-5 mb-2 text-sm rounded w-full text-black_figma bg-white_figma border border-yellow_figma">
                    Увійти
                </NavLink>
                <NavLink to="/auth/register" className="py-2.5 px-5 mr-2 mb-2 text-sm rounded w-full text-white_figma bg-yellow_figma">
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
        </header>
    );
};

export default Header;
