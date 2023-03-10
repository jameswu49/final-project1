import React from 'react';

export default function Verses({ data }) {
  return (
    <>
      <Welcome/>
      <Messages data={data}/>
    </>
  );
}

function Welcome() {
  return (
    <h1 className='text-center pb-5'>
      Welcome to Abide Ministries
    </h1>
  );
}

function Messages({ data }) {
  return (
    <>
      {data.map((elements, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className='flex pb-5 px-3 items-center justify-center'>
              <div className="border mr-4 w-[0.3rem] h-28 md:h-24" />
              <div className='text-sm md:text-base lg:text-lg 2xl:text-2xl'>
                <div className="text-center golden">
                  <h1>Abide in Christ</h1>
                </div>
                <div className="navy">
                  {elements.verse}
                  <br />
                  {elements.book}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className='flex pb-5 px-3 items-center justify-center lg:justify-end'>
              <div className='text-sm ml-4 md:text-base lg:text-lg 2xl:text-2xl'>
                <div className="text-center golden">
                  <h1>Abide in Christ</h1>
                </div>
                <div className="navy">
                  {elements.verse}
                  <br />
                  {elements.book}
                </div>
              </div>
              <div className="border w-[0.3rem] h-16 md:h-16 lg:ml-4" />
            </div>
          );
        }
      })}
    </>
  );
}
