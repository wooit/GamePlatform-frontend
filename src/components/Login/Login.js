import React, { Component } from 'react';
import Axios from 'axios';
import TitleFormater from '../Formater/TitleFormater/TitleFormater';
import TextFormater from '../Formater/TextFormater/TextFormater';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        Axios.post('http://localhost:5000/login', { user })
        .then(res => {
            console.log(res.data);
            console.log(user);
            user.token = res.data; 
            localStorage.setItem('GamePlateformAuth', JSON.stringify({
                id: res.data.id,
                username: user.username,
                token: res.data.token
            }));
            window.location = '/'
          })
          .catch(err => {
              this.setState({ error : err.response.data.err})
              console.log(err.response.data.err)
          })
      ;}
    render() {
        return (
            <div>
                <TitleFormater title="Login"/>
                    <div className="Form">
                        <div className="Connec">
                            <form onSubmit={this.handleSubmit}>
                                <p className="Login-text">Déjà membre?</p>
                                <h2 className="Login-text">Connexion</h2>
                                <input  className="input"
                                        type="text" 
                                        name='username'
                                        placeholder="nom d'utilisateur"
                                        value={this.state.username} 
                                        onChange={this.handleChange}/>
                                <input  className="input"
                                        type="text" 
                                        name="password"
                                        placeholder="mot de passe"
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                <button className="button">Se connecter!!</button>
                            </form>
                            <div className="backgroundText" id="error-message">
                                { this.state.error || '' /* affiche le premier qui existe : équivaut à this.state.error?this.state.error : ''*/}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Login;

