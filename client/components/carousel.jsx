import React, { useState } from 'react';
import banner from '../../client/images/banner.png';
// export default function Carousel({ pictures }) {
//   const [id, setId] = useState(0);

//   const leftArrow = <i className="fa-solid fa-chevron-left" />;
//   const rightArrow = <i className="fa-solid fa-chevron-right" />;

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
//   return (
//     <div className='mt-2 carousel-container'>
//       <div className='h-60 flex justify-between container'>
//         <LeftArrow icon={leftArrow} />
//         {/* <Images src={pictures[id].image} /> */}
//         <RightArrow icon={rightArrow} />
//       </div>
//       <div className='circles-container'>
//         {/* <Circles images={pictures} setId={setId} id={id} /> */}
//       </div>
//     </div>
//   );
// }

// function LeftArrow({ onClick, icon }) {
//   return (
//     <span className='left-arrow' onClick={onClick}>{icon}</span>
//   );
// }

// function Images({ src }) {
//   return (
//     <img src={src} />
//   );
// }

// function RightArrow({ onClick, icon }) {
//   return (
//     <span className='right-arrow' onClick={onClick}>{icon}</span>
//   );
// }

// function Circles({ images, setId, id }) {
//   return (
//     images.map((element, i) =>
//       <span key={i} className='circles'>
//         <i onClick={() => setId(i)} className={`fa-${i === id ? 'solid' : 'regular'} fa-circle`} />
//       </span>
//     )
//   );
// }

export default function Carousel() {
  return (
    <h1>test</h1>

  );
}
