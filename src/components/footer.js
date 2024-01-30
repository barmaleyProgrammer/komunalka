import logo_lichylnyk from '../img/logo_lichylnyk.svg';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { Context } from "../store";
import { contactInfo } from "../api2";

const Footer = () => {
    const [state, dispatch] = useContext(Context);

    useEffect( () => {
        contactInfo().then((payload) => {
            dispatch({ type: 'contacts', payload });
        });
    }, []);

    return (
        <footer>
            <div className="w-[1152px] mx-auto py-6 flex flex-wrap gap-36 items-top justify-between">
                <div className="flex flex-col items-center">
                    <a href="https://komunalka.ua/">
                        <img src={logo_lichylnyk} className="mb-2" alt="kamunalka logo"/>
                    </a>
                    <div className="mb-1 mt-1 text-xs font-light">
                        <p className="mb-2 text-center">made by GERC</p>
                        <p>lichylnyk.com.ua © { new Date().getFullYear() }</p>
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
                        {
                            state.contacts.phones.map((item, key) => {
                                return (
                                    <li key={key} className="whitespace-nowrap mb-4"><a href={`tel:${item}`}></a>{ item }</li>
                                )
                            })
                        }
                        {
                            state.contacts.emails.map((item, key) => {
                                return (
                                    <li key={key} className="text-sm font-light"><a href={`mailto:${item}`}></a>{ item }</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-40 flex mt-4 justify-between">
                    {
                        state.contacts.socials.map((item, key) => {
                            return (
                                <a key={key} href={`${item.url}`}>
                                    <img src={ item.img } alt=""/>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </footer>
    );
}
export default Footer;
