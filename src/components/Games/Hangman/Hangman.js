import React, { Component } from "react";
import "./Hangman.css";
import img0 from "../../../assets/games/hangman/0.jpg";
import img1 from "../../../assets/games/hangman/1.jpg";
import img2 from "../../../assets/games/hangman/2.jpg";
import img3 from "../../../assets/games/hangman/3.jpg";
import img4 from "../../../assets/games/hangman/4.jpg";
import img5 from "../../../assets/games/hangman/5.jpg";
import img6 from "../../../assets/games/hangman/6.jpg";
import {randomWord} from './words.js';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    //Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }
//function reset btn pour restart with new word
  reset(){
    this.setState({
      nWrong : 0,
      guessed: new Set(),
      answer: randomWord()
    })
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    const altTxt = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
    const isWinner = this.guessedWord().join('') === this.state.answer;
    let gameState = this.generateButtons();
    if(isWinner) gameState = "Victoire";
    if(gameOver) gameState = "Perdu :(";
    return (
      <div className="Container">
        <div className='Hangman'>
        <br></br><br></br>
          <h1 className="Hangman-title">Le Pendu</h1>
          <br></br><br></br><br></br>
          <img src={this.props.images[this.state.nWrong]} alt={altTxt}/>
          <p className="Hangman-text">Nombre d'erreurs: {this.state.nWrong}</p>
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
