import { useEffect, useState, useContext } from 'react';
import { Context } from '../../store';
import { getRegions, getDistricts, getTowns, getStreets, getHouses, getFlats, addObject, getAddress } from '../../api';
import InputField from '../../components/inputField';
import AutoSuggest from 'react-tailwindcss-select';
import PinInput from 'react-pin-input';
import Button from '../../components/button';
import InputCodeField from "../../components/inputCodeField";
import wrong_code from './../../img/wrong_code.svg'
import {Tooltip} from "react-tooltip";
// https://www.npmjs.com/package/react-tailwindcss-select

const text = 'Невірний ключ авторизації.\nСпробуйте ще раз.';

const AutoSuggestClassNames = {
    menuButton: ({ isDisabled }) => (
        `AutoSuggestClassNames p-2 flex text-sm text-[#797878] border border-borderColor rounded shadow-sm transition-all duration-300 focus:ring-0 focus:outline-none focus:border-yellow_figma ${
            isDisabled
                ? 'bg-gray-200'
                : 'bg-white_figma'
        }`
    ),
    tagItemText: 'aaa',
    menu: 'absolute z-10 w-full bg-white_figma rounded-lg shadow-myCustom text-sm',
    searchBox: 'w-full py-2 pl-2 text-sm border border-borderColor rounded focus:ring-0 focus:outline-none',
    searchIcon: 'hidden'
};
const AddAddress = ({ close }) => {
    const [state, dispatch] = useContext(Context);
    const [viewMode, setViewMode] = useState(1);
    const [formError, setFormError] = useState('');
    const [attempts, setAttempts] = useState(0);

    const [pin, setPin] = useState('');
    const [code, setCode] = useState('');

    const objCount = state.addresses.length + 1;

    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState(null);

    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState(null);

    const [towns, setTowns] = useState([]);
    const [town, setTown] = useState(null);

    const [streets, setStreets] = useState([]);
    const [street, setStreet] = useState(null);

    const [houses, setHouses] = useState([]);
    const [house, setHouse] = useState(null);

    const [flats, setFlats] = useState([]);
    const [flat, setFlat] = useState('');

    const [flatName, setFlatName] = useState(`Квартира ${objCount}`);



    useEffect( () => {
        getRegions().then((data) => {
            setRegions(data);
            setRegion({
                disabled: false,
                label: 'Київська область',
                value: 11
            });
        }).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, []);

    useEffect( () => {
        setDistricts([]);
        setDistrict(null);
        setTowns([]);
        setTown(null);
        setStreets([]);
        setStreet(null);
        setHouses([]);
        setHouse(null);
        setFlats([]);
        setFlat(null);
        if (!region) {
            return;
        }
        getDistricts(region.value).then((result) => {
            setDistricts(result);
            setDistrict({
                disabled: false,
                label: 'КИЇВСЬКА ОБЛ. МІСТА ОБЛ. ЗНАЧЕННЯ',
                value: 233
            });
        }).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, [region]);

    useEffect( () => {
        setTowns([]);
        setTown(null);
        setStreets([]);
        setStreet(null);
        setHouses([]);
        setHouse(null);
        setFlats([]);
        setFlat(null);
        if (!district) {
            return;
        }
        getTowns(district.value).then((result) => {
            setTowns(result);
            setTown({
                disabled: false,
                label: 'КИЇВ',
                value: 447
            });
        }).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, [district]);

    useEffect( () => {
        setStreets([]);
        setStreet(null);
        setHouses([]);
        setHouse(null);
        setFlats([]);
        setFlat(null);
        if (!town) {
            return;
        }
        getStreets(town.value).then((result) => setStreets(result)).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, [town]);

    useEffect( () => {
        setHouses([]);
        setHouse(null);
        setFlats([]);
        setFlat(null);
        if (!street) {
            return;
        }
        getHouses(street.value).then((result) => setHouses(result)).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, [street]);

    useEffect( () => {
        setFlats([]);
        setFlat(null);
        if (!house) {
            return;
        }
        getFlats(house.value).then((result) => setFlats(result)).catch((error) => {
            dispatch({type: 'error', payload: error});
            close();
        });
    }, [house]);

    const addObj = (e) => {
        e.preventDefault();
        // add api call to validate pinCode
        const payload = {
            objectId: flat.value,
            name: flatName,
            code: pin || code || null
        };
        setFormError('');
        setAttempts(0);
        addObject(payload).then((res) => {
            console.log('res', res);
            if (res.data.status === 'REQUIRED_CODE') {
                setViewMode(2);
                return;
            }
            if (res.data.status === 'CODE_SEND') {
                setViewMode(3);
                return;
            }
            if (res.data.status === 'ADDED') {
                getAddress()
                    .then((data) => dispatch({ type: 'setAddresses', payload: data }))
                    .catch((error) => dispatch({ type: 'error', payload: error }))
                    .finally(() => close());
            }
            if (res.data.status === 'WRONG_CODE') {
                setFormError('WRONG_CODE');
                setAttempts(res.data.attempts);
                return;
            }
            if (res.data.status === 'LOCKED') {
                setFormError('LOCKED');
                return;
            }
        })
        .catch((error) => {
            dispatch({ type: 'error', payload: error });
            close();
        });
    }

    return (
        <>
            { viewMode === 1 &&
            <div className="px-14 py-6 space-y-3 mt-2 mx-auto w-[464px] rounded-lg shadow-lg">
                <h4 className="text-black_figma font-medium text-center">Додати адресу</h4>
                <form action="#" onSubmit={addObj}>
                    <div className="py-2">
                        <InputField
                            type={'text'}
                            placeholder={'Назва адреси'}
                            name={'name'}
                            required={true}
                            // maxLength={'10'}
                            value={flatName}
                            autoComplete="off"
                            onChange={event => setFlatName(event.target.value)}
                            // onPaste={(e)=> { e.preventDefault(); return false; }}
                        />
                    </div>
                    <div className="mt-2">
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Область'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={region}
                            options={regions}
                            onChange={(item) => setRegion(item)}
                            isDisabled={true}
                        />
                    </div>
                    <div>
                        <label className="text-xs text-black_figma font-light text-center px-4">Введіть перші літери району</label>
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Район'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={district}
                            options={districts}
                            isSearchable
                            onChange={(item) => setDistrict(item)}
                            isDisabled={!districts.length}
                        />
                    </div>
                    <div className="py-0">
                        <label className="text-xs text-black_figma font-light text-center px-4">Введіть перші літери міста</label>
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Місто'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={town}
                            options={towns}
                            isSearchable
                            onChange={(item) => setTown(item)}
                            isDisabled={!towns.length}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="text-xs text-black_figma font-light text-center px-4">Введіть перші літери вулиці та виберіть її зі списку</label>
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Вулиця'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={street}
                            options={streets}
                            isSearchable
                            onChange={(item) => setStreet(item)}
                            isDisabled={!streets.length}
                            onSearchInputChange={(e) => {
                                if (e.nativeEvent.inputType === 'insertFromPaste') {
                                    e.preventDefault();
                                    e.target.value = '';
                                    return;
                                }
                            }}
                        />
                    </div>
                    <div className="py-2">
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Будинок'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={house}
                            options={houses}
                            isSearchable
                            onChange={(item) => setHouse(item)}
                            isDisabled={!houses.length}
                        />
                    </div>
                    <div className="py-2">
                        <AutoSuggest
                            classNames={AutoSuggestClassNames}
                            placeholder={'Квартира'}
                            searchInputPlaceholder={'Пошук'}
                            noOptionsMessage={'Варіантів не знайдено'}
                            value={flat}
                            options={flats}
                            isSearchable
                            onChange={(item) => setFlat(item)}
                            isDisabled={!flats.length}
                        />
                    </div>
                    <div className="py-2 text-center">
                        <button
                            disabled={!flat}
                            className="w-60 h-12 text-base py-2 rounded text-white_figma bg-yellow_figma disabled:opacity-70"
                            type="submit">Зберігти</button>
                    </div>
                </form>
            </div>
            }
            { viewMode === 2 &&
                <div className="p-8 w-[464px] h-[355px]">
                    <h1 className="text-lg text-center mb-8 font-medium">Ключ авторизації</h1>
                    <p>Використовуйте ключ авторизації з рахунків,<br/> за останні 3 місяці</p>
                    { !formError &&
                        <div className="mb-2 mt-3">
                            <InputCodeField
                                label={'Ключ авторизації'}
                                placeholder="XXX-YYY-ZZZ-WWW"
                                maskPlaceholder={null}
                                name={'code'}
                                required={true}
                                value={code}
                                onChange={(event) => setCode(event.target.value)}
                            />
                        </div>
                    }
                    { formError &&
                        <div>
                            <div>
                                {/*<p className="font-light">Невірний Ключ авторизації.<br/></p>*/}
                                <p className="font-medium">Залишилося спроб: {5 - attempts}</p>
                            </div>
                            <div className="relative mb-2 mt-3">
                                <InputCodeField
                                    label={'Ключ авторизації'}
                                    cssClass="codeInput"
                                    placeholder="XXX-YYY-ZZZ"
                                    maskPlaceholder={null}
                                    name={'code'}
                                    required={true}
                                    value={code}
                                    onChange={(event) => setCode(event.target.value)}
                                />
                            </div>
                            <div className="">
                            <p className="" data-tooltip-id="tooltip_wrong_code" data-tooltip-place="right" data-tooltip-content={text}>
                                <img className="wrong_code"  src={wrong_code} alt={wrong_code}/>
                            </p>
                            <Tooltip id="tooltip_wrong_code" arrowColor="#E7E7E7"/>
                            {/*https://react-tooltip.com/docs/options*/}
                        </div>
                        </div>
                    }
                    <div className="w-60 h-12 mx-auto mt-4">
                        <Button type="button" cssType="primary" label={'Ok'} onClick={addObj} />
                    </div>
                </div>
            }
            { viewMode === 3 &&
                 <div className="p-8 w-auto h-[355px]">
                     <h1 className="text-lg text-center mb-8 font-medium">PIN-код</h1>
                     { !formError && <p>Для підтвердження введіть 4-х значний <br/> PIN-код відправлений Вам на електронну пошту</p> }
                     { formError &&
                         <div>
                             <p className="font-light">Невірний PIN-код.<br/></p>
                             <p className="font-medium">Залишилося спроб: {5 - attempts}</p>
                         </div>
                     }
                     <div className="text-center mb-2 mt-3">
                     { !formError &&
                         <PinInput
                             length={6}
                             initialValue={pin}
                             secret={false}
                             onChange={(value) => setPin(value)}
                             type="numeric"
                             inputMode="number"
                             style={{padding: '10px'}}
                             inputStyle={{borderColor: '#E7E7E7', margin: '0 10px'}}
                             inputFocusStyle={{borderColor: '#797878'}}
                             autoSelect={true}
                             regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                         />
                     }
                     { formError &&
                         <PinInput
                             length={6}
                             initialValue={pin}
                             secret={false}
                             onChange={(value) => setPin(value)}
                             type="numeric"
                             inputMode="number"
                             style={{padding: '10px', borderColor: '#f00'}}
                             inputStyle={{borderColor: '#E63147', margin: '0 10px'}}
                             inputFocusStyle={{borderColor: '#797878'}}
                             autoSelect={true}
                             regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                         />
                     }
                     </div>
                     <p className="text-center font-light">Відправити повторно</p>
                     <div className="w-60 h-12 mx-auto mt-4">
                         <Button type="button" disabled={String(pin).length < 6} cssType="primary" label={'Ok'} onClick={addObj} />
                     </div>
                 </div>
            }
        </>
    );
};

export default AddAddress;
