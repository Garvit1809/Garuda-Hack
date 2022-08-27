import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Careers from './Pages/Careers';
// import Resources from './Pages/Resources';
import Events from './Pages/Events';
import Guidance from './Pages/Guidance';
import Career from './Components/CareerComponents/Career';
import Resource from './Components/ResourcesComponent/Resource';
import Event from './Components/EventsComponents/Event';
import Resrc from './Pages/Resrc';
import Resources from './Pages/Resources';
import Testing from './Pages/Testing'
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Resrc from './Pages/Resrc';
// import Resources from './Pages/Resources';
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/mentors' element={<Guidance/>} />
      <Route path='/resources/id' element={<Resource/>} />
      <Route path='/events/event' element={<Event/>} />
    </Routes>
  );
}

export default App;
