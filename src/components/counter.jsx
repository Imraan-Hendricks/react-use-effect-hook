import React, { useState } from 'react';
import cssModule from '../styles/counter.module.scss';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={cssModule.root}>
      <h1>Counter: {counter}</h1>
      <button className={cssModule.button} onClick={increment}>
        Increment
      </button>
      <button
        className={cssModule.button}
        onClick={() => props.setState('landing')}>
        Back
      </button>
    </div>
  );
};

export default Counter;
