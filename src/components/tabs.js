import { NavLink } from "react-router-dom";
const Tabs = () => {
    const links = [
        {
            url: '/cabinet',
            name: 'Мої адреси'
        },
        {
            url: '/cabinet/myData',
            name: 'Мої дані'
        },
        {
            url: '#',
            name: 'Оповіщення'
        },
    ];
    return (
        <ul className="flex flex-row p-0 m-0 font-medium rounded-lg bg-gray-50 space-x-8 border-0">
            { links.map((item, key) => {
                const active = (item.url === window.location.pathname);
                return (
                    <li key={key}>
                        <NavLink to={item.url} className={`py-2.5 px-5 text-sm font-medium rounded text-black_figma ${active ? 'bg-[#CEDDE9]' : ''}`}>
                            {item.name}
                        </NavLink>
                    </li>
                );
            }) }
        </ul>
    );
};

export default Tabs;
