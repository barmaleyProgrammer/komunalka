import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../store";
import api from "../../api";

const Validate = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    const [validateFlag, setValidateFlag] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const url = new URL(window.location);
            const email = url.searchParams.get('email') || '';
            const token = url.searchParams.get('code') || '';
            if (email && token) {
                const result = await api.validation(email, token);
                if (result.status === 200) {
                    setValidateFlag(true);
                    dispatch({ type: 'logIn' });
                    await api.getObject().then((data) => {
                        dispatch({ type: 'setAccount', payload: data.account });
                    });
                    await api.getServices().then((data) => {
                        dispatch({ type: 'services', payload: data });
                    });
                    await api.getServiceTypes().then((data) => {
                        dispatch({ type: 'serviceTypes', payload: data });
                    });
                    await api.getAddress().then((data) => {
                        dispatch({ type: 'setAddresses', payload: data });
                    })
                    navigate('/cabinet');
                }

            }
        };
        fetchData();
    }, []);
    return (<div></div>);
};
export default Validate;
