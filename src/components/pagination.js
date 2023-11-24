import arrow_right from "../img/arrow_right.svg";
import arrow_left from "../img/arrow_left.svg";
// https://www.youtube.com/watch?v=s59kRbD4Sw8&t=934s

const Pagination = ({ perPage, total, paginate, currentPage }) => {
    const pages = []
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pages.push(i)
    }

    const next = () => {
        const val = currentPage + 1;
        if (pages.length >= val) {
            paginate(val);
        }
    };

    const prev = () => {
        const val = currentPage - 1;
        if (val > 0) {
            paginate(val);
        }
    }

    const goto = (event, page) => {
        event.preventDefault();
        paginate(page);
    };

    return (
        <div className="flex-row flex justify-center">
            <img className="cursor-pointer" src={arrow_right} alt="" onClick={ prev } />
            <ul className="flex-row flex justify-center mx-20">
                {
                    pages.map((number, key) => (
                        <li className="px-4 text-sm font-medium" key={key}>
                            <a href="#"
                                style={(number === currentPage) ? {color: '#2A3744'} : {color: '#ABABAB'}}
                                onClick={(event) => goto(event, number)}
                            >{ number }</a>
                        </li>
                    ))
                }
            </ul>
            <img className="cursor-pointer" src={arrow_left} alt="" onClick={ next } />
        </div>
    );
};

export default Pagination;
