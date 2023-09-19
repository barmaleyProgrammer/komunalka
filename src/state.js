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


const initialSate = {
    isLoggedIn: checkToken(),
    user: checkUser(),
    addresses: []
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
        default:
            return state;
    }
};

export {
    initialSate,
    reducer
}
