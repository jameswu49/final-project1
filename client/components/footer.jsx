import React from 'react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <>
      <Logo src={logo}/>
      <Address>1620 Fullerton Rd, La Habra Heights, CA 90631</Address>
    </>
  );
}

function Logo({ src }) {
  return (
    <div className="bg-white flex justify-center h-32 w-full md:h-56 lg:h-64">
      <img src={src} alt="logo" />
    </div>
  );
}

function Address({ children }) {
  return (
    <div className="flex justify-center text-sm font-light">
      {children}
    </div>
  );
}
