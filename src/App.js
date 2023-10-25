import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialSate, Context, reducer } from "./store";
import Footer from "./components/footer";
import Header from "./components/header";

import Validate from "./pages/auth/validate";
import ValidateToken from "./pages/auth/validateToken";
import NotValid from "./pages/auth/notValid";

import News from "./pages/news.js";
import About from "./pages/about.js";
import Home from "./pages/home.js";
import Faq from "./pages/faq";
import Contacts from "./pages/contacts";

import Cabinet from "./pages/cabinet/cabinet";
import AddAddress from "./pages/cabinet/addAddress";
import MyData from "./pages/cabinet/myData";

import Counters from "./pages/counters/counters";
import CountersHistory from "./pages/counters/history";
import CountersGraphsTables from "./pages/counters/graphsTables";

import NotFound from "./pages/notFound";
import NewPassword from "./pages/auth/newPassword";
import UserAgreement from "./pages/userAgreement";
import Notification from "./pages/cabinet/notification";
import ValidateNewEmail from "./pages/cabinet/validateNewEmail";

const App = () => {
    return (
        <div className="app">
            <Context.Provider value={useReducer(reducer, initialSate)}>
                <BrowserRouter>
                    <Header />
                    <main className="w-[1152px] mx-auto mt-5">
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
                                <Route index element={<Cabinet />} />
                                <Route path="addAddress" element={<AddAddress />} />
                                <Route path="myData" element={<MyData />} />
                                <Route path="notification" element={<Notification />} />
                            </Route>
                            <Route path="/counters">
                                <Route index path=":objectId" element={<Counters />} />
                                <Route path=":objectId/history" element={<CountersHistory />} />
                                <Route path=":objectId/graphsTables" element={<CountersGraphsTables />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};

export default App;
