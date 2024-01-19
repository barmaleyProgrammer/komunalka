import Breadcrumbs from '../components/breadcrumbs';
import {useEffect, useState} from "react";
import {aboutInfo} from "../api2";

const breadCrumbs = [
    {
        'to': '/',
        'label': 'Головна'
    },
    {
        'to': '',
        'label': 'Про нас'
    },
];

const About = () => {

    const [about_us, setAbout_us] = useState({});
    useEffect( () => {
        aboutInfo().then((result) => setAbout_us(result));
    }, []);

    return (
        <>
            <div className="mb-4">
                <Breadcrumbs items={breadCrumbs}/>
            </div>
            <h2 className="text-2xl mb-4" dangerouslySetInnerHTML = {{ __html: about_us.title }}></h2>
            <p className="text-sm" dangerouslySetInnerHTML = {{ __html: about_us.body }}></p>
        </>
    );
};

export default About;
