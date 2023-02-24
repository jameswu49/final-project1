import React from 'react';
import Navbar from '../components/navbar';
import DesktopNavBar from '../components/desktop-navbar';
import banner from '../images/banner.gif';
import Carousel from '../components/carousel';

const data = [
  {
    title: 'Abide in Christ',
    img: 'https://images.pexels.com/photos/4080005/pexels-photo-4080005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Build the Church',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/005/266/962/small/illustration-of-church-icon-modern-church-flat-symbol-on-white-background-icon-for-graphic-website-and-mobile-design-vector.jpg'
  }
];

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <DesktopNavBar />
      <img className='w-full drop-shadow' src={banner} alt="abide"/>
      <Carousel data={data} />
    </div>
  );
}
