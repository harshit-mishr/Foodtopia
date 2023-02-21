import React from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Card from './Pages/Card/CardItem';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotel' element={<Card />} />
    </Routes>
  );
}

export default App;
