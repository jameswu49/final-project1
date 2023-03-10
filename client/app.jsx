import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Connect from './pages/connect';
import Submitted from './pages/submitted';
import Sermons from './pages/sermons';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';

export default function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />}/>
        <Route path='submitted' element={<Submitted/>}/>
        <Route path='sermons' element={<Sermons/>}/>
      </Routes>
    </div>
  );
}
