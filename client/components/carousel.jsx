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
    <div className="pb-10">
      <Slider {...settings}>
        <div>
          <img className='w-full' src="https://cdn.businessyab.com/assets/uploads/cc0d6357f11f6f4258719dec1c7ba88a__united_states_california_los_angeles_county_la_habra_heights_fullerton_road_1620_na_sung_churchhtml.jpg" />
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
