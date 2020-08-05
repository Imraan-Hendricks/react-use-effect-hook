import React, { useState } from 'react';
import Landing from './components/landing';
import Logs from './components/logs';
import LogsContextProvider from './context/logs';

const App = () => {
  const [state, setState] = useState('landing');

  return (
    <LogsContextProvider>
      <div>
        {state === 'landing' && <Landing setState={setState} />}
        <hr />
        <Logs />
      </div>
    </LogsContextProvider>
  );
};

export default App;
