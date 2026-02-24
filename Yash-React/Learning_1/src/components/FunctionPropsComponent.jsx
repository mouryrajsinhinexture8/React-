import React from 'react';

const Counter = ({ count, onIncrement }) => {
  return (
    <>
    <div style={{ marginLeft: '20px' }}>
      <span>Count: {count}</span>
      <button onClick={onIncrement} style={{ marginLeft: '10px' }}>
        + 
      </button>
    </div>
    </>
  );
};

export default Counter;