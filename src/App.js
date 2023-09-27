import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialSate, Context, reducer } from "./store";
import Footer from "./components/footer";
import Header from "./components/header";

import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Validate from "./pages/auth/validate";

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
import ResetParol from "./pages/auth/resetPassword";
import NotFound from "./pages/notFound";

const App = () => {
    return (
        <div className="app">
            <Context.Provider value={useReducer(reducer, initialSate)}>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/contacts" element={<Contacts />} />

                            <Route path="/auth">
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path="validate" element={<Validate />} />
                                <Route path="resetParol" element={<ResetParol />} />
                            </Route>
                            <Route path="/validate/email" element={<Validate />} />
                            <Route path="/cabinet">
                                <Route index element={<Cabinet />} />
                                <Route path="addAddress" element={<AddAddress />} />
                                <Route path="myData" element={<MyData />} />
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
