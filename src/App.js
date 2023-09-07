import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./components/main";
import Reg from "./UI/reg"
// import Login from "./UI/login"
import React from "react";
export default () => {
    return (
        <div className="app">
            {/*<Login />*/}
            <Reg/>
            {/*<Header />*/}
            {/*<main>*/}
            {/*    <Main />*/}
            {/*</main>*/}
            {/*<Footer />*/}
        </div>
    );
};
