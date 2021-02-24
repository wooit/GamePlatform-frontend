import React from 'react';
import { useSpring, animated } from 'react-spring'

function GameInfo(props) {
     const style = useSpring({opacity: 1, from: {opacity: 0}});

     return(
         <animated.div className="g-card-info" style={style}>
             <p className="g-card-title">{props.title}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">En savoir plus sur ce jeu</a>
         </animated.div>
     );

     }
export default GameInfo;

