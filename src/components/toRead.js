import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrowLeftCurrentNews from '../img/arrowLeftCurrentNews.svg';
import arrowRightCurrentNews from '../img/arrowRightCurrentNews.svg';
import list_imgs from '../newsList';

const newsPerPage = 3;

const ToRead = () => {
    const [currentPage, setCurrentPage] = useState(1);

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
        const result = news.slice(firstNewsIndex, lastNewsIndex);

        return (
            <div className="grid grid-cols-3 mb-8 gap-x-5">
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
        <>
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl mt-2 mb-4 font-medium">Радимо почитати</h2>
                <PaginationCurrentNews
                    total={list_imgs.length}
                    perPage={newsPerPage}
                    currentPage={currentPage}
                    paginate={setCurrentPage}
                />
            </div>
            <hr className="w-full text-borderColor mb-2" />
            <NewsList
                news={list_imgs}
                perPage={newsPerPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default ToRead;
