import React from 'react';

function GuessInput({ submitGuessesHandler, gameStatus }) {
  const [guessWord, setGuessWord] = React.useState('');

  const inputHandler = (event) => setGuessWord(event.target.value.toUpperCase());
  const submitHandler = (event) => {
    event.preventDefault();
    submitGuessesHandler(guessWord);
    setGuessWord('');
  };

  return (
    <form className='guess-input-wrapper' autoComplete='off' onSubmit={submitHandler}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}'
        title='This is a 5-letter word'
        value={guessWord}
        onChange={inputHandler}
      />
    </form>
  );
}

export default GuessInput;
