import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Resources from './Pages/Resources';
import Events from './Pages/Events';
import Guidance from './Pages/Guidance';
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/mentors' element={<Guidance/>} />
    </Routes>
  );
}

export default App;
