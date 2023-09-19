import React from 'react';
import Input from '../Input'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesses from '../Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [gameState, setGameState] = React.useState('playing')
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [guesses, setGuesses] = React.useState([])

  function addGuess(word) {
    const newGuesses = [...guesses, word]
    setGuesses(newGuesses)
    if (word === answer) {
      setGameState('won')
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost')
    }
  }

  function playAgain() {
    setAnswer(sample(WORDS))
    setGameState('playing')
    setGuesses([])
  }

  return (
    <>
      <Guesses guesses={guesses} ans={answer} />
      <Input addGuess={addGuess} isPlaying={gameState === 'playing'} />
      {gameState !== "playing" && <div className={`banner ${gameState === 'won' ? 'happy' : 'sad'}`}>
        {gameState === 'won' ? 
          <p><strong>Congratulations!</strong> Got it in {' '}
          <strong>{guesses.length} guesses</strong>.</p> : 
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
        <button className="btn" onClick={playAgain}>Play again?</button>
      </div>}
    </>
  );
}

export default Game;
