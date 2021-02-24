  
import React from 'react';
import './GameCard.css';
import GameInfo from './GameInfo/GameInfo';
function GameCard(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.game)}>
            <img className="gameCard" src={props.game.imgSrc} alt={props.game.imgSrc} />
            { props.game.selected && <GameInfo title={props.game.title} link={props.game.link} /> }
        </div>
    );

}

export default GameCard;