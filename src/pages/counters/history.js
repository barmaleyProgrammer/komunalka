import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
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

const History = () => {
    const { objectId } = useParams();
    const [state, dispatch] = useContext(Context);

    const [counters, setCounters] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const [providers, setProviders] = useState([]);
    const address = state.addresses.find((item) => item.objectId === objectId);
    const [showCalendar1, setShowCalendar1] = useState(false);
    const [showCalendar2, setShowCalendar2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
            "label": 'Історія показань'
        },
    ];

    useEffect( () => {
        const fetchData = () => {
            const dateStart = moment(state.startDate).format('YYYY-MM-DD');
            const dateEnd = moment(state.endDate).format('YYYY-MM-DD');
            setIsLoading(true);
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


    const CounterBlock = ({item}) => {
        return (
            <div className="my-4 p-4 flex items-stretch gap-x-4 rounded-lg border border-borderColor">
                <div className="w-2/3">
                    <div className="text-xs">Лічильник №{item.counterNo}</div>
                    <div className="text-sm">{item.abcounter}<br/>{item.nameFirme}<br/>{item.namePlat}</div>
                </div>
                <div className="w-44 pt-4 text-right">{Number(item.newValue).toFixed(2)}</div>
                <div className="w-44 pt-4 text-right">{moment(item.newTransmissionTime).format('DD.MM.YYYY')}</div>
            </div>
        );
    };

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
                    : <div>
                            {
                                counters?.filter((item) => {
                                    if (!state.serviceType) {
                                        return true;
                                    } else {
                                        return (item.serviceType == state.serviceType)
                                    }
                                })
                                .filter((item) => {
                                    if (!state.provider) {
                                        return true;
                                    } else {
                                        return (item.idFirme == state.provider)
                                    }
                                })
                                .map((item, key) => <CounterBlock item={item} key={`CounterBlock_${key}`} />)
                            }
                        </div>
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

export default History;
