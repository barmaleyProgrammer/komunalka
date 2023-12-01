import { useState, useContext, useEffect } from 'react';
import { Context } from '../store';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { signOut } from '../api';
import iconMyAddress from './../img/menu_user/iconMyAddress.svg';
import iconMyData from './../img/menu_user/iconMyData.svg';
import iconNotification from './../img/menu_user/iconNotification.svg';
import iconExit from './../img/menu_user/iconExit.svg';

const Logout = () => {
    const [state, dispatch] = useContext(Context);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        window.addEventListener('mouseover', toggle);
    }, []);

    const LogOut = (event) => {
        event.preventDefault();
        signOut();
        dispatch({ type: 'logOut' });
        navigate('/');
    };

    const toggle = (e) => {
        const topLevel = e.target.closest('div#logOutBtn');
        if (topLevel) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <div className="relative" id="logOutBtn">
            <button className="py-2.5 px-2 text-sm font-medium rounded w-full text-white_figma bg-yellow_figma inline-flex items-center" type="button">
                {`${state.user.firstName} ${state.user.lastName}`}
            </button>
            <div className={`z-30 absolute bg-white_figma divide-y divide-gray-100 rounded-lg shadow w-44 ${show ? '':'hidden'}`} onClick={() => setShow(false)}>
                <ul className="py-2 text-base text-gray-700">
                    <li><NavLink to="/cabinet" className="flex px-4 py-2 hover:bg-gray-100">
                        <img src={iconMyAddress} alt=""/>
                        <p className="pl-3">Мої адреса</p>
                        </NavLink>
                    </li>
                    <li><NavLink to="/cabinet/myData" className="flex px-4 py-2 hover:bg-gray-100">
                        <img src={iconMyData} alt=""/>
                        <p className="pl-3">Мої дані</p>
                        </NavLink>
                    </li>
                    <li><NavLink to="/cabinet/notification" className="flex px-4 py-2 hover:bg-gray-100">
                        <img src={iconNotification} alt=""/>
                        <p className="pl-3">Оповіщення</p>
                        </NavLink>
                    </li>
                    <li><NavLink to="#" onClick={LogOut} className="flex px-4 py-2 hover:bg-gray-100">
                        <img src={iconExit} alt=""/>
                        <p className="pl-3">Вийти</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Logout;
