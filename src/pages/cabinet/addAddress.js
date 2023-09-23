import { useEffect, useState } from 'react';
import Select from "../../components/MySelect";
import api from "../../api";
import InputField from "../../components/inputField";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
    const navigate = useNavigate();
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState(0);

    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState(0);

    const [towns, setTowns] = useState([]);
    const [town, setTown] = useState(0);

    const [streets, setStreets] = useState([]);
    const [street, setStreet] = useState(0);

    const [houses, setHouses] = useState([]);
    const [house, setHouse] = useState(0);

    const [flats, setFlats] = useState([]);
    const [flat, setFlat] = useState(0);

    const [flatName, setFlatName] = useState('');

    useEffect( () => {
        const fetchData = async () => {
            const result = await api.getRegions();
            setRegions(result);
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
        navigate('/cabinet');
    }

    return (
        <div className="space-y-3 mt-2 mx-auto w-[464px] rounded-lg shadow-lg">
            <h4 className="text-black_figma text-center">Додати адресу</h4>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <p>Назва адреси</p>
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={regions}
                    defaultValue={'область'}
                    onChange={value => setRegion(Number(value))}
                    value={region}
                />
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={districts}
                    defaultValue={'район'}
                    onChange={value => setDistrict(Number(value))}
                    value={district}
                />
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={towns}
                    defaultValue={'місто'}
                    onChange={value => setTown(Number(value))}
                    value={town}
                />
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={streets}
                    defaultValue={'Вулиця'}
                    onChange={value => setStreet(Number(value))}
                    value={street}
                />
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={houses}
                    defaultValue={'Дом'}
                    onChange={value => setHouse(Number(value))}
                    value={house}
                />
            </div>
            <div className="p-2 mx-auto rounded-lg border border-[#E7E7E7]  w-[368px] h-[48px]">
                <Select
                    options={flats}
                    defaultValue={'Квартира'}
                    onChange={value => setFlat(Number(value))}
                    value={flat}
                />
            </div>
            <div className="ml-[47px]">
                <InputField
                    label={'Адреса'}
                    type={'text'}
                    placeholder={'Назва адреси'}
                    name={'name'}
                    required={true}
                    value={flatName}
                    onChange={event => setFlatName(event.target.value)}
                />
            </div>
            <div>
                <button onClick={() => addObj(flat, flatName)}  className="w-[242px] h-[48px] ml-[110px] py-2.5 px-5 mr-2 mb-2 text-lg font-medium rounded text-white_figma bg-yellow_figma">Зберігти</button>
            </div>
        </div>
    );
};

export default AddAddress;
