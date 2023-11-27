import { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { initialSate, Context, reducer } from './store';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ScrollToTop from './components/scrollToTop';

const App = () => {
    return (
        <div className="app">
            <Context.Provider value={useReducer(reducer, initialSate)}>
                <BrowserRouter>
                    <ScrollToTop />
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};

export default App;
