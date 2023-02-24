// import React, { useState, useEffect } from 'react';

// export default function Carousel({ pictures }) {
//   const [id, setId] = useState(0);

//   function rightClick() {
//     if (id >= pictures.length - 1) {
//       setId(0);
//     } else {
//       setId(id + 1);
//     }
//   }

//   function leftClick() {
//     if (id === 0) {
//       setId(pictures.length - 1);
//     } else {
//       setId(id - 1);
//     }
//   }

//   function Title({ name }) {
//     return (
//       <h1>{name}</h1>
//     );
//   }

//   function LeftArrow() {
//     return (
//       <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={leftClick} data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//     );
//   }

//   function Images({ src }) {
//     return (
//       <img src={src} />
//     );
//   }

//   function RightArrow() {
//     return (
//       <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={rightClick} data-carousel-next>
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     );
//   }

//   function Circles({ images, setId, id }) {
//     return (
//       <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" />
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" />
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" />
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" />
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" />
//       </div>
//     );
//   }

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     if (id < pictures.length) {
//   //       rightClick();
//   //     }
//   //   }, 5000);
//   //   return () => clearInterval(interval);
//   // });

//   return (
//     <>
//       {/* <Title name={pictures[id].title} /> */}
//       <div id="indicators-carousel" className="relative" data-carousel="slide">
//         <div className='container'>
//           <LeftArrow />
//           <Images src={pictures[id].img} />
//           <RightArrow />
//         </div>
//         <div className='circles-container'>
//           <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//             <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" />
//             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" />
//             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" />
//             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" />
//             <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
