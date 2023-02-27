import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  const toggleMenu = clicked ? 'w-full' : 'hidden';

  return (
    <>
      <div className='yellow sticky z-40 top-0 w-full'/>
      <nav className="px-2 w-full sm:px-4 md:hidden md:w-auto md:pr-[5.64rem] lg:w-80 py-2.5 sticky z-20 top-3 bg-white drop-shadow-md">
        <div className="container sm:max-w-[46rem] flex flex-wrap items-center justify-center">
          <div className="text-center flex flex-col justify-center">
            <Link className='text-base md:text-xl lg:text-3xl font-thin flex justify-center' to="/">Abide <br /> Ministries</Link>
          </div>
          <a className="flex items-center" />
          <div className="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden absolute top-3 right-3" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg onClick={handleClick} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className={`items-center justify-between ${toggleMenu} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col sm:flex items-end p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link className="block py-2 pl-3 pr-4 text-black text-sm rounded md:bg-transparent md:p-0 lg:text-base" to="https://www.youtube.com/@nasungicm3518/streams">Livestream</Link>
              </li>
              <li>
                <Link className='className="block py-2 pl-3 pr-4 text-black text-sm rounded md:hover:text-black md:p-0 lg:text-base' to="https://www.youtube.com/@nasungicm3518/videos">Sermons</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black text-sm lg:text-md rounded md:hover:text-black md:p-0">Resources</a>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded md:hover:text-black md:p-0" to="/about">About</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-black text-sm lg:text-md rounded md:hover:text-black md:p-0" to="/connect">Connect</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-black text-sm lg:text-md rounded md:hover:text-black md:p-0">Give</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
