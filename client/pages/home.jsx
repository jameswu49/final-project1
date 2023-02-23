import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import banner from '../images/banner.gif';
import Carousel from '../components/carousel';

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <DesktopNavBar />
      <img className='w-full drop-shadow' src={banner} alt="abide"/>
      {/* <Carousel /> */}
    </div>
  );
}
