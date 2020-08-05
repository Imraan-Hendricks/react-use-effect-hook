import React, { useContext, useEffect, useRef, useState } from 'react';
import cssModule from '../styles/counter.module.scss';
import { LogsContext } from '../context/logs';

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const { pushLog } = useContext(LogsContext);

  const didMountRef = useRef(false);

  useEffect(() => pushLog('effect: did mount'), [pushLog]);

  useEffect(() => {
    if (didMountRef.current) pushLog('effect: did update');
    else didMountRef.current = true;
  }, [counter, pushLog]);

  useEffect(() => () => pushLog('effect: will unmount'), [pushLog]);

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
