import arrow_right from "../img/arrow_right.svg";
import arrow_left from "../img/arrow_left.svg";

const Pagination = ({ newsPerPage, totalNews, paginate, currentPage }) => {
    const newsNumber = []
    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        newsNumber.push(i)
    }

    const nextPage = () => {
        const val = currentPage + 1;
        if (newsNumber.length >= val) {
            paginate(val);
        }
    };

    const prevPage = () => {
        const val = currentPage - 1;
        if (val > 0) {
            paginate(val);
        }
    }

    return (
        <div className="relative">
            <ul className="pagination flex-row flex justify-center">
                {
                    newsNumber.map(number =>
                        (
                            <li className="px-4" key={number}>
                                <a style={(number === currentPage) ? {color: 'blue'} : {}} href="#" onClick={() => paginate(number)}>
                                    {
                                        number
                                    }
                                </a>
                            </li>
                    ))
                }
            </ul>
            <img className="arrow_next_news" src={arrow_left} alt="" onClick={nextPage}/>
            <img className="arrow_prev_news" src={arrow_right} alt="" onClick={prevPage}/>
        </div>
    );
};

export default Pagination;