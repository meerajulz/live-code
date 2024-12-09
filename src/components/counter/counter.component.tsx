import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    //**Increment**
    setCount(count + 1);
  };

  const handleDecrement = () => {
    //**Decrement**
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    //**Reset**
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <section>{count}</section>
      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Counter;
