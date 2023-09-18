
// const checkTocken = () => {
//     const token = sessionStorage.getItem('accessToken');
//     return token ? true : false;
// }


const initialSate = {
    isLoggedIn: () => !!sessionStorage.getItem('accessToken'),
    user: JSON.parse(sessionStorage.getItem('user')) || {
        email: '',
        accountId: '',
        firstName: '',
        lastName: '',
        secondName: '',
        phone: '',
        createdDateTime: '',
        updatedDateTime: '',
    },
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
