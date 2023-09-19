import React from 'react';
import { checkGuess } from '../../game-helpers'

function Guess({ word = '', ans }) {
  const res = word === '' ? new Array(5).fill(' ') : checkGuess(word, ans)

  return (
    <>
      <p className="guess">
        {res.map((c, i) => <span key={i} className={`cell ${c.status ? c.status : ''}`}>{c.letter}</span>)}
      </p>
    </>
  );
}

export default Guess;
