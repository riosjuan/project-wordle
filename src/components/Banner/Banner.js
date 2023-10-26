import React from 'react';

function Banner({ status, children, action }) {
  return (
    <div className={`${status} banner`}>
      {children}{' '}
      <button className='restart-btn' onClick={action}>
        New Game
      </button>
    </div>
  );
}

export default Banner;
