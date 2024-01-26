import Breadcrumbs from '../components/breadcrumbs';
import {useEffect, useState} from "react";
import {contactInfo} from "../api2";

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Контакти'
    },
];

const Contacts = () => {

    const [phones, setPhones] = useState([]);
    const [emails, setEmails] = useState([]);
    const [socials, setSocials] = useState([]);
    useEffect( () => {
        contactInfo().then((result) => {
            setPhones(result.phones)
            setEmails(result.emails)
            setSocials(result.socials)
        });
    }, []);

    return (
        <>
            <div>
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="text-2xl mt-4">Контакти</h2>
            <div className="flex justify-between">
                <div className=" mt-4">
                    <p className="text-lg mb-4">Телефон</p>
                    <div className="text-sm font-light gap-y-3">
                        <ul>
                            {
                                phones.map((item, key) => {
                                    return (
                                        <li key={key} className="whitespace-nowrap mb-4"><a href={`tel:${item}`}></a>{ item }</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className=" mt-4">
                    <p className="text-lg mb-4">Email</p>
                    {
                        emails.map((item, key) => {
                            return (
                                <a key={key} className="text-sm font-light" href={`mailto:${item}`}>{ item }</a>
                            )
                        })
                    }
                </div>
                <div className=" mt-4">
                    <p className="text-lg mb-4 whitespace-nowrap">Соціальні мережі</p>
                    <div className="flex space-x-4 justify-between">
                        {
                            socials.map((item, key) => {
                                return (
                                    <a key={key} href={`${item.url}`}>
                                        <img src={ item.img } alt=""/>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
