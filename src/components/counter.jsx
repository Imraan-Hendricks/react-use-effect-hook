import React, { useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => props.setState('landing')}>Back</button>
    </div>
  );
};

export default Counter;
