import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  return (
    <>
      <div className='flex justify-center items-center h-60'>
        <img src="images/logo.png" alt="logo" />
      </div>
      <div>
        <h1 className='text-center mb-2 font-bold md:text-base lg:text-lg xl:text-xl'>Connect with Us</h1>
        <Fields />
      </div>
    </>
  );
}

function Fields() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handleMessageChange = e => setMessage(e.target.value);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = { name, email, message };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch('api/newcomer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      navigate('/submitted');
    } catch (error) {
      return (
        console.error(error)
      );
    }
  };
  return (
    <div className='flex justify-center'>
      <form className='flex flex-col items-center py-5 w-fit px-10' onSubmit={handleSubmit}>
        <Name name={name} handleNameChange={handleNameChange} />
        <br />
        <Email email={email} handleEmailChange={handleEmailChange} />
        <br />
        <Message message={message} handleMessageChange={handleMessageChange} />
        <br />
        <Submit name={name} email={email} message={message} />
      </form>
    </div>
  );
}

export function Name({ handleNameChange, name }) {
  return (
    <label>
      <div className='font-bold'>Name:</div>
      <input className='p-0 w-64 md:w-80 lg:w-96' type="text" value={name} onChange={handleNameChange} required />
    </label>
  );
}

export function Email({ handleEmailChange, email }) {
  return (
    <label>
      <div className='font-bold'>
        Email:
      </div>
      <input className='p-0 w-64 md:w-80 lg:w-96' type="email" value={email} onChange={handleEmailChange} required />
    </label>
  );
}

function Message({ message, handleMessageChange }) {
  return (
    <label>
      <div className='font-bold'>
        Message:
      </div>
      <textarea className='w-64 md:w-80 lg:w-96' rows="5" value={message} onChange={handleMessageChange} required />
    </label>
  );
}

export function Submit({ name, email, message }) {
  return (
    <div className="flex justify-center cursor-pointer">
      <button className='directions order-2 rounded w-28 h-8 text-white mt-5'>Submit</button>
    </div>
  );
}
