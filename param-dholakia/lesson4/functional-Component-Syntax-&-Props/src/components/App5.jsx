import React, { useState } from 'react';
 
const Counter = () => {
  // DECLARING STATE: [currentValue, updateFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
 
  // UPDATING STATE
  const handleIncrease = () => {
    // Standard update
    setCount(count + 1);
  };
 
  const handleSafeIncrease = () => {
    // ALTERNATIVE / BEST PRACTICE: Updater Function
    // Use this if the new state depends on the previous state
    setCount(prevCount => prevCount + 1);
  };
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleSafeIncrease}>Increase</button>
    </div>
  );
};
 
export default Counter;



