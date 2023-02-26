import React from 'react';
import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <div className='grey h-auto pb-5'>
      <Header>Join us on Sunday!</Header>
      <Info>Sunday 11am in the English Ministry Room</Info>
      <Map/>
      <Button>Directions</Button>
    </div>
  );
}

function Header({ children }) {
  return (
    <p className="flex justify-center pt-4 font-bold text-base md:text-xl 2xl:text-2xl">
      {children}
    </p>
  );
}

function Info({ children }) {
  return (
    <p className='flex justify-center leading-10 pb-2 text-sm text-center 2xl:text-xl'>
      {children}
    </p>
  );
}

function Map({ src }) {
  return (
    <div className='flex justify-center'>
      <img className='w-10/12 md:w-8/12' src="images/location.png" alt="" />
    </div>
  );
}

function Button({ children }) {
  return (
    <div className="flex justify-center cursor-pointer">
      <Link to="https://www.google.com/maps/place/Na+Sung+Wesleyan+Church/@33.9531643,-117.9282798,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2d5586bc54593:0xdc9204c57dbdae43!8m2!3d33.9531643!4d-117.9260911!16s%2Fg%2F1tj5q_y3?authuser=0">
        <button className='directions order-2 rounded w-40 h-8 text-white mt-5'>{children}</button>
      </Link>
    </div>
  );
}
