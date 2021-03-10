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
                <Route path="/" exact render = { () => <Home user={this.props.user}/> }/>
                <Route path="/about" exact render = { () => <About user={this.props.user}/> }/>
                <Route path="/games" exact render = { () => <Games user={this.props.user}/> }/>
                <Route path="/contact" exact render = { () => <Contact user={this.props.user}/> }/>
                <Route path="/login" exact render = { () => <Login user={this.props.user}/> }/> 
                <Route path="/register" exact render = { () => <Register user={this.props.user}/> }/>
            </div>
        )
    }
}
export default Routes;