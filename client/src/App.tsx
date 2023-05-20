import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/tamuic/home' element={<HomePage />} />
          <Route path='/tamuic/login' element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
