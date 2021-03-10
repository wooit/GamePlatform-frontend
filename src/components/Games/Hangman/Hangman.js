import React, { Component } from "react";
import "./Hangman.css";
import img0 from "../../../assets/games/hangman/0.jpg";
import img1 from "../../../assets/games/hangman/1.jpg";
import img2 from "../../../assets/games/hangman/2.jpg";
import img3 from "../../../assets/games/hangman/3.jpg";
import img4 from "../../../assets/games/hangman/4.jpg";
import img5 from "../../../assets/games/hangman/5.jpg";
import img6 from "../../../assets/games/hangman/6.jpg";


const words = ["python","javascript","lua","jquery","mysql","php","react","perl","ruby","css","html","symfony","laravel","angular","vuejs","ember",'backbone','django','nodejs','express']

function randomWord(){
    return words[Math.floor(Math.random()* words.length)];
  }

class Hangman extends Component {
  static defaultProps = {
    nbMaxError: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };
  
  constructor(props) {
    super(props);
    this.state = { 
      nbMistakes: 0, 
      guessedLetters: new Set(), 
      answer: randomWord() 
    };
    //this.handleGuess = this.handleGuess.bind(this);
    //this.reset = this.reset.bind(this);
  }
 
//function reset btn pour restart with new word
  reset = () => {
    this.setState({
      nbMistakes : 0,
      guessedLetters: new Set(),
      answer: randomWord()
    })
  }

 //Je retourne le mot secret. Split chaque lettre. New Array with map => check si lettre est dans le set guessedLetters. 
  guessedWord() {
    return this.state.answer
      .split("")
      .map(letter => (this.state.guessedLetters.has(letter) ? letter : "_"));
  }

 // Ajout de la lettre selectionnée à guessedLetters.
 // j'incrémente nbMistakes si letter not incuded in answer
  handleGuess = (evt) => {
    let letter = evt.target.value;
    this.setState(st => ({
      guessedLetters: st.guessedLetters.add(letter),
      nbMistakes: st.nbMistakes + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  //Je génère un bouton par lettre de l'alphabet.
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessedLetters.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  render() {
    const gameOver = this.state.nbMistakes >= this.props.nbMaxError;
    const isWinner = this.guessedWord().join('') === this.state.answer;
    let gameState = this.generateButtons();
    if(isWinner) gameState = "Victoire"; // afin de remplacer mes boutons par un message de victoire ou défaite
    if(gameOver) gameState = "Perdu :("; 
    
    return (
      <div className="Container">
        <div className='Hangman'>
        <br></br><br></br>
          <h1 className="Hangman-title-orange">Le Pendu</h1>
          <br></br><br></br><br></br>
          <img src={this.props.images[this.state.nbMistakes]} alt={''} />
          <p className="Hangman-text">Nombre d'erreurs: {this.state.nbMistakes}</p>
          <p className='Hangman-word'>
            {!gameOver 
            ? this.guessedWord()
            : this.state.answer}
          </p>
          <p className='Hangman-btns'>{gameState}</p>
          <button id='reset' onClick={this.reset}>Restart?</button>
        </div>
      </div>
    );
  }
}

export default Hangman;
