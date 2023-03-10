import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    // document.body.style.overflow = clicked ? 'auto' : 'hidden';
  }

  function setLink() {
    if (!linkClicked) {
      setLinkClicked(true);
      return 'show';
    } else {
      setLinkClicked(false);
      return 'hidden';
    }
  }

  const toggleMenu = clicked ? 'w-full' : 'hidden';
  const showOnClick = linkClicked ? 'show' : 'hidden';

  return (
    <nav className="px-2 w-full sm:px-4 md:hidden py-2.5 sticky z-20 top-0 bg-white drop-shadow-md border-top">
      <div className="container sm:max-w-[46rem] flex flex-wrap items-center justify-center">
        <div className="text-center flex flex-col justify-center">
          <Link className='text-base md:text-xl lg:text-3xl font-thin flex justify-center libre' to="/">Abide <br /> Ministries</Link>
        </div>
        <a className="flex items-center" />
        <div className="flex md:order-2">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden absolute top-3 right-3" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg onClick={handleClick} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
        </div>
        <div className={`items-center justify-between ${toggleMenu} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col sm:flex items-center p-4 mt-4 rounded-lg text-lg h-screen">
            <Page link="https://www.youtube.com/@nasungicm3518/streams">Livestream</Page>
            <Page link="/sermons">Sermons</Page>
            <li className='dropdown'>
              <li>
                <a onClick={setLink} href="#" className="block py-2 pl-3 pr-4 text-black text-2xl rounded">Resources</a>
                <ul className={`${showOnClick} mb-20 text-center h-10`}>
                  <li className='text-lg'><a href="#">Recommend <br/> Readings</a></li>
                  <li className='text-lg pt-4'><a href="">Lifegroups</a></li>
                </ul>
              </li>

            </li>
            <Page link="/about">About</Page>
            <Page link="/connect">Connect</Page>
            <Page link="https://buy.stripe.com/test_28o00Ybn481q6NW3cc">Give</Page>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Page({ link, children }) {
  return (
    <li>
      <Link className="block py-2 pl-3 pr-4 text-black text-2xl rounded" to={link}>{children}</Link>
    </li>
  );
}
