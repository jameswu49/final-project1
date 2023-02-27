import React, { useState } from 'react';

export default function Form() {
  return (
    <>
      <div className='flex justify-center items-center h-60'>
        <img src="images/logo.png" alt="logo" />
      </div>
      <div>
        <h1 className='text-center mb-2 font-bold'>Connect with Us</h1>
        <Fields/>
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

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <label>
        <div className='font-bold'>Name:</div>
        <input className='py-0 w-64' type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        <div className='font-bold'>
          Email:
        </div>
        <input className='py-0 w-64' type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label>
        <div className='font-bold'>
          Message:
        </div>
        <textarea className='w-64' rows="5" value={message} onChange={handleMessageChange} required/>
      </label>
      <br />
      <div className='border border-black w-20 text-center'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

// function Name({ handleNameChange }) {
//   return (
//     <label>
//       <div className='font-bold'>Name:</div>
//       <input className='py-0 w-64' type="text" value={name} onChange={handleNameChange} required />
//     </label>
//   );
// }
