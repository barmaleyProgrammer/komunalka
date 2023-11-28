import {useContext} from 'react';
import { Context } from "../store";
import InputField from "./inputField";
import Button from "./button";
import 'react-tooltip/dist/react-tooltip.css';
import Neironka from "./neironka";

const CounterForms = ({counters, setCounters, Save}) => {
    const [state] = useContext(Context);

    const handleInputChange = (event, item) => {
        setCounters((prevData) => {
            const limit = 10;
            const clone = [...prevData];
            const index = clone.findIndex((i) => i.id === item.id);
            clone[index].currentReadings = event.target.value.slice(0, limit);
            return clone;
        });
    };

    return (
        <form action="#" onSubmit={Save}>
            {
                counters?.filter((item) => {
                    if (!state.serviceType) {
                        return true;
                    }
                    return (item.serviceType == state.serviceType);
                }).map((item, key) => {
                    return (
                        <div key={key} className="relative my-4 p-4 flex gap-x-4 rounded-lg border border-borderColor w-full">
                            <div className="w-2/3">
                                <ul>
                                    <li className="text-xs">Лічильник №{item.counterNo}</li>
                                    <li className="text-sm">{item.abcounter}</li>
                                    <li className="text-sm">{item.nameFirme}<br/>{item.namePlat}</li>
                                </ul>
                            </div>
                            <div className="w-44">
                                <InputField
                                    label={'Попередні показники'}
                                    type={'number'}
                                    name={`oldValue-${item.id}`}
                                    readOnly={true}
                                    value={item.oldValue}
                                />
                            </div>
                            <div className="w-44">
                                <InputField
                                    label={'Актуальні показники'}
                                    type={'number'}
                                    name={`currentReadings-${item.id}`}
                                    value={item.currentReadings}
                                    autocomplete="off"
                                    min={'0'}
                                    step={'0.01'}
                                    onChange={(e) => handleInputChange(e, item)}
                                />
                            </div>
                            <p className="absolute bottom-0 right-24 text-sm">Зараз прийом показань недоступний</p>
                            <Neironka />
                        </div>
                    );
                })
            }
            <div className="flex mx-auto justify-between">
                <p className="py-3 font-light">Невірний номер лічильника або показники?&nbsp;
                    <a style={{color: '#3E77AA'}} href="#">Надішліть запит фахівцям
                    </a>
                </p>
                <div className="h-12 w-52">
                    <Button type="submit" label={'Передати показники'} cssType={'primary'} />
                </div>
            </div>
        </form>
    );
};

export default CounterForms;
