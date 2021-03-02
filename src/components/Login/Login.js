import React, { Component } from 'react';
import TitleFormater from '../Formater/TitleFormater/TitleFormater';
import './Login.css';
import TextFormater from '../Formater/TextFormater/TextFormater';
import Axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username : "",
            password : ""
        }
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (evt) =>{
        this.setState({[evt.target.name] : evt.target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        Axios.post('http://localhost:5000/login', { user })
          .then(res=>{
            //console.log(res);
            console.log(res.data);
            if(res.data[0]){
                localStorage.setItem( 'isconnected', 'yes');
                window.location = "/"
            } else{
                //ici on gère l'erreur, on display message au user pour lui ERREUR MDP USERNAME
                this.setState({ error : "Combinaison mot de passe / nom d'utilisateur incorrect"})
            }
          })
      ;}
    render() {
        return (
            <div>
                <TitleFormater title="Login"/>
                <TextFormater>
                    <div className="Form">
                        <div className="Connec">
                            <form onSubmit={this.handleSubmit}>
                                <p className="Login-text">Deja membre?</p>
                                <h2 className="Login-text">Connexion</h2>
                                <input  type="text" 
                                        name='username'
                                        placeholder="nom d'utilisateur"
                                        value={this.state.username} 
                                        onChange={this.handleChange}/>
                                <input  type="text" 
                                        name="password"
                                        placeholder="mot de passe"
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                <button>Se connecter!!</button>
                            </form>
                            <div className="backgroundText" id="error-message">
                                { this.state.error ? this.state.error : '' }
                            </div>
                        </div>
                    </div>
                </TextFormater>
            </div>
        )
    }
}
export default Login;

