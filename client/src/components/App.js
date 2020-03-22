import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import history from '../utils/history'
import './App.css';

/*************************Import Layout********************************/
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Routes from './Routes';


class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Nav history={history} />
                    <Routes history={history} />
                    <Footer />
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default App