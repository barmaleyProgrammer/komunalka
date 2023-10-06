import { NavLink } from "react-router-dom";

const Tabs2 = ({ objectId }) => {
    const links = [
        {
            url: `/counters/${objectId}`,
            name: 'Мої лічильники'
        },
        {
            url: `/counters/${objectId}/history`,
            name: 'Історія показань'
        },
        {
            url: `/counters/${objectId}/graphsTables`,
            name: 'Графіки споживань'
        },
    ];

    return (
        <ul className="flex flex-row p-0 mt-0 space-x-8 border-0">
            {
                links.map((item, key) => {
                    const active = (item.url === window.location.pathname);
                    return (
                        <li key={key} className={`p-2 text-sm font-light rounded text-black_figma ${active ? 'bg-[#CEDDE9]' : ''}`}>
                            <NavLink to={item.url}>
                                {item.name}
                            </NavLink>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default Tabs2;
