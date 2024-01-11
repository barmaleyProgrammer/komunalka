import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import arrowLeftCurrentNews from '../img/arrowLeft.svg';
import arrowRightCurrentNews from '../img/arrowRight.svg';
import {newsList} from "../api2";
import moment from "moment";

const newsPerPage = 3;

const ToRead = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [news_cms, setNews_cms] = useState([]);

    useEffect( () => {
        newsList().then((result) => setNews_cms(result));
    }, []);

    const PaginationCurrentNews = ({ total, perPage, currentPage, paginate }) => {
        const pageCount = Math.ceil(total / perPage);

        const next = () => {
            const val = currentPage + 1;
            if (pageCount >= val) {
                paginate(val);
            }
        };

        const prev = () => {
            const val = currentPage - 1;
            if (val > 0) {
                paginate(val);
            }
        }

        return (
            <div className="flex flex-row items-center justify-between gap-x-2">
                <img className={` ${ currentPage === 1 ? 'hidden' : 'cursor-pointer'}`} src={arrowLeftCurrentNews} alt="" onClick={ prev }/>
                <img className={` ${ currentPage < pageCount ? 'cursor-pointer' : 'hidden'}`} src={arrowRightCurrentNews} alt="" onClick={ next }/>
            </div>
        );

    };

    const NewsList = ({ news, currentPage, perPage }) => {
        const lastNewsIndex = currentPage * perPage;
        const firstNewsIndex = lastNewsIndex - perPage;
        const result = news_cms.slice(firstNewsIndex, lastNewsIndex);

        return (
            <div className="grid grid-cols-3 mb-8 gap-x-5">
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
        );
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl mt-2 mb-4 font-medium">Радимо почитати</h2>
                <PaginationCurrentNews
                    total={news_cms.length}
                    perPage={newsPerPage}
                    currentPage={currentPage}
                    paginate={setCurrentPage}
                />
            </div>
            <hr className="w-full text-borderColor mb-2" />
            <NewsList
                news={news_cms}
                perPage={newsPerPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default ToRead;
