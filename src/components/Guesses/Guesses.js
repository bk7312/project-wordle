import React from 'react';
import Guess from '../Guess'
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ guesses, ans }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((n) => <Guess key={n} word={guesses[n]} ans={ans}/>)}
    </div>
  );
}

export default Guesses;
