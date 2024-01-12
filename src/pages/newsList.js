import {NavLink} from 'react-router-dom';
import moment from 'moment';
import {useEffect, useState} from 'react';
import {newsList} from '../api2';
import Pagination from '../components/pagination';

const NewsList = ({ showPagination = true, perPage = 6 }) => {

    useEffect( () => {
        newsList().then((result) => setNews_cms(result));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const lastNewsIndex = currentPage * perPage;
    const firstNewsIndex = lastNewsIndex - perPage;
    const [news_cms, setNews_cms] = useState([]);
    const result = news_cms.slice(firstNewsIndex, lastNewsIndex);



    return (
        <div>
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
            { showPagination && <Pagination perPage={perPage} total={news_cms.length} paginate={setCurrentPage} currentPage={currentPage} /> }
        </div>
    );
};

export default NewsList;