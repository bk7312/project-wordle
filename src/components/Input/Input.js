import React from 'react';

function Input({ addGuess , isPlaying}) {
  const [guess, setGuess] = React.useState('')

  function handleChange(e) {
    const text = e.target.value.toUpperCase()
    setGuess(text)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (guess.length !== 5) return
    addGuess(guess)
    setGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        disabled={!isPlaying}
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
