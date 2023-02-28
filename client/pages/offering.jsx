import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Footer from '../components/footer';
import PaymentForm from '../components/give';

export default function Offering() {
  return (
    <>
      <Navbar/>
      <DesktopNavBar/>
      <PaymentForm/>
      <Footer/>
    </>
  );
}
