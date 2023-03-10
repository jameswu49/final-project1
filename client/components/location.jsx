import React from 'react';
import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <div className='grey h-auto pb-5'>
      <Header>Join us on Sunday!</Header>
      <Map/>
      <Info />
      <Button>Directions</Button>
    </div>
  );
}

function Header({ children }) {
  return (
    <p className="flex justify-center py-4 font-bold text-base md:text-xl 2xl:text-3xl">
      {children}
    </p>
  );
}

function Info({ children }) {
  return (
    <div className='flex justify-center leading-10 pb-2 text-sm text-center md:text-base md:leading-10 lg:leading-24 2xl:text-xl flex-col'>
      <p className='underline decoration-black font-bold pt-4'>
        Worship Service
      </p>
      <p className='leading-3 2xl:leading-10'>
        Time: 11am
      </p>
      <p>
        1620 Fullerton Rd, La Habra Heights, CA 90631
      </p>
    </div>
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
        <button className='directions order-2 rounded w-40 h-8 text-white'>{children}</button>
      </Link>
    </div>
  );
}
