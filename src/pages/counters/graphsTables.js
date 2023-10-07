import {useContext, useState} from 'react';
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import  'react-calendar/dist/Calendar.css' ;
import {Context} from "../../store";

const GraphsTables = () => {
    const { objectId } = useParams();
    const [state] = useContext(Context);
    const address = state.addresses.find((item) => item.objectId == objectId);
    const [counters, setCounters] = useState([]);
    // const [address, setAddress] = useState({});

    const breadCrumbs = [
        {
            "to": '/',
            "label": 'Головна'
        },
        {
            "to": '/cabinet',
            "label": 'Особистий кабінет'
        },
        {
            "to": '/cabinet',
            "label": 'Мої адреси'
        },
        {
            "to": `/counters/${objectId}`,
            "label": 'Лічильники'
        },
        {
            "to": '',
            "label": 'Графіки споживань'
        },
    ]

    return (
        <div className="w-[1152px] mx-auto px-20 font-normal mt-2 mb-4 max-w-screen-xl">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes />
            <div className="mt-5 py-4 px-10 h-auto rounded-lg shadow-myCustom">
                <h3 className="py-4 text-xl text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <Tabs2 objectId={objectId} />
                </div>
                <div className="text-sm py-4 space-y-2">
                    <p>Підприємство: xxxx</p>
                    <p>Послуга: xxxx</p>
                    <p>Номер лічильників: xxxx</p>
                </div>
                <div className="border-collapse border rounded-xl py-10 px-10 border-[#E7E7E7]">
                    <h4 className="text-lg font-normal mt-0 mb-4">Таблиця споживання</h4>
                    <table className="w-1/2 border-collapse border-black_figma">
                        <thead>
                        <tr>
                            <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">Період</td>
                            <td className="border-[#E7E7E7] font-normal border-b text-sm p-2">13573101</td>
                        </tr>
                        </thead>
                        {counters.map((item, index) =>
                            <tbody key={index}>
                            <tr>
                                <td className="border-[#E7E7E7] font-normal border-r p-2">Червень 2023</td>
                                <td className="border-[#E7E7E7] font-normal text-sm p-2">127</td>
                            </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GraphsTables;
