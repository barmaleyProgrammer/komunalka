import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import News from "./pages/news.js";
import About from "./pages/about.js";
import Reg from "./UI/reg";
import Login from "./UI/login";
import Faq from "./pages/FAQ";
import Contacts from "./pages/contacts";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <main>
                <Routes>
                    {/*<Route path="main" element={<Main/>} />*/}
                    <Route path="about" element={<About/>} />
                    <Route path="faq" element={<Faq/>} />
                    <Route path="news" element={<News />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="login" element={<Login />} />
                    <Route path="reg" element={<Reg />} />
                </Routes>
                </main>
                <Footer  />
            </Router>
            {/*<Login />*/}
            {/*<Reg/>*/}
            {/*<Header />*/}
            {/*<main>*/}
            {/*    <Main />*/}
            {/*</main>*/}
            {/*<Footer />*/}
        </div>
    );
};

export default App;
