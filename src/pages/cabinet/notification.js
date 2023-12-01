import Tabs from "../../components/tabs";
import Breadcrumbs from "../../components/breadcrumbs";
import Button from "../../components/button";
import { useContext, useState } from "react";
import { updateUser } from "../../api";
import { Context } from "../../store";

const breadCrumbs = [
    {
        "to": '/',
        "label": 'Головна'
    },
    {
        "to": '/cabinet',
        "label": 'Особистий кабінет'
    },
    {
        "to": '/cabinet/myData',
        "label": 'Мої дані'
    },
    {
        "to": '',
        "label": 'Оповіщення'
    },
];

const Notification = () => {
    const [state] = useContext(Context);
    const [form, setForm] = useState({
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        secondName: state.user.secondName,
        phone: state.user.phone,
        receiveNewsletter: false,
        reminderTransferOfCounters: false
    });

    const Submit = (event) => {
        event.preventDefault();
        updateUser(form).catch((error) => {
            console.error(error.message);
        });
    };
    const handleInputChange = (event) => {
        const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        setForm((prevProps) => ({
            ...prevProps,
            [event.target.name]: value
        }));
    };

    return (
        <>
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <div className="mt-6 mb-8">
                <Tabs />
            </div>
            <div className="font-light text-sm py-10 px-20 rounded-lg shadow-myCustom">
                <h1 className="font-normal text-xl mb-4">Email розсилка</h1>
                <div className="mb-4">
                    <h2>Нагадувати про передачу лічильників</h2>
                    {
                        state.addresses?.map((item, key) => {
                            return (
                                <div key={key} className="px-8 flex mb-2 mt-2">
                                    <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                           id="reminderTransferOfCounters"
                                           name={'reminderTransferOfCounters'}
                                           type="checkbox"
                                           checked={form.reminderTransferOfCounters}
                                           onChange={handleInputChange}
                                    />
                                    <div className="px-1 font-light text-sm">
                                        { item.name }
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="flex">
                        <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            id="receiveNewsletter"
                            name={'receiveNewsletter'}
                            type="checkbox"
                            checked={form.receiveNewsletter}
                            onChange={handleInputChange}
                        />
                        <div className="px-1">
                            Отримувати листи с новинами
                        </div>
                    </div>
                </div>

                {/*<div className="text-xs text-red-900 text-center">{ formError }</div>*/}
                <div className="w-[368px]">
                    <Button type="button" label={'Зберігти зміни'} cssType={'primary'} onClick={Submit}/>
                </div>
            </div>
        </>
    );
};

export default Notification;
