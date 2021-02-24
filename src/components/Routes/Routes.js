import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Games from '../../components/Games/Games';
import Contact from '../../components/Contact/Contact';
class Routes extends Component {
    render() {
        return (
            <div>
            <Route path="/" exact render={() => <Home/> }/>
            <Route path="/about" exact render={() => <About/> }/>
            <Route path="/games" exact render={() => <Games/> }/>
            <Route path="/contact" exact render={() => <Contact/> }/>  
            </div>
        )
    }
}
export default Routes;