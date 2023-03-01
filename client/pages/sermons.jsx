import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Footer from '../components/footer';
import VideoList from '../components/sermons';

export default function Sermons() {
  return (
    <div>
      <Navbar />
      <DesktopNavBar />
      <VideoList/>
      <Footer />
    </div>
  );
}
