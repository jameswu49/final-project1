import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import banner from '../images/banner.png';
import Carousel from '../components/carousel';

export default function Home(props) {
  return (
    <>
      <Navbar />
      <DesktopNavBar />
      <img className='md:w-[89vw] drop-shadow' src={banner} alt="abide"/>
      <Carousel />
    </>
  );
}
