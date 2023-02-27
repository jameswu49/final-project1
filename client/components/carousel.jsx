import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false
  };
  return (
    <div className="pb-10 md:border-solid md:border-black md:border-[1px]">
      <Slider {...settings}>
        <div className='text-center'>
          <h1>Abide in Christ</h1>
          <div className="justify-center grid grid-cols-2">
            <img src="http://placekitten.com/g/400/200" />
            <h1>test</h1>
          </div>
        </div>
        <div className='text-center'>
          <h1>Build the Church</h1>
          <div className="flex justify-center">
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </div>
        <div className='text-center'>
          <h1>Go to the Nations</h1>
          <div className="flex justify-center">
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
