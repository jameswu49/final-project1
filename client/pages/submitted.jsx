import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Footer from '../components/footer';

export default function Submitted() {
  return (
    <>
      <Navbar />
      <DesktopNavBar />
      <Text />
      <Footer />
    </>
  );
}

function Text() {
  return (
    <div className='flex justify-center items-center h-[50vh] bg-white'>
      <h1 className='md:text-base lg:text-lg xl:text-xl'>Form Submitted</h1>
    </div>
  );
}
