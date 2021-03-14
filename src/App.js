import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Routes from './components/Routes/Routes'
import MyNavbar from './components/Navbar/MyNavbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: ''
    }
}
  componentWillMount = () => {
    const credentials = JSON.parse(localStorage.getItem('GamePlateformAuth'));

    if (credentials && credentials.username && credentials.token) {
      Axios.post('http://localhost:5000/isLogged', { credentials })
      .then(res => {
        if (res.data)
            this.setState({ user : res.data });
        else
          window.location = '/login';
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Container className="p-0 background-image" fluid={true}>
              <MyNavbar user={this.state.user}/>
              <Routes user={this.state.user}/>
              {/* <Footer/> */}
            </Container>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
