import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Games from '../../components/Games/Games';
import Contact from '../../components/Contact/Contact';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
class Routes extends Component {
    render() {
        return (
            <div>
            <Route path="/" exact render={() => <Home/> }/>
            <Route path="/about" exact render={() => <About/> }/>
            <Route path="/games" exact render={() => <Games/> }/>
            <Route path="/contact" exact render={() => <Contact/> }/>
            <Route path="/login" exact render={() => <Login/> }/> 
            <Route path="/register" exact render={() => <Register/> }/> 
            </div>
        )
    }
}
export default Routes;