import React from 'react';
import directions from '../images/location.png';

export default function Location() {
  return (
    <div className='background h-auto pb-5'>
      <Header>Join us on Sunday!</Header>
      <Info>Sunday 11am in the English Ministry Room</Info>
      <Map src={directions}/>
      <Button>Directions</Button>
    </div>
  );
}

function Header({ children }) {
  return (
    <p className="flex justify-center pt-4 font-bold text-base md:text-xl">
      {children}
    </p>
  );
}

function Info({ children }) {
  return (
    <p className='flex justify-center leading-10 pb-2 text-sm text-center'>
      {children}
    </p>
  );
}

function Map({ src }) {
  return (
    <div className='flex justify-center'>
      <img className='w-10/12 md:w-8/12' src={src} alt="" />
    </div>
  );
}

function Button({ children }) {
  return (
    <div className="flex justify-center cursor-pointer">
      <button className='directions order-2 rounded w-40 h-8 text-white mt-5'>
        {children}
      </button>
    </div>
  );
}
