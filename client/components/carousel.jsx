import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="pb-10">
      <Slider {...settings}>
        <div>
          <img className='h-full w-full' src="images/outside.jpeg" />
        </div>
        <div className="flex justify-center">
          <img className='h-full w-full' src="images/nasung.jpeg" />
        </div>
      </Slider>
    </div>
  );
}
