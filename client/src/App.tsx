import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Events from './Pages/Events';
import Guidance from './Pages/Guidance';
import Event from './Components/EventsComponents/Event';
import Resrc from './Pages/Resrc';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CVResource from './Components/ResourcesComponent/CVResource';
import WebDevResource from './Components/ResourcesComponent/WebDevResource';
import AppResource from './Components/ResourcesComponent/AppResource';
import InterviewResource from './Components/ResourcesComponent/InterviewResource';
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/careers' element={<Careers/>} />
      <Route path='/resources' element={<Resrc/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/mentors' element={<Guidance/>} />
      <Route path='/events/event' element={<Event/>} />
      <Route path='/resources/cv-resource' element={<CVResource/>} />
      <Route path='/resources/web-resource' element={<WebDevResource/>} />
      <Route path='/resources/app-resource' element={<AppResource/>} />
      <Route path='/resources/interview-resource' element={<InterviewResource/>} />
      <Route path='/resources/resource' element={<InterviewResource/>} />
    </Routes>
  );
}

export default App;
