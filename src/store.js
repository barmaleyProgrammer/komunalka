import { createContext } from "react";
import moment from 'moment';

const checkToken = () => {
    const token = localStorage.getItem('accessToken');
    return token ? true : false;
};

const checkUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {
        email: '',
        accountId: '',
        firstName: '',
        lastName: '',
        secondName: '',
        phone: '',
        createdDateTime: '',
        updatedDateTime: '',
    };
};

const checkAddresses = () => {
    const addresses = localStorage.getItem('addresses');
    return addresses ? JSON.parse(addresses) : [];
};

const checkServiceTypes = () => {
    const data = localStorage.getItem('serviceTypes');
    return data ? JSON.parse(data) : [];
};

const checkServices = () => {
    const data = localStorage.getItem('services');
    return data ? JSON.parse(data) : [];
};

const Context = createContext(null);

const initialSate = {
    isLoggedIn: checkToken(),
    user: checkUser(),
    addresses: checkAddresses(),
    services: checkServices(),
    serviceTypes: checkServiceTypes(),
    serviceType: '',
    provider: '',
    startDate: moment().add(-3, 'months'),
    endDate: moment().endOf('month'),

};

const reducer = (state, action) => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                isLoggedIn: true
            };
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false
            };
        case 'setAccount':
            return {
                ...state,
                user: action.payload
            };
        case 'setAddresses':
            return {
                ...state,
                addresses: action.payload
            };
        case 'service':
            return {
                ...state,
                services: action.payload
            };
        case 'serviceTypes':
            return {
                ...state,
                serviceTypes: action.payload
            };
        case 'serviceType':
            return {
                ...state,
                provider: '',
                serviceType: action.payload
            };
        case 'provider':
            return {
                ...state,
                provider: action.payload
            };
        case 'startDate':
            return {
                ...state,
                startDate: action.payload
            };
        case 'endDate':
            return {
                ...state,
                endDate: action.payload
            };
        default:
            return state;
    }
};

export {
    initialSate,
    Context,
    reducer
}
