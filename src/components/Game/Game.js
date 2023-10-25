import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WinnerBanner from '../WinnerBanner';
import LoserBanner from '../LoserBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  console.log(answer);

  const submitGuessesHandler = (guessWord) => {
    const nextGuesses = [...guesses, guessWord];
    const currentGuesses = nextGuesses.length;
    setGuesses(nextGuesses);

    if (guessWord === answer) {
      setGameStatus('won');
    } else if (currentGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuessesHandler={submitGuessesHandler} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WinnerBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LoserBanner answer={answer} />}
    </>
  );
}

export default Game;
