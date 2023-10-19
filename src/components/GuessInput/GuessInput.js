import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const inputHandler = (event) => setGuess(event.target.value.toUpperCase());
  const submitHandler = (event) => {
    event.preventDefault();
    console.info({ guess });
    setGuess('');
  };

  return (
    <form className='guess-input-wrapper' autoComplete='off' onSubmit={submitHandler}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}'
        title='This is a 5-letter word'
        value={guess}
        onChange={inputHandler}
      />
    </form>
  );
}

export default GuessInput;
