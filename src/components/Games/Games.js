import { React, Component } from 'react'
import Lightout from './Lightout/Lightout';
import Hangman from './Hangman/Hangman';
export class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: false
        };
    }
    render() {
        return (
            <div>
                <h2>Choisissez un jeu {this.props.user}</h2><br></br>
                <div>
                    <div className="btn-spacing">
                        <button id="btn-game" className="btnGames" onClick={() => { this.setState({game: true}) }}>Lights Out</button>
                        <button id="btn-game" className="btnGames" onClick={() => { this.setState({game: false}) }}>Le Pendu</button>
                    </div>
                    {this.state.game ? <Lightout  nbRows={5} nbCols={5} lightOn={0.25}/> : <Hangman /> }
                </div>
            </div>
        )
    }
}

export default Games;
