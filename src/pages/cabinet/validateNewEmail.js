import {useContext, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../api";
import {Context} from "../../store";

const ValidateNewEmail = () => {
    const [,dispatch] = useContext(Context);
    const url = new URL(window.location);
    const [form,] = useState({
        email: url.searchParams.get('email') || '',
        token: url.searchParams.get('code') || ''
    });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
                const result = await api.validationNewEmail(form);
                if (result.status === 200) {
                    await api.getObject().then((data) => {
                        dispatch({ type: 'setAccount', payload: data.account });
                    });
                    console.log(result)
                    navigate('/cabinet/myData');
                }
        };
        fetchData();
    }, []);
    return (<div>валидация</div>);
};
export default ValidateNewEmail;