import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Context } from "../../store";
import api from "../../api";
import Breadcrumbs from "../../components/breadcrumbs";
import ServiceTypes from "../../components/serviceTypes";
import Tabs2 from "../../components/tabs2";
import Loader from "../../components/Loader/loader";
import CounterForms from "../../components/counterForms";
import { UniqueServiceTypes } from "./utils";
import Modal from "../../components/modal/modal";
import ResetPassword from "../auth/resetPassword";
import Button from "../../components/button";

const Counters = () => {
    const { objectId } = useParams();
    const [state] = useContext(Context);
    const [counters, setCounters] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);
    const address = state.addresses.find((item) => item.objectId == objectId);
    const [isLoading, setIsLoading] = useState(false);
    const [saved, setSaved] = useState(false);
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
            setIsLoading(true);
            await api.getCounterValue(objectId).then((result) => {
                setCounters(result);
                const serviceTypes = UniqueServiceTypes(result);
                setServiceTypes(serviceTypes);
            });
            setIsLoading(false);
        };
        fetchData();
    }, [objectId]);

    const Save = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const payload = [];
        counters.filter((item) => (item.currentReadings > 0)).forEach((item, key) => {
            payload.push({
                abcount: item.abcount || '',
                fio: item.fio || '',
                objectId: item.objectId || '',
                idFirme: item.idFirme || '',
                idPlat: item.idPlat || '',
                abccnt: item.abccnt || '',
                isseveralTarif: item.isseveralTarif || '',
                abcounter: item.abcounter || '',
                uniqId: item.uniqId || '',
                counterNo: item.counterNo || '',
                currentReadings: item.currentReadings || '',
                preValue: item.preValue || '',
                oldValue: item.oldValue || ''
            });
        });
        const result = await api.sendCounterData(payload);
        if (result.status === 200) {
            setSaved(true);
            // console.log('saved', setSaved);
        }
        await api.getCounterValue(objectId).then((result) => setCounters(result));
        setIsLoading(false);

    };

    return (
        <div className="font-normal mb-4">
            <Breadcrumbs items={breadCrumbs}/>
            <h2 className="mb-4 mt-3 text-2xl">{address.name}</h2>
            <ServiceTypes types={serviceTypes} />
            <div className="mt-5 py-4 px-10 h-auto rounded-lg shadow-myCustom">
                <h3 className="py-4 text-xl text-center">Лічильники</h3>
                <Tabs2 objectId={objectId} />
                {
                    isLoading
                    ? <Loader />
                    : <CounterForms counters={counters} setCounters={setCounters} Save={Save} />
                }
            </div>
            {
                saved && (
                    <Modal close={() => setSaved(false)}>
                        <div>
                            <div className="text-xs text-black_figma p-10 text-center w-full">
                                <p className="text-left text-base mb-4">Показання успішно передані в обробку.</p>
                                    <p className="text-base">З повагою, команда LYCHYLNYK.</p>
                            </div>
                            <div className="pt-2 w-44 mx-auto">
                                <Button type="button" label={'Закрити'} cssType={'primary'} onClick={() => setSaved(false)} />
                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
};

export default Counters;
