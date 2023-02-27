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
    info: 'We exist to glorify God by gathering as disciples who abide in the vine, love the church and bring the hope of the gospel to our neighbors and to unreached language groups of the world.'
  },
  {
    header: 'The Core Values',
    info: 'A core value is that which is most important to a church. Pillars and columns that hold the vision of the church up and standing. The DNA of our church is a part of every thing we decide to do in our church.'
  },
  {
    header: 'Biblical Strategy',
    info: '  The strategic road by which we will accomplish each of our core values. The purpose of church and core values influence what we do in church. Within our means we have the goal of each ministry and the road to get there.'
  }
];
