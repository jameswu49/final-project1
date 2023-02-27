import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Footer from '../components/footer';
import Location from '../components/location';

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <DesktopNavBar />
      <Banner/>
      <Location/>
      <Footer/>
    </div>
  );
}

function Banner({ src }) {
  return (
    <img className='w-full drop-shadow' src="images/banner.gif" alt="abide" />
  );
}
