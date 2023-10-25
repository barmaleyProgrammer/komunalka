import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../store";
import api from "../../api";

const Validate = () => {
    const [,dispatch] = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        const url = new URL(window.location);
        const token = url.searchParams.get('accessToken') || '';
        if (token) {
            localStorage.setItem('accessToken', token);
            dispatch({ type: 'logIn' });
            api.getObject().then((data) => {
                dispatch({ type: 'setAccount', payload: data.account });
            });
            api.getServices().then((data) => {
                dispatch({ type: 'services', payload: data });
            });
            api.getServiceTypes().then((data) => {
                dispatch({ type: 'serviceTypes', payload: data });
            });
            api.getAddress().then((data) => {
                dispatch({ type: 'setAddresses', payload: data });
            })
            navigate('/cabinet');
        }
    }, []);
    return (<></>);
};
export default Validate;
