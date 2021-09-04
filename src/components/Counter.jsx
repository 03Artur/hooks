import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const Counter = ({ step = 1 }) => {
  const [value, { increment, decrement }] = useCounter({ initialValue: 45451, step: 91.25 });

  return (
    <article style={containerStyle}>
      <h1>{value}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </article>
  );
};
