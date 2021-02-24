import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import geoLogo from '../../assets/geoLogo.png';

class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar-dark" bg="transparent" expand="xl">
                  <Link className="navbar-dark" to="/"><img src={geoLogo} alt="My logo" className="Logo"/></Link>
                  <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                  <Navbar.Collapse id="navbar-toggle">  
                  <Nav className="ml-auto navbar-nav">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/games">Games</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>                    
                  </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default MyNavbar;














