import { useEffect, useState, useContext } from 'react';
import { Context } from "../../store";
import api from "../../api";
import InputField from "../../components/inputField";

import AutoSuggest from "react-tailwindcss-select";
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

    const addObj = async (e) => {
        e.preventDefault();
        await api.addObject(flat.value, flatName);
        await api.getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data }));
        close();
    }

    return (
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
    );
};

export default AddAddress;
