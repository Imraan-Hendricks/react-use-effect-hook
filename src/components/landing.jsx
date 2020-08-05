import React from 'react';
import cssModule from '../styles/landing.module.scss';

const Landing = (props) => {
  return (
    <div className={cssModule.root}>
      <div className={cssModule.landing}>
        <h1>Landing</h1>
        <button
          className={cssModule.button}
          onClick={() => props.setState('counter')}>
          Show counter
        </button>
      </div>
      <div className={cssModule.title}>
        <h1>React useEffect</h1>
      </div>
    </div>
  );
};

export default Landing;
