import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Main from './pages/Main'
function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Routes>
      {!token ? (
        <Route path="/auth" element={<Auth />} />
      ) : (
        <Route path="/dashboard" element={<Main/>} />
      )}
      <Route path="*" element={<Navigate to={token ? '/dashboard' : '/auth'} />} />
    </Routes>
  );
}

export default App;
