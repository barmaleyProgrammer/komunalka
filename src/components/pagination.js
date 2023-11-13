
const Pagination = ({ newsPerPage, totalNews, paginate }) => {
    const newsNumber = []
    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        newsNumber.push(i)
    }

    return (
        <div className="">
            <ul className="pagination flex-row flex justify-center">
                {
                    newsNumber.map(number =>
                        (
                            <li className="px-4" key={number}>
                                <a className="font-bold" href="#" onClick={() => paginate(number)}>
                                    {
                                        number
                                    }
                                </a>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;