import React from 'react';

export default function Cards() {
  return (
    <div className="grid grid-cols-12 min-w-full min-h-full md:mt-5 grey">
      <ImageHeader src="images/church.png" />
      <HeaderText title="For Christ, the Church, and the Nations.">
        <SubHeadings/>
      </HeaderText>
    </div>
  );
}

function ImageHeader({ src }) {
  return (
    <div className="col-span-4">
      <img className='h-auto min-w-full min-h-full md:h-auto md:w-auto' src={src} alt="church" />
    </div>
  );
}

function HeaderText({ title, children }) {
  return (
    <div className="col-span-8 font-bold px-2 pt-3 pb-6 md:pt-5">
      <div className='flex justify-center pt-3 md:pb-2 lg:pt-8'>
        <p className='text-[0.7rem] md:text-base lg:text-xl 2xl:text-2xl'>{title}</p>
      </div>
      <div className='flex flex-col items-center leading-4'>
        {children}
      </div>
    </div>
  );
}

function SubHeadings() {
  return (
    <p className='text-[0.6rem] leading-4 md:text-sm md:leading-7 lg:text-lg lg:leading-10 2xl:text-xl 2xl:leading-10 forum'>
      <span className='golden'>Abide</span> in Christ. <br />
      <span className='golden'>Build</span> the Church. <br />
      <span className='golden'>Go</span> to the Nations. <br />
    </p>
  );
}
