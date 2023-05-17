import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/tamuic/login' element={<LoginPage />} />
        <Route path='/tamuic/home' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
