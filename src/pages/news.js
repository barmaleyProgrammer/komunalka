import Breadcrumbs from "../components/breadcrumbs";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState} from "react";
import Pagination from "../components/pagination";
import CurrentNews from "./currentNews";
import list_imgs from "../newsList";

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
const newsPerPage = 6;

const News = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    const NewsList = ({ news, currentPage, perPage }) => {
        const lastNewsIndex = currentPage * perPage;
        const firstNewsIndex = lastNewsIndex - perPage;
        const result = news.slice(firstNewsIndex, lastNewsIndex);

        return (
            <div className="grid grid-cols-3 mb-8">
                {
                    result.map((item, key) => {
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
            { id ? <CurrentNews id={id} />
                :
                <div>
                    <NewsList
                        news={list_imgs}
                        perPage={newsPerPage}
                        currentPage={currentPage} />
                    <Pagination
                        perPage={newsPerPage}
                        total={list_imgs.length}
                        paginate={setCurrentPage}
                        currentPage={currentPage} />
                </div>
            }
        </div>
    )
};
export default News;
