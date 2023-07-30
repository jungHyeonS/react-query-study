import { useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchUser } from './servies';
import About from './pages/about';
import Detail from './pages/detail';

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(['user'], fetchUser);
  }, [queryClient]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
