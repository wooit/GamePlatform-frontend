import React, { Component } from 'react'
import GamesDisplay from './GameDisplay/GamesDisplay';
import TitleFormater from '../Formater/TitleFormater/TitleFormater';

class Home extends Component {
    render() {
        return (
            <div>
                <TitleFormater 
                    title='Beweb Project' 
                    subTitle='Préparation à la soutenance' 
                    text='un petit aperçu de mon travail réalisé pendant mon stage'  
                />
                <h4>Pour tenter votre chance, rendez-vous dans la section Games!!!</h4><br></br><br></br><br></br>
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