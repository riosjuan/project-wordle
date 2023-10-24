import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const guessesHandler = (guessWord) => {
    const nextGuess = {
      value: guessWord,
      id: crypto.randomUUID(),
    };

    setGuesses([...guesses, nextGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput guessesHandler={guessesHandler} />
    </>
  );
}

export default Game;
