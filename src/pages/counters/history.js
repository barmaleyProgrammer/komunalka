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

const History = () => {
    const { objectId } = useParams();
    const [state] = useContext(Context);
    const [counters, setCounters] = useState([]);
    const [firms, setFirms] = useState([]);
    const [firm, setFirm] = useState('');
    const address = state.addresses.find((item) => item.objectId === objectId);
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const [startDate, setStartDate] = useState(moment().startOf('year'));
    const [endDate, setEndDate] = useState(moment().endOf('month'));
    const [serviceTypes, setServiceTypes] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [serviceType, setServiceType] = useState(null);

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
    ]

    useEffect( () => {
        const fetchData = async () => {
            const dateStart = moment(startDate).format('YYYY-MM-DD');
            const dateEnd = moment(endDate).format('YYYY-MM-DD');
            setIsPostLoading(true);
            api.getCountersHistory(objectId, dateStart, dateEnd).then((result) => {
                setCounters(result);
                const types = result
                    .map((item) => Number(item.serviceType))
                    .filter((item, i, ar) => ar.indexOf(item) === i);
                setServiceTypes(types);
                let firms = result
                    .filter((item) => item.idFirme !== null)
                    .map((item) => {
                        return {
                            label: item.nameFirme,
                            value: item.idFirme
                        }
                    });
                firms = Array.from(new Set(firms.map(JSON.stringify))).map(JSON.parse);
                setFirms(firms);
                setIsPostLoading(false);
            });
        };
        fetchData();
    }, [objectId, startDate, endDate]);

    const setDate1 = (e) => {
        setStartDate(e);
        setModalActive1(false);
    };
    const setDate2 = (e) => {
        setEndDate(e);
        setModalActive2(false);
    };

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
        <div className="font-normal mb-4 max-w-screen-xl">
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes types={serviceTypes} setServiceType={setServiceType} serviceType={serviceType} />
            <div className="mt-5 py-4 px-10 h-auto rounded-lg shadow-myCustom">
                <h3 className="py-4 text-xl text-center">Лічильники</h3>
                <Tabs2 objectId={objectId} />
                <div className="mt-4 mb-4">
                    <ul className="flex flex-row m-0 p-0 font-medium space-x-8">
                        <li>
                            <div className="p-2 text-sm rounded text-[#FD9800] bg-[#F7F9FE] cursor-pointer" onClick={() => setModalActive1(true)}>
                                <p>обрана початкова дата {moment(startDate).format('DD.MM.YYYY')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="p-2 text-sm rounded text-[#FD9800] bg-[#F7F9FE] cursor-pointer" onClick={() => setModalActive2(true)}>
                                <p>обрана кінцева дата {moment(endDate).format('DD.MM.YYYY')}</p>
                            </div>
                        </li>
                        <li>
                            <MySelect options={firms} defaultValue={"Оберіть постачальника"} value={firm} onChange={setFirm}/>
                        </li>
                    </ul>
                </div>
                {
                    isPostLoading ? <Loader />
                    : <div>
                            {
                                counters?.filter((item) => {
                                    if (!serviceType) {
                                        return true;
                                    } else {
                                        return (item.serviceType == serviceType)
                                    }
                                }).map((item, key) => <CounterBlock item={item} key={`CounterBlock_${key}`} />)
                            }
                        </div>
                }
            </div>
            {
                modalActive1 && (
                    <Modal close={() => setModalActive1(false)}>
                        <div className="pt-12 px-6 pb-6">
                            <Calendar onChange={setDate1} value={startDate} />
                        </div>
                    </Modal>
                )
            }
            {
                modalActive2 && (
                    <Modal close={() => setModalActive2(false)}>
                        <div className="pt-12 px-6 pb-6">
                            <Calendar onChange={setDate2} value={endDate} />
                        </div>
                    </Modal>
                )
            }
        </div>
    );
};

export default History;
