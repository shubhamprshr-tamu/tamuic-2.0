import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import MyForm from './components/CollectingEvent/CollectingEvent';
import MainBody from './components/MainBody';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/tamuic/login' element={<LoginPage />} />
          <Route path='/tamuic/logout' element={<LoginPage />} />
          <Route path='/' element={<HomePage/>}>
            <Route path='/tamuic/home' element={<MainBody />} />
            <Route path='/CollectingEvent/CollectingEvent' element={<MyForm />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
