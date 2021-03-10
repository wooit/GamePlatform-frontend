import React from 'react'
import { useState } from 'react';
import Lightout from './Lightout/Lightout';
import Hangman from './Hangman/Hangman';


// trouver un moyen de return Games si res.data = true
function Games(){
    const [choice, setGame] = useState(false);
    
    return (
        <div >
           <h2>Choisissez un jeu</h2><br></br>
            <div>
                <div className="btn-spacing">
                    <button id="btn-game" className="btnGames" onClick={() => {setGame(true)}}>Lights Out</button>
                    <button id="btn-game" className="btnGames" onClick={() => {setGame(false)}}>Le Pendu</button>
                </div>
                {choice ? <Lightout  nbRows={5} nbCols={5} lightOn={0.25}/> : <Hangman /> }
            </div>
        </div>
    );
}   
export default Games;
