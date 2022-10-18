import React, { useState } from "react";

const Counter = () => {
  // let count = 0;
  const [count, setCount] = useState(0);
  // console.log(count[0]);

  function decrement() {
    setCount(prev => prev - 1);
    // console.log(count);
  }
  function increment() {
    setCount(prev => prev + 1);
    // console.log(count);
  }
  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
