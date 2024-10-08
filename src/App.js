import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing pages
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import Nav from './components/nav'; 
import { LwandileBio } from './components/lwandile';
import {PageNotFound }from './pages/404'; 
import { Footer } from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Nav /> 

      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/components/lwandile' element={<LwandileBio />} />
        <Route path='/about' element={<About />} />

      
        {/* if no matching route, this will  show 404 page component */}
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
