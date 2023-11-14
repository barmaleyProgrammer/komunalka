import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState} from "react";
import Pagination from "../components/pagination";
import CurrentNews from "./currentNews";

const list_imgs = [
    { image: '/news/News1.png' },
    { image: '/news/News2.png' },
    { image: '/news/News3.png' },
    { image: '/news/News4.png' },
    { image: '/news/News5.png' },
    { image: '/news/News6.png' },
    { image: '/news/News7.png' },
    { image: '/news/News8.png' },
    { image: '/news/News9.png' },
    { image: '/news/News10.png' },
    { image: '/news/News11.png' },
    { image: '/news/News12.png' },
    { image: '/news/News13.png' },
    { image: '/news/News14.png' },
    { image: '/news/News15.png' },
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
