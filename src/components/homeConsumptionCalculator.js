import Button from "./button";
import logo_lichylnyk from "../img/logo_lichylnyk.svg";
import './homeCountersValue.css';
import water from '../img/logo_counters/water.svg';
import gas from '../img/logo_counters/gas.svg';
import electric from '../img/logo_counters/electric.svg';
import warm from '../img/logo_counters/warm.svg';
import {useState, useEffect} from "react";
import InputField from './inputField';
import {getProvidersByServiceTypeId} from '../api';
import arrowLeft from "../img/arrowLeft.svg";

const HomeCountersValue = () => {
    const [service, setService] = useState('');
    const [providers, setProviders] = useState([]);
    const [provider, setProvider] = useState('');
    const [or, setOr] = useState('');
    const [address, setAddress] = useState('');
    const [streets, setStreets] = useState([]);

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

    return (
        <div className="p-8 h-auto w-[464px]">
            <img className={` ${provider ? 'cursor-pointer':'hidden'}`} src={arrowLeft} alt="" onClick={BackOneStep} />
            <img className="mx-auto mb-8" src={logo_lichylnyk} alt="" />
            <h1 className="text-lg text-center mb-8 font-medium">Калькулятор споживання</h1>
            <div className="flex justify-center gap-3 mb-8">
                <svg className="rectangleActive"></svg>
                <svg className={ `${provider ? 'rectangleActive':'rectangle'}`}></svg>
                <svg className="rectangle"></svg>
            </div>
            { !provider ?
                <div>
                    <p className="text-center">Оберіть тип послуги</p>
                    <div className="flex justify-center gap-7">
                        <img className={`h-[72px] w-[72px] ${service == 4 ? 'iconActive':'iconPassive'}`} src={water} onClick={() => setService(4)} alt="ВОДА"/>
                        <img className={`h-[72px] w-[72px] ${service == 3 ? 'iconActive':'iconPassive'}`} src={gas} onClick={() => setService(3)} alt="ГАЗ"/>
                        <img className={`h-[72px] w-[72px] ${service == 2 ? 'iconActive':'iconPassive'}`} src={electric} onClick={() => setService(2)} alt="ЕЛЕКТРИКА"/>
                        <img className={`h-[72px] w-[72px] ${service == 1 ? 'iconActive':'iconPassive'}`} src={warm} onClick={() => setService(1)} alt="ТЕПЛО"/>
                    </div>
                    <div className="flex justify-center gap-8 mt-2">
                        <p>вода</p>
                        <p>газ</p>
                        <p>Електроенергія</p>
                        <p>тепло</p>
                    </div>
                </div>
                :
                <div>
                        <p className="text-center mb-6">Введіть номер особового рахунку</p>
                </div>
            }
                <div>
                    { service &&
                        <select
                            className="relative border border-[#E7E7E7] w-[368px] h-12 text-sm font-light rounded ml-4"
                            value={provider}
                            name={'provider'}
                            onChange = {(e) => setProvider(e.target.value)}
                        >
                            <option value="">Оберіть підприємство</option>
                            { providers.map((item, key) => <option key={key} value={item.value}>{item.label}</option>) }
                        </select>
                    }
                </div>

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