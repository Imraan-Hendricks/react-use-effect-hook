import React, { useContext } from 'react';
import { LogsContext } from '../context/logs';

const Logs = () => {
  const { logs, clearLogs } = useContext(LogsContext);

  return (
    <div>
      <h1>Logs:</h1>
      {logs
        .slice(0)
        .reverse()
        .map((log) => (
          <p>{log}</p>
        ))}
      {logs.length === 0 && <p>There are no logs</p>}
      {logs.length > 0 && <button onClick={clearLogs}>Clear logs</button>}
    </div>
  );
};

export default Logs;
