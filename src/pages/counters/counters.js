import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import api from "../../api";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import moment from "moment";

const Counters = () => {
    const { objectId } = useParams();
    const [counters, setCounters] = useState([]);
    // const counters = useRef(undefined);
    const [address, setAddress] = useState({});
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
            "to": '',
            "label": 'Лічильники'
        },
    ]

    useEffect( () => {
        const fetchData = async () => {
            // await api.getCounterValue(objectId).then((result) => counters.current = [...result]);
            await api.getCounterValue(objectId).then((result) => setCounters(result));
            await api.getAddress(objectId).then((result) => {
                const address = result.find((item) => item.objectId == objectId);
                setAddress(address);
            });
            // const result3 = await api.getDebt(objectId);
        };
        fetchData();
    }, []);

    const Save = async () => {
        const currentDate = moment().format('YYYY-MM-D');
        const promises = [];
        counters
            .filter((item) => (item.currentReadings > 0))
            .forEach((item, key) => {
                const payload = {
                    customerId: "string",
                    currentDate,
                    currentReadings: item.currentReadings
                };
                const res = api.sendCounterData(item.objectId, payload);
                promises.push(res);
            });
        await Promise.all(promises);
        await api.getCounterValue(objectId).then((result) => setCounters(result));
    };
    const handleInputChange = (event, index) => {
        // counters.current[index].currentReadings = event.target.value;
        setCounters((prevData) => {
            const clone = [...prevData];
            clone[index].currentReadings = event.target.value;
            return clone;
        });
    };

    const CounterBlock = ({item, index}) => {
        return (
            <div className="flex gap-x-4 rounded-lg border border-borderColor w-full h-auto">
                <div className="w-1">
                    <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                       type="checkbox"
                       value={item.id}
                    />
                </div>
                <div className="w-2/3">
                    <ul>
                        <li className="text-xs">Лічильник №{item.counterNo}</li>
                        <li className="text-sm">{item.abcounter}</li>
                        <li className="text-sm">{item.nameFirme}<br/>{item.namePlat}</li>
                    </ul>
                </div>
                <div className="w-44">
                    <InputField
                        label={'Попередні показники'}
                        readOnly={true}
                        value={item.oldValue}
                    />
                </div>
                <div className="w-44">
                    <InputField
                        label={'Актуальні показники'}
                        name={'currentReadings'}
                        value={item.currentReadings}
                        onChange={(e) => handleInputChange(e, index)}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="font-light mt-2 mx-auto w-[1152px]">
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="mb-4 mt-3 text-[24px]">{address.name}</h2>
            <div className="mt-[34px]">
                <p className="text-[16px]">Лічильники</p>
            </div>
            <ServiceTypes />
            <div className="mt-[24px] py-4 px-[58px] h-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <h3 className="py-4 text-[20px] text-center">Лічильники</h3>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <Tabs2 objectId={objectId} />
                </div>
                <h5 className="py-4">Обрати всі</h5>
                <div>
                    {counters.map((item, key) => <CounterBlock item={item} key={`CounterBlock_${item.id}`} index={key} />)}
                    {/*{counters.current?.map((item, key) => <CounterBlock item={item} key={`CounterBlock_${item.id}`} index={key} />)}*/}

                    <Button type="button" label={'Зберегті'} onClick={Save} cssType={'primary'} />
                </div>
            </div>
        </div>
    );
};

export default Counters;
