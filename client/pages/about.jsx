import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import Cards from '../components/cards';
import Values from '../components/values';
import Footer from '../components/footer';

export default function About() {
  return (
    <>
      <Navbar/>
      <DesktopNavBar/>
      <Cards/>
      <Values data={data}/>
      <Footer/>
    </>
  );
}

const data = [
  {
    header: 'Vision Statement',
    info: 'We exist to glorify God by gathering as disciples who abide in the vine, love the church and bring the hope of the gospel to our neighbors and to unreached language groups of the world.',
    src: 'images/vine.png'
  },
  {
    header: 'The Core Values',
    info: 'We are committed to learning the purpose of the church and BEING and BUILDING the church for His glory.',
    src: 'images/build.png'
  },
  {
    header: 'Biblical Strategy',
    info: 'Our AIM is to move our people along to become Disciples who love Jesus and abide in him daily, who love and build his church and who are actively participating in His mission to seek and save the lost.',
    src: 'images/go.png'
  }
];
