import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes'

import MyNavbar from './components/Navbar/MyNavbar';
class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Container className="p-0 background-image" fluid={true}>
              <MyNavbar/>
              <Routes/>
              <Footer/>
            </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
