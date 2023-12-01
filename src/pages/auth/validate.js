import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store';
import { validation, getObject, getServices, getServiceTypes, getAddress } from '../../api';

const Validate = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = () => {
            const url = new URL(window.location);
            const email = url.searchParams.get('email') || '';
            const token = url.searchParams.get('code') || '';
            if (email && token) {
                validation(email, token).then(() => {
                    dispatch({ type: 'logIn' });
                    const req1 = getObject().then((data) => {
                        dispatch({ type: 'setAccount', payload: data.account });
                    });
                    const req2 = getServices().then((data) => {
                        dispatch({ type: 'services', payload: data });
                    });
                    const req3 = getServiceTypes().then((data) => {
                        dispatch({ type: 'serviceTypes', payload: data });
                    });
                    const req4 = getAddress().then((data) => {
                        dispatch({ type: 'setAddresses', payload: data });
                    });
                    Promise.all([req1, req2, req3, req4]).then(() => {
                        navigate('/cabinet');
                    });
                });
            }
        };
        fetchData();
    }, []);

    return (<></>);
};
export default Validate;
