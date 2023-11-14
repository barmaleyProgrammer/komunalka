import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState} from "react";
import Pagination from "../components/pagination";
import CurrentNews from "./currentNews";

const list_imgs = [
    { image: '/news/News1.png',
        news: '1'},
    { image: '/news/News2.png',
        news: '2'},
    { image: '/news/News3.png',
        news: '3' },
    { image: '/news/News4.png',
        news: '4' },
    { image: '/news/News5.png',
        news: '5' },
    { image: '/news/News6.png',
        news: '6' },
    { image: '/news/News7.png',
        news: '7' },
    { image: '/news/News8.png',
        news: '8' },
    { image: '/news/News9.png',
        news: '9' },
    { image: '/news/News10.png',
        news: '10' },
    { image: '/news/News11.png',
        news: '11' },
    { image: '/news/News12.png',
        news: '12' },
    { image: '/news/News13.png',
        news: '13' },
    { image: '/news/News14.png',
        news: '14' },
    { image: '/news/News15.png',
        news: '15' },
];

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '',
        "label": 'Новини'
    },
];

const News = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(6);

    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;
    const newsOnPage = list_imgs.slice(firstNewsIndex, lastNewsIndex);
    // console.log(newsOnPage);
    const paginate = newsNumber => setCurrentPage(newsNumber)

    const NewsList = () => {
        return (
            <div className="grid grid-cols-3 mb-8">
                {
                    newsOnPage.map((item, key) => {
                        return (
                            <div key={key}>
                                <NavLink to={`/news/${key}`}>
                                    <h2>новина № {item.news}</h2>
                                    <img className="rounded-lg mt-4" src={item.image} alt=""/>
                                </NavLink>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    return (
        <div>
            <Breadcrumbs items={ breadCrumbs } />
            { id ? <CurrentNews />
                :
                <div>
                    <NewsList />
                    <Pagination newsPerPage={newsPerPage} totalNews={list_imgs.length} paginate={paginate} currentPage={currentPage} />
                </div>
            }
        </div>
    )
};
export default News;
