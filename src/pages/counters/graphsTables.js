import { useEffect, useState, useContext } from 'react';
import { useParams, NavLink } from "react-router-dom";
import { Context } from "../../store";
import api from "../../api";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' ;
import Modal from '../../components/modal/modal';
import moment from 'moment';
import MySelect from "../../components/MySelect";
import Loader from "../../components/Loader/loader";
import { UniqueServiceTypes, UniqueProviders } from "./utils";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const GraphsTables = () => {
    const { objectId } = useParams();
    const [state, dispatch] = useContext(Context);

    const [counters, setCounters] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [providers, setProviders] = useState([]);

    const address = state.addresses.find((item) => item.objectId === objectId);
    const [showCalendar1, setShowCalendar1] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [view, setView] = useState('table');

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
            setIsLoading(true);
            const dateStart = moment(state.startDate).format('YYYY-MM-DD');
            const dateEnd = moment(state.endDate).format('YYYY-MM-DD');
            api.getCountersHistory(objectId, dateStart, dateEnd).then((result) => {
                setCounters(result);
                const serviceTypes = UniqueServiceTypes(result);
                setServiceTypes(serviceTypes);
                const providers = UniqueProviders(result);
                setProviders(providers);
            }).finally(() => setIsLoading(false));
        };
        fetchData();
    }, [objectId, state.startDate, state.endDate]);

    useEffect(() => {
        const providers = UniqueProviders(counters, state.serviceType);
        setProviders(providers);
    }, [state.serviceType]);

    useEffect(() => {
        const filteredData = counters?.filter((item) => {
            if (!state.serviceType) {
                return true;
            } else {
                return (item.serviceType == state.serviceType)
            }
        }).filter((item) => {
            if (!state.provider) {
                return true;
            } else {
                return (item.idFirme == state.provider)
            }
        });
        setFilteredData(filteredData);
    }, [counters, state.serviceType, state.provider]);

    const TableView = ({items}) => {
        return (
            <table className="border-collapse border-black_figma">
                <caption className="text-lg font-normal mt-0 mb-4">Таблиця споживання</caption>
                <thead>
                <tr>
                    <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">Період</td>
                    <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">oldValue</td>
                    <td className="border-[#E7E7E7] text-sm border-l-0 border-b border-r p-2">newValue</td>
                    <td className="border-[#E7E7E7] font-normal border-b text-sm p-2">{`${moment(state.startDate).format('DD.MM.YYYY')} - ${moment(state.endDate).format('DD.MM.YYYY')}`}</td>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="border-[#E7E7E7] font-normal border-r p-2">{moment(item.newTransmissionTime).format('DD.MM.YYYY')}</td>
                                <td className="border-[#E7E7E7] font-normal border-r p-2">{(item.oldValue)}</td>
                                <td className="border-[#E7E7E7] font-normal border-r p-2">{(item.newValue)}</td>
                                <td className="border-[#E7E7E7] font-normal text-sm p-2">{(Number(item.newValue) - Number(item.oldValue)).toFixed(2) }</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }

    const ChartView = ({items}) => {
        const options = {
            responsive: true,
            plugins: {
                legend: false,
                title: {
                    display: true,
                    text: 'Графік споживання',
                },
            },
        };
        const data = {
            labels: items.map((item) => moment(item.newTransmissionTime).format('DD.MM.YYYY')),
            fill: true,
            tension: 1,
            datasets: [
                {
                    data: items.map((item) => (Number(item.newValue) - Number(item.oldValue)).toFixed(2)),
                    borderColor: '#FD9800',
                }
            ],
        };

        return (
            <Line options={options} data={data} />
        );
    }


    return (
        <div className="font-normal mb-4">
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes types={serviceTypes} />
            <div className="mt-5 py-4 px-10 h-auto rounded-lg shadow-myCustom">
                <h3 className="py-4 text-xl text-center">Лічильники</h3>
                <Tabs2 objectId={objectId} />
                <div className="my-4 flex flex-row font-medium space-x-8">
                    <div className="p-2 text-sm rounded text-[#FD9800] bg-[#F7F9FE] cursor-pointer" onClick={() => setShowCalendar1(true)}>
                        початкова дата {moment(state.startDate).format('DD.MM.YYYY')}
                    </div>
                    <div className="p-2 text-sm rounded text-[#FD9800] bg-[#F7F9FE] cursor-pointer" onClick={() => setShowCalendar2(true)}>
                        кінцева дата {moment(state.endDate).format('DD.MM.YYYY')}
                    </div>
                    <div>
                        <MySelect options={providers} defaultValue={"Оберіть постачальника"} />
                    </div>
                </div>
                {
                    isLoading
                        ? <Loader />
                        : <>
                            <div className="text-sm my-4 flex flex-row justify-between">
                                <div className="space-y-2">
                                    <p>Підприємство: xxxx</p>
                                    <p>Послуга: xxxx</p>
                                    <p>Номер лічильників: xxxx</p>
                                </div>
                                <div>
                                    <NavLink to="#" className="text-xs font-light" onClick={() => setView('chart')}>Графік</NavLink>
                                    <NavLink to="#" className="ml-2 text-xs font-light" onClick={() => setView('table')}>Таблиця</NavLink>
                                </div>
                            </div>
                            <div className="border-collapse border rounded-xl py-10 px-10 border-[#E7E7E7]">
                                {
                                    view === 'table'
                                    ? <TableView items={filteredData} />
                                    : <ChartView items={filteredData} />
                                }
                            </div>
                        </>
                }
            </div>
            {
                showCalendar1 && (
                    <Modal close={() => setShowCalendar1(false)}>
                        <div className="pt-12 px-6 pb-6">
                            <Calendar onChange={(e) => {
                                dispatch({ type: 'startDate', payload: e });
                                setShowCalendar1(false);
                            }} value={state.startDate} />
                        </div>
                    </Modal>
                )
            }
            {
                showCalendar2 && (
                    <Modal close={() => setShowCalendar2(false)}>
                        <div className="pt-12 px-6 pb-6">
                            <Calendar onChange={(e) => {
                                dispatch({ type: 'endDate', payload: e });
                                setShowCalendar2(false);
                            }} value={state.endDate} />
                        </div>
                    </Modal>
                )
            }
        </div>
    );
};

export default GraphsTables;
