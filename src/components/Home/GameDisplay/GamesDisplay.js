import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GameCard from './GameCard/GameCard';
import lightoutIMG from '../../../assets/games/lightout/lightout.png';
import hangmanIMG from '../../../assets/games/hangman/hangman.webp';

class GamesDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [
                {
                    id: 0,
                    title: 'Light Out',
                    imgSrc: lightoutIMG,
                    link: 'https://cran.r-project.org/web/packages/lightsout/vignettes/overview.html',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Jeu du pendu',
                    imgSrc: hangmanIMG,
                    link: 'https://en.wikipedia.org/wiki/Hangman_(game)',
                    selected: false
                },
                
            ]
        }
    }
    handleCardClick = (id) => {
        let games = [...this.state.games];
        games[id].selected = games[id].selected ? false : true;
        games.forEach(game =>{
            if(game.id !== id){
                game.selected = false;
            }
        })
        this.setState({
            games
        });
    }

    makeItems = (games) => {
        return games.map(game => {
            return <GameCard game={game} click={(e => this.handleCardClick(game.id, e))} key={game.id} />
        })
    }
    render() {
        return (
            <div>
                <Container fluid={false}>
                    <Row className='justify-content-around'>
                        {this.makeItems(this.state.games)}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default GamesDisplay;
