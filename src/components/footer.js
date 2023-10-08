import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import {NavLink} from "react-router-dom";
import FB_icon from './../img/FB_icon.svg';
import instagram_icon from './../img/instagram_icon.svg';
import telegram_icon from './../img/telegram_icon.svg';
import viber_icon from './../img/viber_icon.svg';

const Footer = () => {
    return (
        <footer className="w-full py-6">
            <div className="grid grid-cols-4 gap-36 mx-auto">
                <div className="flex flex-col items-center">
                    <a href="https://komunalka.ua/">
                        <img src={logo_lichylnyk} className="h-[59px] w-[120px] mb-2" alt="kamunalka logo"/>
                    </a>
                    <div className="mb-1 mt-1 text-xs font-light">
                        <p className="mb-2 text-center">made by GERC</p>
                        <p>lichylnyk.com.ua © 2023</p>
                    </div>
                </div>
                <div>
                    <ul className="text-gray-500 font-medium text-xs space-y-2">
                        <li>
                            <NavLink to="/">Послуги</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">Новини</NavLink>
                        </li>
                        <li>
                            <NavLink to="faq">Часті питання</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">Про нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="contacts">Контакти</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-gray-500 font-light text-xs space-y-2">
                        <li className="mb-2 text-sm font-medium">
                            Контакти
                        </li>
                        <li>
                            <a href="tel:380449998877">+38 (044) - 999- 88- 77</a>
                        </li>
                        <li>
                            <a href="tel:380800666555">0 - 800 - 666- 555</a>
                        </li>
                        <li>
                            <a href="mailto:support@lichilnyk.com.ua">support@lichilnyk.com.ua</a>
                        </li>
                    </ul>
                </div>
                <div className="flex mt-4 space-x-4">
                    <a href="https://www.facebook.com/">
                        <img src={ FB_icon } alt=""/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={ instagram_icon } alt=""/>
                    </a>
                    <a href="https://web.telegram.org/">
                        <img src={ telegram_icon } alt=""/>
                    </a>
                    <a href="https://www.viber.com/">
                        <img src={ viber_icon } alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
