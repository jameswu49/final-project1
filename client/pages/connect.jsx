import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Form from '../components/form';
import Footer from '../components/footer';

export default function Connect() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <DesktopNavBar/>
      <Form/>
      <Footer/>
    </div>
  );
}
