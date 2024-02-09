import Tabs from "../../components/tabs";
import Breadcrumbs from "../../components/breadcrumbs";
import Button from "../../components/button";
import { useContext, useState } from "react";
import {getAddress, getObject, updateAddress, updateUser} from "../../api";
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
    const [state, dispatch] = useContext(Context);
    // const [newsletter, setNewsletter] = useState(state.user.receiveNewsletter)
    // const [form, setForm] = useState({
    //     firstName: state.user.firstName,
    //     lastName: state.user.lastName,
    //     secondName: state.user.secondName,
    //     phone: state.user.phone,
    //     receiveNewsletter: state.user.receiveNewsletter,
    // });

    // const Submit = (event) => {
    //     event.preventDefault();
    //     updateUser(form).catch((error) => {
    //         console.error(error.message);
    //     });
    //     getAddress()
    //         .then((data) => dispatch({ type: 'setAddresses', payload: data }))
    //         .catch((error) => dispatch({ type: 'error', payload: error }))
    // };

    const handleInputChange = (event, objectId) => {
        const reminderTransferOfCounters = event.target.checked;
        updateAddress(objectId, {reminderTransferOfCounters})
            .then(() => {
                getAddress().then((data) => dispatch({ type: 'setAddresses', payload: data}))
            })
    };

    const handleInputChange2 = (event) => {
        const payload = {
            ...state.user,
            receiveNewsletter: event.target.checked
        }
        updateUser(payload).then(() => {
            getObject().then((data) => {
                dispatch({ type: 'setAccount', payload: data.account });
            });
        })
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
                                           checked={state.addresses[key].reminderTransferOfCounters}
                                           onChange={(event ) => handleInputChange(event, item.objectId)}
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
                            checked={state.user.receiveNewsletter}
                            onChange={handleInputChange2}
                        />
                        <div className="px-1">
                            Отримувати листи с новинами
                        </div>
                    </div>
                </div>

                {/*<div className="text-xs text-red-900 text-center">{ formError }</div>*/}
                {/*<div className="w-[368px]">*/}
                {/*    <Button type="button" label={'Зберігти зміни'} cssType={'primary'} onClick={Submit}/>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Notification;
