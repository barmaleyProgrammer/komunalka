import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Reg from "./UI/reg"
import Login from "./UI/login"

export default () => {
    return (
        <div className="app">
            <Login />
            {/*<Reg/>*/}
            {/*<Header />*/}
            {/*<main>*/}
            {/*    <Main />*/}
            {/*</main>*/}
            {/*<Footer />*/}
        </div>
    );
};
