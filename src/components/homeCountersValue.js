import Button from "./button";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import './homeCountersValue.css';
import water from '../img/logo_counters/water.svg';
import gas from '../img/logo_counters/gas.svg';
import electric from '../img/logo_counters/electric.svg';
import warm from '../img/logo_counters/warm.svg';
import {useState, useEffect} from "react";
import InputField from './inputField';
import {getProvidersByServiceTypeId, getServiceTypes} from '../api';
import arrowLeft from "../img/arrowLeft.svg";

const serviceTypeIcons = [
    { id: 1, icon: warm },
    { id: 2, icon: electric },
    { id: 3, icon: gas },
    { id: 4, icon: water },
];

const HomeCountersValue = () => {
    const [service, setService] = useState('');
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState('');
    const [or, setOr] = useState('');
    const [address, setAddress] = useState('');
    const [streets, setStreets] = useState([]);
    const [serviceType, setServiceType] = useState([]);

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
        setProvider('')
    }
const ServiceTypes = () => {
    return (
        <div>
            <p className="text-center">Оберіть тип послуги</p>
            <div className="grid grid-cols-4 gap-4">
                {
                    serviceType.map((item, key) => {
                        const icon = serviceTypeIcons.find((i) => i.id == item.id).icon;
                        return (
                            <div key={key} className="mb-4 mx-auto text-center">
                                <img className={` h-20 w-20 ${service === item.id ? 'iconActive':'iconPassive'}`} src={icon} onClick={() => setService(item.id)} alt=""/>
                                <span className="text-xs lowercase">{item.name}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}



    return (
        <div className="p-8 h-auto w-[464px]">
            <img className={` ${provider ? 'cursor-pointer':'hidden'}`} src={arrowLeft} alt="" onClick={BackOneStep} />
            <img className="mx-auto mb-8" src={logo_lichylnyk} alt="" />
            <h1 className="text-lg text-center mb-8 font-medium">Актуальні показання</h1>
            <div className="flex justify-center gap-3 mb-8">
                <svg className="rectangleActive"></svg>
                <svg className={ `${provider ? 'rectangleActive':'rectangle'}`}></svg>
                <svg className="rectangle"></svg>
            </div>
            { !provider ?
                <ServiceTypes />
                :
               <div>
                   { !streets.length ?
                   <p className="text-center mb-6">Введіть номер особового рахунку</p>
                       :
                       <p className="text-center mb-6">Виберіть вашу адресу</p>
                   }
               </div>
            }

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

            { provider &&
                <div className="w-[368px] h-12 mx-auto mb-8">
                    <InputField
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

            { streets.length ?
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
                </div>
                    : ''
            }
            <div className="w-[368px] h-12 mx-auto mt-6">
                <Button type="button" cssType="primary" label={'Далі'}
                disabled={!or}
                        onClick={getStreets}
                />
            </div>
        </div>
    );
};

export default HomeCountersValue;