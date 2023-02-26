import React from 'react';

export default function Values({ data }) {
  return (
    <div className=''>
      <Text data={data} />
    </div>
  );
}

function Text({ data }) {
  return (
    <>
      {data.map((elements, index) => (
        <div key={index} className='grid grid-cols-12'>
          <div className='flex justify-center text-[0.7rem] py-3 font-semibold underline underline-offset-4 decoration-2 bg-white col-span-12 md:text-base md:py-5 lg:py-8 lg:text-xl 2xl:text-2xl'>
            {elements.header}
          </div>
          <Info index={index}>{elements.info}</Info>
        </div>
      ))}
    </>
  );
}

function Info({ index, children }) {
  if (index % 2 === 0) {
    return (
      <>
        <div className="flex items-center grey text-[0.6rem] h-auto px-5 py-8 leading-3 col-span-8 md:text-sm md:leading-7 md:px-16 md:py-16 lg:text-lg lg:py-36 lg:px-32 2xl:text-2xl 2xl:px-56">
          {children}
        </div>
        <div className="col-span-4">
          <img className='min-w-full min-h-full md:h-auto md:w-auto' src="images/church.png" alt="" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="col-span-4">
          <img className='min-w-full min-h-full md:h-auto md:w-auto' src="images/church.png" alt="" />
        </div>
        <div className="flex items-center grey h-auto text-[0.6rem] px-5 p-8 leading-3 col-span-8 md:text-sm md:leading-7 md:px-16 md:py-16 lg:text-lg 2xl:text-2xl 2xl:px-56">
          {children}
        </div>
      </>
    );
  }
}
