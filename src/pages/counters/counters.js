import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from "../../App";

import api from "../../api";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import moment from "moment";

const Counters = () => {
    const { objectId } = useParams();
    const [state,] = useContext(Context);
    const [counters, setCounters] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const address = state.addresses.find((item) => item.objectId == objectId);
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
            await api.getCounterValue(objectId).then((result) => {
                setCounters(result);
                const types = result
                    .map((item) => Number(item.serviceType))
                    .filter((item, i, ar) => ar.indexOf(item) === i);
                setServiceTypes(types);
            });
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
        setCounters((prevData) => {
            const clone = [...prevData];
            clone[index].currentReadings = event.target.value;
            return clone;
        });
    };

    const CounterBlock = ({item, index}) => {
        return (
            <div className="my-4 p-4 flex gap-x-4 rounded-lg border border-borderColor w-full">
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
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes types={serviceTypes} />
            <div className="mt-5 py-4 px-10 h-auto rounded-lg shadow-lg">
                <h3 className="py-4 text-xl text-center">Лічильники</h3>
                <div className="items-center justify-between w-full flex">
                    <Tabs2 objectId={objectId} />
                </div>
                <div>
                    {counters?.map((item, key) => <CounterBlock item={item} key={`CounterBlock_${item.id}`} index={key} />)}
                </div>
                <div className="inline-block w-28">
                    <Button type="button" label={'Зберегти'} onClick={() => Save} cssType={'primary'} />
                </div>
            </div>
        </div>
    );
};

export default Counters;
