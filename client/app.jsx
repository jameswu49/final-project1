import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Connect from './pages/connect';
import Submitted from './pages/submitted';
import Offering from './pages/offering';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />}/>
        <Route path='submitted' element={<Submitted/>}/>
        <Route path='give' element={<Offering/>} />
      </Routes>
    </div>
  );
}
