import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DesktopNavBar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  const toggleMenu = clicked ? 'w-full' : 'hidden';

  return (
    <nav className="hidden md:grid grid-cols-3 px-2  py-2.5 sticky top-0 z-20  bg-white gold-line forum">
      <ul className="flex w-full justify-evenly rounded-lg md:flex-row text-end md:mt-0 md:text-base md:font-medium items-center">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black text-sm rounded md:bg-transparent md:p-0 lg:text-base" to="https://www.youtube.com/@nasungicm3518/streams">Livestream</Link>
        </li>
        <li>
          <Link className='className="block py-2 pl-3 pr-4 text-black text-sm rounded md:hover:text-black md:p-0 lg:text-base' to="https://www.youtube.com/@nasungicm3518/videos">Sermons</Link>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black text-sm rounded  md:hover:text-black md:p-0 lg:text-base ">Resources</a>
        </li>
      </ul>

      <ul>
        <li className='text-base md:text-xl lg:text-3xl font-thin flex justify-center text-center'>
          <Link to="/">Abide <br /> Ministries</Link>
        </li>
      </ul>

      <ul className="flex w-full justify-evenly rounded-lg md:flex-row text-end md:mt-0 md:text-sm md:font-medium items-center m-w-screen-2xl">
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded md:hover:text-black md:p-0" to="/about">About</Link>
        </li>
        <li>
          <Link className="block py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded md:hover:text-black md:p-0" to="/connect">Connect</Link>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded md:hover:text-black md:p-0">Give</a>
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

    </nav>

  );
}
