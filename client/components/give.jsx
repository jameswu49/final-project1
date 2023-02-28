// import React, { useState } from 'react';
// import { Name, Submit, Email } from '../components/form';

// export default function PaymentForm() {
//   return (
//     <>
//       <div className='flex justify-center items-center h-60'>
//         <img src="images/logo.png" alt="logo" />
//       </div>
//       <div>
//         <h1 className='text-center mb-2 font-bold md:text-base lg:text-lg xl:text-xl'>Give</h1>
//         <Form />
//       </div>
//     </>
//   );
// }

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zip, setZip] = useState('');
//   const [country, setCountry] = useState('');
//   const [cardNum, setCardNum] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [code, setCode] = useState('');

//   const handleNameChange = e => setName(e.target.value);
//   const handleEmailChange = e => setEmail(e.target.value);
//   const handleAddressChange = e => setAddress(e.target.value);
//   const handleCityChange = e => setCity(e.target.value);
//   const handleStateChange = e => setState(e.target.value);
//   const handleZipChange = e => setZip(e.target.value);
//   const handleCountryChange = e => setCountry(e.target.value);
//   const handleCardNumChange = e => setCardNum(e.target.value);
//   const handleExpDateChange = e => setExpDate(e.target.value);
//   const handleCodeChange = e => setCode(e.target.value);

//   const handleSubmit = async e => {
//     const data = { name, email, address, city, state, zip, country, cardNum, expDate, code };
//     // e.preventDefault();
//     console.log(data);

//   };

//   return (
//     <div className='flex justify-center'>
//       <form className='flex flex-col items-center py-5 w-fit px-10' onSubmit={handleSubmit}>
//         <Name name={name} handleNameChange={handleNameChange} />
//         <br />
//         <Email email={email} handleEmailChange={handleEmailChange} />
//         <br />
//         <Submit/>
//         <br />
//       </form>
//     </div>
//   );
// }
