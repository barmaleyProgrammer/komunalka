import { useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import News from "./pages/news.js";
import About from "./pages/about.js";
import Main from "./components/main.js";
import Reg from "./UI/reg";
import Login from "./UI/login";
import Faq from "./pages/FAQ";
import Contacts from "./pages/contacts";
import CabinetMyAdresses from "./pages/cabinetMyAdresses";
import AddAdressForm from "./components/assets/addAdressForm";
import ValidateEmail from "./pages/validateEmail";
import Counters from "./pages/counters";
import Header from "./components/header";
import MyData from "./pages/myData";
import { initialSate, reducer } from "./state";

export const Context = createContext(null);

const App = () => {
    return (
        <div className="app">
            <Context.Provider value={useReducer(reducer, initialSate)}>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="about" element={<About />} />
                            <Route path="faq" element={<Faq />} />
                            <Route path="news" element={<News />} />
                            <Route path="contacts" element={<Contacts />} />
                            <Route path="login" element={<Login />} />
                            <Route path="reg" element={<Reg />} />
                            <Route path="cabinet" element={<CabinetMyAdresses />} />
                            <Route path="addAdressForm" element={<AddAdressForm />} />
                            <Route path="validate/email" element={<ValidateEmail />} />
                            <Route path="counters/:objectId" element={<Counters />} />
                            <Route path="myData" element={<MyData />} />
                        </Routes>
                    </main>
                    <Footer />
                </BrowserRouter>
                {/*<Login />*/}
                {/*<Reg/>*/}
                {/*<main>*/}
                {/*    <Main />*/}
                {/*</main>*/}
                {/*<Footer />*/}
            </Context.Provider>
        </div>
    );
};

export default App;
