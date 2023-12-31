import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Cell = ({ letter, status }) => {
  return <span className={`cell ${status}`}>{letter}</span>;
};

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

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
