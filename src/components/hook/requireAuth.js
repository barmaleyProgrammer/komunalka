import { useContext } from 'react';
import { Context } from '../../store';

// https://www.youtube.com/watch?v=jv0ckzkKYzU&t=637s
// https://www.youtube.com/watch?v=oUZjO00NkhY&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=3
const RequireAuth = ({ children }) => {
    const [state] = useContext(Context);
    const isTokenExist = state.isLoggedIn;

    if (!isTokenExist) {
        return (<h1 className="text-xl text-center">Для доступу до сторінки необхідно увійти до системи</h1>)
    }

    return children;
};

export default RequireAuth;
