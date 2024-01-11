import Breadcrumbs from '../components/breadcrumbs';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Pagination from '../components/pagination';
import CurrentNews from './currentNews';
import { newsList } from "../api2";
import moment from "moment/moment";

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Новини'
    },
];
const newsPerPage = 3;

const News = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [news_cms, setNews_cms] = useState([]);

    useEffect( () => {
        newsList().then((result) => setNews_cms(result));
    }, []);

    const NewsList = ({ news, currentPage, perPage }) => {
        const lastNewsIndex = currentPage * perPage;
        const firstNewsIndex = lastNewsIndex - perPage;
        const result = news_cms.slice(firstNewsIndex, lastNewsIndex);

        return (
            <div>
                <h2 className="pt-3 font-medium text-2xl">Новини</h2>
                <div className="grid grid-cols-3 mb-8">
                    {
                    result.map((item, key) => {
                            return (
                                <div key={key}>
                                    <NavLink to={`/news/${item.id}`}>
                                        <img className="rounded-lg mt-4 w-[369px] h-[266px]" src={item.banner} alt=""/>
                                        <p className="text-[#ABABAB] text-sm py-2">{moment(item.publish_date).format('DD.MM.YYYY')}</p>
                                        <h2>{item.title}</h2>
                                    </NavLink>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    };

    return (
        <div>
            <Breadcrumbs items={ breadCrumbs } />
            { id ? <CurrentNews id={id} />
                :
                <div>
                    <NewsList
                        news={news_cms}
                        perPage={newsPerPage}
                        currentPage={currentPage} />
                    <Pagination
                        perPage={newsPerPage}
                        total={news_cms.length}
                        paginate={setCurrentPage}
                        currentPage={currentPage} />
                </div>
            }
        </div>
    )
};
export default News;
