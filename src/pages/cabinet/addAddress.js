import { useEffect, useState, useContext } from 'react';
import { Context } from "../../store";
import api from "../../api";
import InputField from "../../components/inputField";

import AutoSuggest from "react-tailwindcss-select";
import PinInput from "react-pin-input";
import Button from "../../components/button";
// https://www.npmjs.com/package/react-tailwindcss-select

const AutoSuggestClassNames = {
    menuButton: ({ isDisabled }) => (
        `AutoSuggestClassNames p-2 flex text-sm text-[#797878] border border-borderColor rounded shadow-sm transition-all duration-300 focus:ring-0 focus:outline-none focus:border-yellow_figma ${
            isDisabled
                ? "bg-gray-200"
                : "bg-white_figma"
        }`
    ),
    tagItemText: 'aaa',
    menu: "absolute z-10 w-full bg-white_figma rounded-lg shadow-myCustom text-sm",
    searchBox: "w-full py-2 pl-2 text-sm border border-borderColor rounded focus:ring-0 focus:outline-none",
    searchIcon: "hidden"
};
const AddAddress = ({ close }) => {
    // const [,dispatch] = useContext(Context);
    const [modalPinCode, setModalPinCode] = useState(false);
    const [pin, setPin] = useState('');
    const [state, dispatch] = useContext(Context);

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
        const fetchData = async () => {
            await api.getRegions().then((data) => setRegions(data));
            setRegion({
                disabled: false,
                label: "Київська область",
                value: 11
            });
        };
        fetchData();

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

        const fetchData = async () => {
            const result = await api.getDistricts(region.value);
            setDistricts(result);
            setDistrict({
                disabled: false,
                label: 'КИЇВСЬКА ОБЛ. МІСТА ОБЛ. ЗНАЧЕННЯ',
                value: 233
            });
        };
        fetchData();
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
        const fetchData = async () => {
            const result = await api.getTowns(district.value);
            setTowns(result);
            setTown({
                disabled: false,
                label: 'КИЇВ',
                value: 447
            });
        };
        fetchData();
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
        const fetchData = async () => {
            const result = await api.getStreets(town.value);
            setStreets(result);
        };
        fetchData();
    }, [town]);

    useEffect( () => {
        setHouses([]);
        setHouse(null);
        setFlats([]);
        setFlat(null);
        if (!street) {
            return;
        }
        const fetchData = async () => {
            const result = await api.getHouses(street.value);
            setHouses(result);
        };
        fetchData();
    }, [street]);

    useEffect( () => {
        setFlats([]);
        setFlat(null);
        if (!house) {
            return;
        }
        const fetchData = async () => {
            const result = await api.getFlats(house.value);
            setFlats(result);
        };
        fetchData();
    }, [house]);

    const addObj = async () => {
        // add api call to validate pinCode
        await api.addObject(flat.value, flatName)
        .catch((error) => {
            dispatch({ type: 'error', payload: error });
        });
        await api.getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data }))
        .catch((error) => {
                dispatch({ type: 'error', payload: error });
        });
        close();
    }

    const openModalPinCode = (event) => {
        event.preventDefault();
        setModalPinCode(true);
    };

    return (
        <>
            { !modalPinCode ?
            <div className="px-14 py-6 space-y-3 mt-2 mx-auto w-[464px] rounded-lg shadow-lg">
                <h4 className="text-black_figma font-medium text-center">Додати адресу</h4>
                <form action="#" onSubmit={openModalPinCode}>
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
                    <div className="">
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
            :
                <div className="p-8 w-[464px] h-[355px]">
                    <h1 className="text-lg text-center mb-8 font-medium">PIN-код</h1>
                    <p>Для підтвердження введіть 4-х значний <br/> PIN-код відправлений Вам на електронну пошту</p>
                    <div className="text-center mb-2 mt-3">
                        <PinInput
                            length={4}
                            initialValue={pin}
                            secret
                            secretDelay={1000}
                            onChange={(value) => setPin(value)}
                            type="numeric"
                            inputMode="number"
                            style={{padding: '10px'}}
                            inputStyle={{borderColor: '#E7E7E7', margin: '0 10px'}}
                            inputFocusStyle={{borderColor: '#797878'}}
                            onComplete={addObj}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                    </div>
                    <p className="text-center font-light">Відправити повторно</p>
                    <div className="w-60 h-12 mx-auto mt-4">
                        <Button type="button" disabled={String(pin).length < 4} cssType="primary" label={'Ok'} onClick={addObj} />
                    </div>
                </div>
            }
        </>
    );
};

export default AddAddress;
