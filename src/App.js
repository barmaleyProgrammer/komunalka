import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import News from "./pages/news.js";
import About from "./pages/about.js";
import Reg from "./UI/reg";
import Login from "./UI/login";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <main>
                <Routes>
                    {/*<Route path="main" element={<Main/>} />*/}
                    <Route path="about" element={<About/>} />
                    <Route path="news" element={<News />} />
                    <Route path="login" element={<Login />} />
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
