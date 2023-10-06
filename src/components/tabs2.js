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
        <ul className="flex flex-row p-0 mt-0 font-medium space-x-8 border-0">
            {/*<li><NavLink to={`/counters/${objectId}`} className="text-sm p-0">Мої лічильники</NavLink></li>*/}
            {/*<li><NavLink to={`/counters/${objectId}/history`} className="text-sm p-0">Історія показань</NavLink></li>*/}
            {/*<li><NavLink to={`/counters/${objectId}/graphsTables`} className="text-sm p-0">Графіки споживань</NavLink></li>*/}

            { links.map((item, key) => {
                const active = (item.url === window.location.pathname);
                return (
                    <li key={key}>
                        <NavLink to={item.url} className={`py-2.5 px-5 text-base font-light rounded text-black_figma ${active ? 'bg-[#CEDDE9]' : ''}`}>
                            {item.name}
                        </NavLink>
                    </li>
                );
            }) }
        </ul>
    );
};

export default Tabs2;
