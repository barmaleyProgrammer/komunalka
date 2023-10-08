import { createContext } from "react";

const checkToken = () => {
    const token = sessionStorage.getItem('accessToken');
    return token ? true : false;
};

const checkUser = () => {
    const user = sessionStorage.getItem('user');
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
    const addresses = sessionStorage.getItem('addresses');
    return addresses ? JSON.parse(addresses) : [];
};

const checkServiceTypes = () => {
    const data = sessionStorage.getItem('serviceTypes');
    return data ? JSON.parse(data) : [];
};

const checkServices = () => {
    const data = sessionStorage.getItem('services');
    return data ? JSON.parse(data) : [];
};

const Context = createContext(null);

const initialSate = {
    isLoggedIn: checkToken(),
    user: checkUser(),
    addresses: checkAddresses(),
    services: checkServices(),
    serviceTypes: checkServiceTypes(),
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
        default:
            return state;
    }
};

export {
    initialSate,
    Context,
    reducer
}
