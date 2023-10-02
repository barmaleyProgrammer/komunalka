import { useEffect, useState, useContext } from 'react';
import { Context } from "../../store";
import Select from "../../components/MySelect";
import api from "../../api";
import InputField from "../../components/inputField";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState('');

    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState('');

    const [towns, setTowns] = useState([]);
    const [town, setTown] = useState('');

    const [streets, setStreets] = useState([]);
    const [street, setStreet] = useState('');

    const [houses, setHouses] = useState([]);
    const [house, setHouse] = useState('');

    const [flats, setFlats] = useState([]);
    const [flat, setFlat] = useState('');

    const [flatName, setFlatName] = useState('');

    useEffect( () => {
        const fetchData = async () => {
            await api.getRegions().then((data) => setRegions(data));
        };
        fetchData();
    }, []);

    useEffect( () => {
        if (!region) {
            setDistricts([]);
            return;
        }
        const fetchData = async () => {
            const result = await api.getDistricts(region);
            setDistricts(result);
        };
        fetchData();
    }, [region]);

    useEffect( () => {
        if (!district) {
            setTowns([]);
            return;
        }
        const fetchData = async () => {
            const result = await api.getTowns(district);
            setTowns(result);
        };
        fetchData();
    }, [district]);

    useEffect( () => {
        if (!town) {
            setStreets([]);
            return;
        }
        const fetchData = async () => {
            const result = await api.getStreets(town);
            setStreets(result);
        };
        fetchData();
    }, [town]);

    useEffect( () => {
        if (!street) {
            setHouses([]);
            return;
        }
        const fetchData = async () => {
            const result = await api.getHouses(street);
            setHouses(result);
        };
        fetchData();
    }, [street]);

    useEffect( () => {
        if (!house) {
            setFlats([]);
            return;
        }
        const fetchData = async () => {
            const result = await api.getFlats(house);
            setFlats(result);
        };
        fetchData();
    }, [house]);

    const addObj = async (flat, flatName) => {
        await api.addObject(flat, flatName);
        await api.getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data }));
        navigate('/cabinet');
    }

    return (
        <div className="p-5 space-y-3 mt-2 mx-auto w-1/4 rounded-lg shadow-lg">
            <h4 className="text-black_figma text-center">Додати адресу</h4>
            {/*<form >*/}
                <div>
                    <Select
                        options={regions}
                        defaultValue={'Область'}
                        name={'regions'}
                        onChange={value => setRegion(Number(value))}
                        value={region}
                    />
                </div>
                <div>
                    <Select
                        options={districts}
                        defaultValue={'Район'}
                        name={'districts'}
                        onChange={value => setDistrict(Number(value))}
                        value={district}
                    />
                </div>
                <div>
                    <Select
                        options={towns}
                        defaultValue={'Місто'}
                        name={'towns'}
                        onChange={value => setTown(Number(value))}
                        value={town}
                    />
                </div>
                <div>
                    <Select
                        options={streets}
                        defaultValue={'Вулиця'}
                        name={'streets'}
                        onChange={value => setStreet(Number(value))}
                        value={street}
                    />
                </div>
                <div>
                    <Select
                        options={houses}
                        defaultValue={'Дім'}
                        name={'houses'}
                        onChange={value => setHouse(Number(value))}
                        value={house}
                    />
                </div>
                <div>
                    <Select
                        options={flats}
                        defaultValue={'Квартира'}
                        name={'flats'}
                        onChange={value => setFlat(Number(value))}
                        value={flat}
                    />
                </div>
                <div>
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
                <div className="text-center">
                    <button
                        className="w-28 text-sm py-2 rounded text-white_figma bg-yellow_figma"
                        type="submit" onClick={() => addObj(flat, flatName)}>Зберегти</button>
                </div>
            {/*</form>*/}
        </div>
    );
};

export default AddAddress;
