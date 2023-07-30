import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { fetchUser } from './servies';

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(['user'], fetchUser);
  }, [queryClient]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
