import Tabs from "../../components/tabs";
import Breadcrumbs from "../../components/breadcrumbs";
import Button from "../../components/button";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Notification = () => {
    const [formError, setFormError] = useState('');

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
    ]

    // const Submit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const result = await api.updateUser(form);
    //         console.log(result)
    //         dispatch({ type: 'setAccount', payload: form })
    //
    //         if (result.status === 200) {
    //             setValidateFlag(true);
    //             setModalActive(true);
    //         }
    //     } catch (e) {
    //         console.error(e.message);
    //         setFormError(e.message);
    //     }
    // };



    return (
        <>
            <div className="w-[1152px] mx-auto px-20 mt-2">
                <div>
                    <Breadcrumbs items={breadCrumbs}/>
                </div>
                <div className="mt-6 mb-8">
                    <Tabs />
                </div>
                <div className="py-10 px-20 font-light rounded-lg shadow-myCustom">
                    <h1 className="font-normal text-xl mb-4">Email розсилка</h1>
                    <div className="mb-4">
                        <div className="flex mb-2">
                            <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                   id="rememberMe"
                                   name={'rememberMe'}
                                   type="checkbox"
                                // checked={form.rememberMe}
                                // onChange={handleInputChange}
                            />
                            <div className="px-2 font-light text-sm">
                                Нагадувати про передачу лічильників
                            </div>
                        </div>
                        <div className="flex">
                            <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                   id="rememberMe"
                                   name={'rememberMe'}
                                   type="checkbox"
                                // checked={form.rememberMe}
                                // onChange={handleInputChange}
                            />
                            <div className="px-2 font-light text-sm">
                                Отримувати листи с новинами
                            </div>
                        </div>
                    </div>

                    {/*<div className="text-xs text-red-900 text-center">{ formError }</div>*/}
                    <div className="w-[368px]">
                    <Button type="button" label={'Зберігти зміни'} cssType={'primary'} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Notification;
