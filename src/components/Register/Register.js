import React, { Component } from 'react';
import TitleFormater from '../Formater/TitleFormater/TitleFormater';
import TextFormater from '../Formater/TextFormater/TextFormater';
import Axios from 'axios';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            username : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmitReg.bind(this);
    };

    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
        //console.log(evt.target.value)
    }

    handleSubmitReg = evt => {
        evt.preventDefault();
        const user = {
          username: this.state.username,
          password: this.state.password
        }
        Axios.post('http://localhost:5000/register', { user })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            if(res.data[0]){
                localStorage.setItem( 'isconnected', 'yes');
                window.location = "/"
            } else{
                //ici on gère l'erreur, on display message au user pour lui ERREUR MDP USERNAME
                this.setState({ error : "Ce nom d'utilisateur est déjà utilisé"})
            }
          })
      }
    render() {
        return (
            <div>
                <TitleFormater title="Register"/>
                <TextFormater>
                    <div className="Form">
                        <div className="Connec">
                            <form onSubmit={this.handleSubmitReg}>
                                <p className="Login-text">Pas encore membre?</p>
                                <h2 className="Login-text">Enregistrement</h2>
                                {/* <label>Nom d'utilisateur</label> */}
                                <input  type="text" 
                                        //placeholder="votre nom d'utilisateur"
                                        name='username'
                                        value={this.state.username} 
                                        onChange={this.handleChange}/>
                                {/* <label>Mot de passe</label> */}
                                <input  type="text" 
                                        //placeholder="votre mot de passe"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                <button>Se connecter!!</button>
                            </form>
                            <div className="error-message">
                                { this.state.error ? this.state.error : '' }
                            </div>
                        </div>
                    </div>
                </TextFormater>
            </div>
        )
    }
}
export default Register;

