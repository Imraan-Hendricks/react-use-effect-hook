import React, { useContext } from 'react';
import cssModule from '../styles/logs.module.scss';
import { LogsContext } from '../context/logs';

const Logs = () => {
  const { logs, clearLogs } = useContext(LogsContext);

  return (
    <div className={cssModule.root}>
      <h1>Logs:</h1>
      {logs
        .slice(0)
        .reverse()
        .map((log) => (
          <p>{log}</p>
        ))}
      {logs.length === 0 && <p>There are no logs</p>}
      {logs.length > 0 && (
        <button className={cssModule.button} onClick={clearLogs}>
          Clear logs
        </button>
      )}
    </div>
  );
};

export default Logs;
