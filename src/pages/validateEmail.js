import {useEffect, useState} from 'react';
import api from "../api";

const ValidateEmail = () => {
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
                }

            }
        };
        fetchData();
    }, []);
    return (
        <div className="w-[50%] mx-auto">
            <h2 className="py-1 text-[24px]">Контакти</h2>
        </div>
    );
};
export default ValidateEmail;