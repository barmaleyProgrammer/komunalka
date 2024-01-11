import { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import ToRead from '../components/toRead';
import { getNews } from "../api2";
import moment from "moment";

const CurrentNews = ({ id }) => {
    const [news, setNews] = useState({});
    useEffect( () => {
        getNews(id).then((result) => setNews(result));
    }, []);
    return (
        <>
            <h1 className="mt-5 text-2xl">{news.title}</h1>
            <p className="text-sm font-extralight mt-4">{moment(news.publish_date).format('DD.MM.YYYY')}</p>
            <img className="mt-4" src={news.banner} alt=""/>
            <div className="w-[956px] mx-auto">
                {news.body}
                <img className="mt-4" src={news.main_photo} alt=""/>
                <h2 className="text-xl mt-2">Як передати показання лічильника води?</h2>
                <p className="mt-4 font-light">Є кілька способів. Найзручніший варіант — зняти показання
                    лічильника холодної води та приладу для обліку гарячої та передати дані постачальнику послуги
                    через інтернет за допомогою сервісу LICHYLNYK. Сервіс надає змогу передавати інформацію про
                    фактичне споживання води, газу та електроенергії в режимі он-лайн.</p>
                <p className="mt-8 font-light">Ця функція доступна в особистому кабінеті.
                    Щоб скористатися послугою, слід пройти просту процедуру реєстрації на сайті Лічильник.</p>
            </div>
            <div className="w-[305px] h-12 mx-auto mt-5 mb-5">
                <NavLink to="/cabinet" className="py-3.5 px-5 mr-2 mb-2 text-sm rounded text-white_figma bg-yellow_figma">
                    Передати показання лічильників
                </NavLink>
            </div>
            <ToRead />
        </>
    );
}

export default CurrentNews;
