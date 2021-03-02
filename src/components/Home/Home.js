import React, { Component } from 'react'
import GamesDisplay from './GameDisplay/GamesDisplay';
import TitleFormater from '../Formater/TitleFormater/TitleFormater';
import HomeLog from './HomeLog';

class Home extends Component {
    checkIfUserLogged = () =>{
        if (localStorage.length === 0) {
            return <HomeLog/>
        }
    }

    componentDidMount = () => {
        console.log(this.props.isconnected);
      }
    render() {
        return (
            <div>
                <TitleFormater 
                    title='Game Platform' 
                    //subTitle='Préparation à la soutenance' 
                    text='un petit aperçu de mon travail réalisé pendant mon stage'  
                />
                 {this.checkIfUserLogged()}

                {/* <>
                    <h4><a className="backgroundText" id="aTag"href="/login">Connectez vous</a> ou <a className="backgroundText" href="/login">créez votre premier compte</a><br></br>
                    pour tenter votre chance parmis la liste des jeux disponibles!!! </h4>
                    <br></br><br></br><br></br>
                </> */}
               
                <GamesDisplay/>
                <br></br><br></br>
                <div className="backgroundText">
                    <h4>Ce site n'est à l'heure actuelle qu'une version Alpha!</h4> 
                    <h4>L'idée étant d'expérimenter et mettre en pratique les différents concepts que j'aborderai au fil du temps.</h4>
                </div>
                
            </div>
        )
    }
}
export default Home;