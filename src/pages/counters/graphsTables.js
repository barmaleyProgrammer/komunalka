import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from "../../store";
import { NavLink } from "react-router-dom";
import api from "../../api";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import  'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Loader from "../../components/Loader/loader";

const GraphsTables = () => {
    const { objectId } = useParams();
    const [state] = useContext(Context);
    const [counters, setCounters] = useState([]);
    const address = state.addresses.find((item) => item.objectId == objectId);
    const [startDate, setStartDate] = useState(moment('2020-01-01 00:00:00'));
    const [endDate, setEndDate] = useState(moment().endOf('month'));
    const [loading, setLoading] = useState(true);
    const [serviceTypes, setServiceTypes] = useState([]);

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

    useEffect( () => {
        const fetchData = () => {
            setLoading(true);
            const dateStart = moment(startDate).format('YYYY-MM-DD');
            const dateEnd = moment(endDate).format('YYYY-MM-DD');
            api.getCountersHistory(objectId, dateStart, dateEnd).then((result) => {
                setCounters(result);
                const types = result
                    .map((item) => Number(item.serviceType))
                    .filter((item, i, ar) => ar.indexOf(item) === i);
                setServiceTypes(types);
                setLoading(false);
            });
        };
        fetchData();
    }, []);

    return (
        <div className="font-light mt-2 mx-auto w-[1152px] px-20">
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes types={serviceTypes} />
            <div className="mt-[24px] py-4 px-[58px] h-auto rounded-lg shadow-myCustom ">
                <h3 className="py-4 text-sm text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <Tabs2 objectId={objectId} />
                </div>
                {loading
                    ? <div className="flex p-10 justify-center"><Loader /></div>
                    : <>
                        <div className="text-sm py-4 space-y-2">
                            <p>Підприємство: xxxx</p>
                            <p>Послуга: xxxx</p>
                            <p>Номер лічильників: xxxx</p>
                        </div>
                        <div className="border-collapse border rounded-xl py-10 px-10 border-[#E7E7E7]">
                            <table className="border-collapse border-black_figma">
                                <caption className="text-lg font-normal mt-0 mb-4">Таблиця споживання</caption>
                                <thead>
                                <tr>
                                    <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">Період</td>
                                    <td className="border-[#E7E7E7] font-normal border-b text-sm p-2">{`${moment(startDate).format('DD.MM.YYYY')} - ${moment(endDate).format('DD.MM.YYYY')}`}</td>
                                </tr>
                                </thead>
                                {
                                    counters?.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td className="border-[#E7E7E7] font-normal border-r p-2">{moment(item.newTransmissionTime).format('DD.MM.YYYY')}</td>
                                                <td className="border-[#E7E7E7] font-normal text-sm p-2">{(Number(item.newValue) - Number(item.oldValue)).toFixed(2) }</td>
                                            </tr>
                                            </tbody>
                                        );
                                    })
                                }
                            </table>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default GraphsTables;
