import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DesktopNavBar() {
  const [clicked, setClicked] = useState(false);
  const [isShown, setShown] = useState(false);
  const [timer, setTimer] = useState(null);
  const [hide, setHide] = useState(false);

  function handleClick() {
    return setClicked(!clicked);
  }

  const onHover = () => {
    clearTimeout(timer);
    setShown(true);
    setHide(false);
  };

  const offHover = () => {
    setTimer(setTimeout(() => {
      setShown(false);
      setHide(true);
    }, 2000));
  };

  function showMenu() {
    if (!isShown) {
      return 'hide';
    } else {
      return 'show';
    }
  }

  function hideAnimation() {
    if (!hide) {
      return '';
    } else {
      return 'hide-out';
    }
  }

  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  const toggleMenu = clicked ? 'w-full' : 'hidden';

  return (
    <nav className="hidden md:grid grid-cols-3 px-2 py-2.5 sticky top-0 z-20 bg-white gold-line lato border-top">
      <ul className="flex w-full justify-evenly rounded-lg md:flex-row text-end md:mt-0 md:text-base md:font-medium items-center">
        <Page link="https://www.youtube.com/@nasungicm3518/streams">Livestream</Page>
        <Page link="/sermons">Sermons</Page>
        <li className='dropdown'>
          <Resources hover={onHover} hoverAway={offHover} showMenu={showMenu()} hideAnimation={hideAnimation()} link="#">Resources</Resources>
        </li>
      </ul>

      <Logo link="/">Abide <br /> Ministries</Logo>

      <ul className="flex w-full justify-evenly rounded-lg md:flex-row text-end md:mt-0 md:text-sm md:font-medium items-center m-w-screen-2xl">
        <Page link="/about">About</Page>
        <Page link="/connect">Connect</Page>
        <Page link="https://buy.stripe.com/test_28o00Ybn481q6NW3cc">Give</Page>
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

function Page({ link, children }) {
  return (
    <li>
      <Link className="block py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded links md:p-0" to={link}>{children}</Link>
    </li>
  );
}

function Resources({ link, children, hover, hoverAway, showMenu, hideAnimation }) {
  return (
    <li>
      <Link onMouseOver={hover} onMouseLeave={hoverAway} className="py-2 pl-3 pr-4 text-black text-sm lg:text-base rounded links md:p-0" to={link}>{children}</Link>
      <ul onMouseEnter={hover} onMouseLeave={hoverAway} className={`dropdown-menu ${showMenu} ${hideAnimation} link bg-white h-[60px] flex items-center absolute left-0 bottom-[-60px] right-0 md:top-[65px] md:px-10 lg:top-[81px] 2xl:top-[79.5px]`}>
        <li className='links'><a href="#">Recommend Readings</a></li>
        <li className='links mx-10'><a href="">Lifegroups</a></li>
      </ul>
    </li>
  );
}

function Logo({ link, children }) {
  return (
    <ul>
      <li className='text-base md:text-xl lg:text-3xl font-thin flex justify-center text-center libre'>
        <Link to={link}>{children}</Link>
      </li>
    </ul>
  );
}
