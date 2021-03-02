  
import React from 'react';
import './GameCard.css';
import GameInfo from './GameInfo/GameInfo';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
function GameCard(props) {

    return(
        <div onClick={(e) => props.click(props.game)}>
            {/* <Container >
                <Row className='justify-content-block'> */}
                <img className="gameCard" src={props.game.imgSrc} alt={props.game.imgSrc} />
            { props.game.selected && <GameInfo title={props.game.title} link={props.game.link} /> }
                {/* </Row>
                </Container> */}
            
        </div>
    );

}

export default GameCard;