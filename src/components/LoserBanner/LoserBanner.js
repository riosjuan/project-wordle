import React from 'react';
import Banner from '../Banner';

function LoserBanner({ answer, restartGameHandler }) {
  return (
    <Banner status='sad' action={restartGameHandler}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoserBanner;
