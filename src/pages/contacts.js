import Breadcrumbs from "../components/breadcrumbs";
import FB_icon from "../img/FB_icon.svg";
import instagram_icon from "../img/instagram_icon.svg";
import telegram_icon from "../img/telegram_icon.svg";
import viber_icon from "../img/viber_icon.svg";

const Contacts = () => {
    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '',
            "label": 'Контакти'
        },
    ]
    return (
        <>
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="text-2xl mt-4">Контакти</h2>
            <div className="flex gap-80">
                <div className=" mt-4">
                    <p className="text-lg mb-4">Телефон</p>
                    <div className="text-sm font-light gap-y-3">
                        <ul>
                            <li className="whitespace-nowrap mb-4"><a href="tel:380449998877">+38 (044) - 999- 88- 77</a></li>
                            <li><a href="tel:380800666555">0 - 800 - 666- 555</a></li>
                        </ul>
                    </div>

                </div>
                <div className=" mt-4">
                    <p className="text-lg mb-4">Email</p>
                    <a className="text-sm font-light" href="mailto:support@lichilnyk.com.ua">support@lichilnyk.com.ua</a>
                </div>
                <div className=" mt-4">
                    <p className="text-lg mb-4 whitespace-nowrap">Соціальні мережі</p>
                    <div className="flex space-x-4">
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
            </div>
        </>
    );
};

export default Contacts;
