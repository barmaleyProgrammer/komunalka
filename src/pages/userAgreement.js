import './userAgreement.css';
import Breadcrumbs from '../components/breadcrumbs';
import {useEffect, useState} from "react";
import {agreementInfo} from "../api2";

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Угода користувача'
    },
]
const UserAgreement = () => {
    const [agreement, setAgreement] = useState({});
    useEffect( () => {
        agreementInfo().then((result) => setAgreement(result));
    }, []);
    return (
        <>
            <Breadcrumbs items={breadCrumbs} />
            <h1 dangerouslySetInnerHTML = {{ __html: agreement.title }} className="mt-5 mb-5 text-2xl font-normal not-italic"></h1>
            <p dangerouslySetInnerHTML = {{ __html: agreement.description }} className="text-base mb-8 font-light"></p>
            <div className="news">
                <div dangerouslySetInnerHTML = {{ __html: agreement.body }} ></div>
            </div>
        </>
    );
};

export default UserAgreement;
