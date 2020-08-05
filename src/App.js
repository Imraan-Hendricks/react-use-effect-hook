import React, { useState } from 'react';
import Counter from './components/counter';
import Landing from './components/landing';
import Logs from './components/logs';
import LogsContextProvider from './context/logs';

const App = () => {
  const [state, setState] = useState('landing');

  return (
    <LogsContextProvider>
      <div>
        {state === 'landing' && <Landing setState={setState} />}
        {state === 'counter' && <Counter setState={setState} />}
        <hr />
        <Logs />
      </div>
    </LogsContextProvider>
  );
};

export default App;
