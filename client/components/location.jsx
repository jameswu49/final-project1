import React from 'react';

export default function Location(props) {

  function Header(props) {
    return (
      <p className="flex justify-center pt-4 font-bold text-base md:text-xl">
        {props.children}
      </p>
    );
  }

  function Info(props) {
    return (
      <p className='flex justify-center leading-10 pb-2 text-sm text-center'>
        {props.children}
      </p>
    );
  }

  function Map() {
    return (
      <div className='flex justify-center'>
        <img className='w-10/12 md:w-8/12' src={props.src} alt="" />
      </div>
    );
  }

  function Button() {
    return (
      <div className="flex justify-center cursor-pointer">
        <button className='directions order-2 rounded w-40 h-8 text-white mt-5'>
          Directions
        </button>
      </div>
    );
  }

  return (
    <div className='background h-auto pb-5'>
      <Header>Join us on Sunday!</Header>
      <Info>Sunday 11am in the English Ministry Room</Info>
      <Map/>
      <Button/>
    </div>
  );
}
