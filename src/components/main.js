import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../store';

import Validate from '../pages/auth/validate';
import ValidateToken from '../pages/auth/validateToken';
import NotValid from '../pages/auth/notValid';

import News from '../pages/news.js';
import About from '../pages/about.js';
import Home from '../pages/home.js';
import Faq from '../pages/faq';
import Contacts from '../pages/contacts';

import Cabinet from '../pages/cabinet/cabinet';
import AddAddress from '../pages/cabinet/addAddress';
import MyData from '../pages/cabinet/myData';

import Counters from '../pages/counters/counters';
import CountersHistory from '../pages/counters/history';
import CountersGraphsTables from '../pages/counters/graphsTables';

import NotFound from '../pages/notFound';
import NewPassword from '../pages/auth/newPassword';
import UserAgreement from '../pages/userAgreement';
import Notification from '../pages/cabinet/notification';
import ValidateNewEmail from '../pages/cabinet/validateNewEmail';

import RequireAuth from './hook/requireAuth';
import ErrorModal from './errorModal';

const Main = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <main className="w-[1152px] mx-auto mt-5">
            { state.error && <ErrorModal close={() => dispatch({ type: 'error', payload: '' })} error={state.error} /> }
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/news/:id?" element={<News />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/userAgreement" element={<UserAgreement />} />

                <Route path="/change/email" element={<ValidateNewEmail />} />
                <Route path="/validate/email" element={<Validate />} />
                <Route path="/password/reset/link" element={<NewPassword />} />
                <Route path="/validateToken" element={<ValidateToken />} />
                <Route path="/notValid" element={<NotValid />} />

                <Route path="/cabinet">
                    <Route index element={
                        <RequireAuth>
                            <Cabinet />
                        </RequireAuth>
                    } />
                    <Route path="addAddress" element={
                        <RequireAuth>
                            <AddAddress />
                        </RequireAuth>
                    } />
                    <Route path="myData" element={
                        <RequireAuth>
                            <MyData />
                        </RequireAuth>
                    } />
                    <Route path="notification" element={
                        <RequireAuth>
                            <Notification />
                        </RequireAuth>
                    } />
                </Route>
                <Route path="/counters">
                    <Route index path=":objectId" element={
                        <RequireAuth>
                            <Counters />
                        </RequireAuth>
                    } />
                    <Route path=":objectId/history" element={
                        <RequireAuth>
                            <CountersHistory />
                        </RequireAuth>
                    } />
                    <Route path=":objectId/graphsTables" element={
                        <RequireAuth>
                            <CountersGraphsTables />
                        </RequireAuth>
                    } />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;
