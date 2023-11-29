import logo_lichylnyk from '../img/logo_lichylnyk.svg';
import {NavLink} from 'react-router-dom';
import FB_icon from './../img/FB_icon.svg';
import instagram_icon from './../img/instagram_icon.svg';
import telegram_icon from './../img/telegram_icon.svg';
import viber_icon from './../img/viber_icon.svg';

const Footer = () => {
    return (
        <footer>
            <div className="w-[1152px] mx-auto py-6 flex flex-wrap gap-36 items-top justify-between">
                <div className="flex flex-col items-center">
                    <a href="https://komunalka.ua/">
                        <img src={logo_lichylnyk} className="mb-2" alt="kamunalka logo"/>
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
                <div className="w-40 flex mt-4 justify-between">
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
