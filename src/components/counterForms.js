import { useContext } from 'react';
import { Context } from "../store";
import InputField from "./inputField";
import Button from "./button";

const CounterForms = ({counters, setCounters, Save}) => {
    const [state] = useContext(Context);

    const handleInputChange = (event, item) => {
        setCounters((prevData) => {
            const clone = [...prevData];
            const index = clone.findIndex((i) => i.id === item.id);
            clone[index].currentReadings = event.target.value;
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
                        <div key={key} className="my-4 p-4 flex gap-x-4 rounded-lg border border-borderColor w-full">
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
                                    name={`oldValue-${item.id}`}
                                    readOnly={true}
                                    value={item.oldValue}
                                />
                            </div>
                            <div className="w-44">
                                <InputField
                                    label={'Актуальні показники'}
                                    name={`currentReadings-${item.id}`}
                                    autoComplete="off"
                                    value={item.currentReadings}
                                    onChange={(e) => handleInputChange(e, item)}
                                />
                            </div>
                        </div>
                    );
                })
            }
            <div className="mx-auto w-28">
                <Button type="submit" label={'Відправити'} cssType={'primary'} />
            </div>
        </form>
    );
};

export default CounterForms;
