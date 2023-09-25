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

const initialSate = {
    isLoggedIn: checkToken(),
    user: checkUser(),
    addresses: checkAddresses(),
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
    reducer
}
