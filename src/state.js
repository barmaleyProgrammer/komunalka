
// const checkTocken = () => {
//     const token = sessionStorage.getItem('accessToken');
//     return token ? true : false;
// }


const initialSate = {
    isLoggedIn: () => !!sessionStorage.getItem('accessToken'),
    user: {

    }
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
        default:
            return state;
    }
};

export {
    initialSate,
    reducer
}
