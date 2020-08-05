import React, { useState } from 'react';
import Landing from './components/landing';
import LogsContextProvider from './context/logs';

const App = () => {
  const [state, setState] = useState('landing');

  return (
    <LogsContextProvider>
      <div>{state === 'landing' && <Landing setState={setState} />}</div>
    </LogsContextProvider>
  );
};

export default App;
