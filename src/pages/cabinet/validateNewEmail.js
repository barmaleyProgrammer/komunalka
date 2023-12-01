import {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { validationNewEmail, getObject } from '../../api';
import { Context } from '../../store';

const ValidateNewEmail = () => {
    const [,dispatch] = useContext(Context);
    const url = new URL(window.location);
    const [form,] = useState({
        email: url.searchParams.get('email') || '',
        token: url.searchParams.get('code') || ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        validationNewEmail(form).then(() => {
            getObject().then((data) => {
                dispatch({ type: 'setAccount', payload: data.account });
                navigate('/cabinet/myData');
            });
        });
    }, []);
    return (<div>валидация</div>);
};
export default ValidateNewEmail;
