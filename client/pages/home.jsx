import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Footer from '../components/footer';
import Location from '../components/location';
import Carousel from '../components/carousel';

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <DesktopNavBar />
      <Banner/>
      <Welcome />
      <Carousel/>
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
    <div className='px-5 text-center'>
      <h1 className='text-center text-[1rem] font-bold pb-2'>Welcome to Abide Ministries</h1>
      <p>
        For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes.
      </p>
      <br/>
      <p>
        We are delighted to invite you to join us for worship, fellowship, and growth in the Word of God. At Abide Ministries, we believe in the transforming power of the gospel and we are committed to sharing the message of God&apos;s love and salvation with everyone.
      </p>
      <br/>
      <p>
        We hope that you will find our community welcoming, warm, and inviting. Whether you are a lifelong believer or just beginning to explore faith, we are here to support and encourage you on your journey.
      </p>
    </div>
  );
}
