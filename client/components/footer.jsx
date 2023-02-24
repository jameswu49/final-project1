import React from 'react';

export default function Footer(props) {
  function Logo() {
    return (
      <div className="bg-white flex justify-center h-32 w-full md:h-56 lg:h-64">
        <img src={props.src} alt="logo" />
      </div>
    );
  }

  function Address(props) {
    return (
      <div className="flex justify-center text-sm font-light">
        {props.children}
      </div>
    );
  }

  return (
    <>
      <Logo/>
      <Address>1620 Fullerton Rd, La Habra Heights, CA 90631</Address>
    </>
  );
}
