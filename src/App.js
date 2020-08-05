import React, { useState } from 'react';
import Landing from './components/landing';

const App = () => {
  const [state, setState] = useState('landing');

  return <div>{state === 'landing' && <Landing setState={setState} />}</div>;
};

export default App;
