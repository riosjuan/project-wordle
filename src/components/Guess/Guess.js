import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Cell = ({ letter, status }) => {
  return <span className={`cell ${status}`}>{letter}</span>;
};

function Guess({ value, answer }) {
  let guess = '';

  if (value !== undefined) {
    const arrayFromValue = Object.values(value);
    guess = arrayFromValue[0];
  }

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className='guess'>
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={checkedGuess ? checkedGuess[number].letter : undefined}
          status={checkedGuess ? checkedGuess[number].status : ''}
        />
      ))}
    </p>
  );
}

export default Guess;
