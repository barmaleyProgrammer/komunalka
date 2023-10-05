import { useEffect, useState, useContext } from 'react';
import { Context } from "../../store";
import api from "../../api";
import InputField from "../../components/inputField";

import AutoSuggest from "react-tailwindcss-select";
// https://www.npmjs.com/package/react-tailwindcss-select

const AutoSuggestClassNames = {
    menuButton: ({ isDisabled }) => (
        `p-2 flex text-sm border border-borderColor rounded shadow-sm transition-all duration-300 focus:ring-0 focus:outline-none focus:border-yellow_figma ${
            isDisabled
                ? "bg-gray-200"
                : "bg-white_figma"
        }`
    ),
    menu: "absolute z-10 w-full bg-white_figma rounded-lg shadow-lg text-sm",
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

    const [flatName, setFlatName] = useState(`Квартіра ${objCount}`);

    useEffect( () => {
        const fetchData = async () => {
            await api.getRegions().then((data) => setRegions(data));
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
        close();
    }

    return (
        <div className="px-14 py-6 space-y-3 mt-2 mx-auto w-[464px] rounded-lg shadow-lg">
            <h4 className="text-black_figma text-center">Додати адресу</h4>
            <form action="#" onSubmit={addObj}>
                <div className="py-2">
                    <InputField
                        type={'text'}
                        placeholder={'Назва адреси'}
                        name={'name'}
                        required={true}
                        value={flatName}
                        autoComplete="off"
                        onChange={event => setFlatName(event.target.value)}
                    />
                </div>
                <div className="py-2">
                    <AutoSuggest
                        classNames={AutoSuggestClassNames}
                        placeholder={'Область'}
                        value={region}
                        options={regions}
                        onChange={(item) => setRegion(item)}
                    />
                </div>
                <div className="py-2">
                    <AutoSuggest
                        classNames={AutoSuggestClassNames}
                        placeholder={'Район'}
                        searchInputPlaceholder={'Пошук'}
                        noOptionsMessage={'Варіантів не знайдено'}
                        value={district}
                        options={districts}
                        isSearchable
                        onChange={(item) => setDistrict(item)}
                    />
                </div>
                <div className="py-2">
                    <AutoSuggest
                        classNames={AutoSuggestClassNames}
                        placeholder={'Місто'}
                        searchInputPlaceholder={'Пошук'}
                        noOptionsMessage={'Варіантів не знайдено'}
                        value={town}
                        options={towns}
                        isSearchable
                        onChange={(item) => setTown(item)}
                    />
                </div>
                <div className="py-2">
                    <AutoSuggest
                        classNames={AutoSuggestClassNames}
                        placeholder={'Вулиця'}
                        searchInputPlaceholder={'Пошук'}
                        noOptionsMessage={'Варіантів не знайдено'}
                        value={street}
                        options={streets}
                        isSearchable
                        onChange={(item) => setStreet(item)}
                    />
                </div>
                <div className="py-2">
                    <AutoSuggest
                        classNames={AutoSuggestClassNames}
                        placeholder={'Дім'}
                        searchInputPlaceholder={'Пошук'}
                        noOptionsMessage={'Варіантів не знайдено'}
                        value={house}
                        options={houses}
                        isSearchable
                        onChange={(item) => setHouse(item)}
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
                    />
                </div>
                <div className="py-2 text-center">
                    {/*{  */}
                    {/*    ?*/}
                    {/*    <button disabled={true}*/}
                    {/*            className=" w-60 h-12 text-base py-2 rounded text-white_figma bg-yellow_figma"*/}
                    {/*            type="submit">Зберігти</button>*/}
                    {/*    :*/}
                    {/*    <button disabled={false}*/}
                    {/*            className=" w-60 h-12 text-base py-2 rounded text-white_figma bg-yellow_figma"*/}
                    {/*            type="submit">Зберігти</button>*/}
                    {/*}*/}
                    <button
                        className=" w-60 h-12 text-base py-2 rounded text-white_figma bg-yellow_figma"
                        type="submit">Зберігти</button>
                </div>
            </form>
        </div>
    );
};

export default AddAddress;
