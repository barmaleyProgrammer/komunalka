import Button from "./button";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import './homeCountersValue.css';
import water from '../img/logo_counters/water.svg';
import gas from '../img/logo_counters/gas.svg';
import electric from '../img/logo_counters/electric.svg';
import warm from '../img/logo_counters/warm.svg';
import {useState, useEffect} from "react";
import InputField from './inputField';
import {authSocialNetworks, getCounterValue, getProvidersByServiceTypeId, getServiceTypes} from '../api';
import arrowLeft from "../img/arrowLeft.svg";
import {NavLink} from "react-router-dom";
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";
import logo_com_block from "../img/logo_com_block.png";
import logo_gerc from "../img/logo_gerc.svg";

const serviceTypeIcons = [
    { id: 1, icon: warm },
    { id: 2, icon: electric },
    { id: 3, icon: gas },
    { id: 4, icon: water },
];

const HomeCountersValue = ({showRegister}) => {
    const [service, setService] = useState('');
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState('');
    const [or, setOr] = useState('');
    const [address, setAddress] = useState('');
    const [streets, setStreets] = useState([]);
    const [serviceType, setServiceType] = useState([]);
    const [actualValue, setActualValue] = useState([]);
    const [countersForm, setCountersForm] = useState(false);

    useEffect(() => {
        getServiceTypes().then((result) => {
            setServiceType(result);
            console.log(result)
        });
    }, []);

    const SocialNetworks = (event, type) => {
        event.preventDefault();
        authSocialNetworks(type);
    };

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

    const objectId = or;

    const ActualValuesCounters = (event) => {
        event.preventDefault();
        getCounterValue(objectId).then((result) => {
            setActualValue(result)
            console.log(result);
        })
    };

    const filteredServices = (actualValue) => {
        return actualValue?.filter((item) => {
            if (item.idFirme == 116977) {
                console.log('filteredServices', filteredServices);
                return true;
            }
            return false;
        });
    }

    const Counters_Form = () => {
        return (
        <div>
            {
                filteredServices(actualValue).map((item, key) => {
                return (
                    <div key={key}>
                        <p>{item.nameFirme}</p>
                        <p className="lowercase mb-4">{item.namePlat}</p>
                        <span className="font-light mb-3">Особовий рахунок: </span>
                        <span className="">{objectId}</span>
                        <hr className="text-[#E2E8F0] mb-3 mt-3"/>
                        <p className="text-xs text-[#949494]">Лічильник №1</p>
                        <p className="mb-3">{item.abcounter}</p>
                        <p className="mb-3">Актуальні показання</p>
                        <p className="mb-3 text-[#797878]">{item.oldValue}</p>
                        <NavLink to="#" >
                            <p className="text-[#3E77AA]">Некоректні показання</p>
                        </NavLink>
                        <hr className="text-[#E2E8F0] mt-3 mb-3"/>
                        <h2>Для передачі нових показань перейдіть у<br/><p className="text-[#3E77AA] mb-3">Особистий кабінет</p></h2>
                        <Button type="submit" label={'Увійти'} cssType={'primary'} />
                        <div className="py-2 font-light text-base">
                            Ще немає аккаунту? <NavLink to="#" onClick={showRegister} className="text-[#3E77AA]">Зареєструватися</NavLink>
                        </div>

                        <div className="flex gap-2 text-[#797878] mb-2">
                            <hr className="w-1/3 mt-3"/>
                            <span className="w-1/3 whitespace-nowrap">чи за допомогою</span>
                            <hr className="ml-4 w-1/3 mt-3"/>
                        </div>
                        <div className="flex flex-row space-x-2 mb-2">
                            <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                                 onClick={(event) => SocialNetworks(event, 'google')}
                            >
                                <div className="flex py-3 justify-center space-x-2">
                                    <img src={google} alt="" />
                                    <p className="text-sm whitespace-nowrap">Ввійти з Google</p>
                                </div>
                            </div>
                            <div className="cursor-pointer basis-1/2 border border-[#E8E8E8;] rounded"
                                 onClick={(event) => SocialNetworks(event, 'facebook')}
                            >
                                <div className="flex py-3 justify-center space-x-2">
                                    <img src={facebook} alt="" />
                                    <p className="text-sm whitespace-nowrap">Ввійти з Facebook</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2">
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                                <div className="flex p-2 justify-center space-x-1">
                                    <img src={logo_com_block} alt=""/>
                                </div>
                            </div>
                            <div className="basis-1/2 border border-[#E8E8E8;] rounded">
                                <div className="flex p-2 justify-center">
                                    <img src={logo_gerc} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
        )
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
                            <div className="w-[368px] h-12 mx-auto mt-6">
                                <Button type="button" cssType="primary" label={'Далі2'}
                                        onClick={ActualValuesCounters}
                                />
                            </div>
                        </div>
                        : ''
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
                    <div>
                        <Counters_Form />
                    </div>
            }
        </div>
    );
};

export default HomeCountersValue;