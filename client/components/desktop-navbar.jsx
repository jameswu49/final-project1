import React, { useState } from 'react';

export default function DesktopNavBar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  const toggleMenu = clicked ? 'w-full' : 'hidden';

  return (
    <nav className="px-2 w-[89vw] py-2.5 fixed z-20 top-3 bg-white drop-shadow-md sides desktop">
      <div>
        <ul className="flex w-full justify-evenly p-4 mt-4 rounded-lg md:flex-row text-end md:mt-0 md:text-sm md:font-medium items-center m-w-screen-2xl">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base rounded md:bg-transparent md:p-0 lg:text-md" aria-current="page">Livestream</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base rounded md:hover:text-black md:p-0 lg:text-md ">Sermons</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base rounded  md:hover:text-black md:p-0 lg:text-md ">Resources</a>
          </li>
          <div className='flex justify-center flex-col'>
            <div className='text-base md:text-xl lg:text-3xl font-thin flex text-center'>Abide <br/> Ministries</div>
          </div>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base lg:text-md rounded md:hover:text-black md:p-0">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base lg:text-md rounded md:hover:text-black md:p-0">Connect</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-black text-base lg:text-md rounded md:hover:text-black md:p-0">Give</a>
          </li>
        </ul>
        <a className="flex items-center" />
        <div className="flex md:order-2">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden absolute top-3 right-3" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg onClick={handleClick} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
        </div>
        <div className={`items-center justify-between ${toggleMenu} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky" />
      </div>
    </nav>
  );
}
