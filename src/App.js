import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes'

import MyNavbar from './components/Navbar/MyNavbar';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        isconnected : false
    }
}
componentDidMount = async () =>{
  const isconnected = await localStorage.getItem("isconnected");
  console.log(typeof isconnected);
  console.log(isconnected)
  if(isconnected === 'yes'){
    this.setState({isconnected : true})
  }
}
  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Container className="p-0 background-image" fluid={true}>
              <MyNavbar isconnected={this.state.isconnected}/>
              <Routes/>
              <Footer/>
            </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
