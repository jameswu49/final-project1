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
      <Welcome />
      <Location/>
      <Footer/>
    </div>
  );
}

function Banner() {
  return (
    <img className='w-full drop-shadow' src="images/banner.gif" alt="abide" />
  );
}

function Welcome() {
  return (
    <div className='px-2 text-center'>
      <h1 className='text-center text-[1rem] font-extrabold pb-2'>Welcome to Abide Ministries</h1>
      <p>
        For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.
      </p>
      <br/>
      <p>
        We invite you to join us for worship, fellowship, and growth in the Word of God. We look forward to meeting you!
      </p>
    </div>
  );
}
