import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from "./components/main";
export default () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Main />
            </main>
            <Footer />
        </div>
    );
};
