import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({items}) => {
    const itemLink = (item) => {
        return (
            <NavLink to={item.to} className="inline-flex items-center">
                {item.label}
                <svg className="w-3 h-3 mx-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" d="m1 9 4-4-4-4"/>
                </svg>
            </NavLink>
        );
    };

    return (
        <nav className="flex">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => {
                    return (
                        <li className="inline-flex text-[#797878] items-center text-xs" key={index}>
                            {item.to ? itemLink(item) : item.label}
                    </li>)
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
