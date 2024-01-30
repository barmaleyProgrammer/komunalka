import { createContext } from 'react';
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
const checkContacts = () => {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : {
        phones: [],
        emails: [],
        socials: []
    };
};

export const Context = createContext(null);

export const initialSate = {
    isLoggedIn: checkToken(),
    user: checkUser(),
    addresses: checkAddresses(),
    services: checkServices(),
    serviceTypes: checkServiceTypes(),
    serviceType: '',
    provider: '',
    // contacts: checkContacts(),
    contacts: {
        phones: [],
        emails: [],
        socials: []
    },
    counter: '',
    startDate: moment().add(-3, 'months'),
    // startDate: moment().startOf('year'),
    endDate: moment().endOf('month'),
    error: ''
};

export const reducer = (state, action) => {
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
        case 'contacts':
            return {
                ...state,
                contacts: action.payload
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
                counter: '',
                serviceType: Number(action.payload)
            };
        case 'provider':
            return {
                ...state,
                counter: '',
                provider: Number(action.payload)
            };
        case 'counter':
            return {
                ...state,
                counter: Number(action.payload)
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
        case 'error':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
