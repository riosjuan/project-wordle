import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  let letters = [];

  if (value !== undefined) {
    const arrayFromValue = Object.values(value);
    const firstItem = arrayFromValue[0];
    letters = firstItem.split('');
  }

  return (
    <p className='guess'>
      {range(5).map((number) => (
        <span className='cell' key={number}>
          {letters[number]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
