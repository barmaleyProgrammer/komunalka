import { useState } from 'react';
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import  'react-calendar/dist/Calendar.css' ;

const GraphsTables = () => {
    const { objectId } = useParams();
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
        <div className="font-light mt-2 mx-auto w-[1152px] px-20">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <div className="mt-[34px]">
                <p className="text-[16px]">Лічильники</p>
            </div>
            <ServiceTypes />
            <div className="mt-[24px] py-4 px-[58px] h-auto rounded-lg shadow-myCustom ">
                <h3 className="py-4 text-sm text-center">Лічильники</h3>
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
