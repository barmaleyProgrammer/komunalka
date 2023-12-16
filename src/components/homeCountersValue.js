import Button from "./button";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import './homeCountersValue.css';
import {useState, useEffect} from "react";
import InputField from './inputField';
import {getCounterValue, getProvidersByServiceTypeId, getServiceTypes} from '../api';
import arrowLeft from "../img/arrowLeft.svg";
import ServiceTypes from "./homeCountersValue/ServiceTypes";
import CountersForm from "./homeCountersValue/CountersForm";

const HomeCountersValue = ({showRegister}) => {
    const [service, setService] = useState('');
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState('');
    const [or, setOr] = useState('');
    const [address, setAddress] = useState('');
    const [streets, setStreets] = useState([]);
    const [serviceType, setServiceType] = useState([]);
    const [actualValue, setActualValue] = useState([]);

    useEffect(() => {
        getServiceTypes().then((result) => {
            setServiceType(result);
            console.log(result)
        });
    }, []);

    useEffect(() => {
        // fetch providers Api
        getProvidersByServiceTypeId(service).then((result) => {
            const res = result.data.data.map((item) => ({
                value: item.id,
                label: item.company_name
            }));
            setProviders(res);
        });

    }, [service]);

    const getStreets = () => {
        // fetch streets Api
        setStreets([
            { value: 1, label: 'test1'},
            { value: 2, label: 'test2'},
            { value: 3, label: 'test3'},
            { value: 4, label: 'test4'},
            { value: 5, label: 'test5'},
        ]);
    };

    const BackOneStep = () => {
        if (actualValue.length) {
            setActualValue([]);
            return;
        }
        if (or) {
            setOr('');
            setAddress('');
            return;
        }
        setProvider('');
        setStreets([]);
        setOr('');
    }

    const ActualValuesCounters = (event) => {
        event.preventDefault();
        getCounterValue(or).then((result) => {
            setActualValue(result);
        })
    };

    return (
        <div className="p-8 h-auto w-[464px]">
            <img className={` ${provider ? 'cursor-pointer':'hidden'}`} src={arrowLeft} alt="" onClick={BackOneStep} />
            <img className="mx-auto mb-4" src={logo_lichylnyk} alt="" />
            <h1 className="text-lg text-center mb-4 font-medium">Актуальні показання</h1>
            <div className="flex justify-center gap-3 mb-8">
                <svg className="rectangleActive"></svg>
                <svg className={ `${provider ? 'rectangleActive':'rectangle'}`}></svg>
                <svg className={ `${actualValue.length ? 'rectangleActive':'rectangle'}`}></svg>
            </div>
            { !actualValue.length ?
                <div>
                    { !provider ?
                        <ServiceTypes serviceType={serviceType} service={service} setService={setService} />
                        :
                        <div>
                            <p className="text-center mb-6">
                                { !streets.length ? 'Введіть номер особового рахунку' : 'Виберіть вашу адресу' }
                            </p>
                        </div>
                    }
                    { !provider &&
                        <div>
                            { !streets.length &&
                                <div className="w-[368px] mx-auto">
                                    { service &&
                                        <select
                                            className="border border-[#E7E7E7] w-[368px] h-12 text-sm font-light rounded"
                                            value={provider}
                                            name={'provider'}
                                            onChange = {(e) => setProvider(e.target.value)}
                                        >
                                            <option value="">Оберіть підприємство</option>
                                            { providers.map((item, key) => <option key={key} value={item.value}>{item.label}</option>) }
                                        </select>
                                    }
                                </div>
                            }
                        </div>
                    }
                    { provider &&
                        <div className="w-[368px] h-12 mx-auto mb-8">
                            <InputField
                                placeholder={870036}
                                label={'O/P'}
                                type={'number'}
                                name={'or'}
                                value={or}
                                autocomplete="off"
                                min={'0'}
                                step={'0.01'}
                                onChange={(e) => setOr(e.target.value)}
                            />
                        </div>
                    }

                    { !streets.length ? '' :
                        <div className="w-[368px] mx-auto">
                            <p className="text-xs font-light">Адреса</p>
                            <select
                                className="border border-[#E7E7E7] w-[368px] h-12 text-sm font-light rounded"
                                label={'Адреса'}
                                value={address}
                                name={'address'}
                                onChange = {(e) => setAddress(e.target.value)}
                            >
                                <option value="">Оберіть street</option>
                                { streets.map((item, key) => <option key={key} value={item.value}>{item.label}</option>) }
                            </select>
                            <div className="w-[368px] h-12 mx-auto mt-6">
                                <Button type="button" cssType="primary" label={'Далі2'}
                                        onClick={ActualValuesCounters}
                                />
                            </div>
                        </div>
                    }

                    { !streets.length &&
                        <div className="w-[368px] h-12 mx-auto mt-6">
                            <Button type="button" cssType="primary" label={'Далі1'}
                                disabled={!or}
                                onClick={getStreets}
                            />
                        </div>
                    }
                </div>
                :
                <CountersForm actualValue={actualValue} objectId={or} showRegister={showRegister} />
            }
        </div>
    );
};

export default HomeCountersValue;