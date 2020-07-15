import React from 'react';

export const Component = ({ status, handleIncrementClick, handleDecrementClick }) => (
  <div>
    <h1>Hello world Redux Saga! {status}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);
