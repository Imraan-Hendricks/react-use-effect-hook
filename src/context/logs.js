import React, { useCallback, useState, createContext } from 'react';

export const LogsContext = createContext();

const LogsContextProvider = (props) => {
  const [logs, setLogs] = useState([]);

  const pushLog = useCallback((log) => {
    setLogs((state) => [...state, log]);
  }, []);

  const clearLogs = () => setLogs([]);

  return (
    <LogsContext.Provider value={{ logs, pushLog, clearLogs }}>
      {props.children}
    </LogsContext.Provider>
  );
};

export default LogsContextProvider;
