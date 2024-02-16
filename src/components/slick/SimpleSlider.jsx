import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sclick1 from './clients/client-1.png'
import sclick2 from './clients/client-2.png'
import sclick3 from './clients/client-3.png'
import sclick4 from './clients/client-4.png'
import sclick5 from './clients/client-5.png'
import sclick6 from './clients/client-6.png'
import sclick7 from './clients/client-7.png'
import sclick8 from './clients/client-8.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="">
        <img src={sclick1}></img>
      </div>
      <div>
        <img src={sclick2}></img>
      </div>
      <div>
        <img src={sclick3}></img>
      </div>
      <div>
        <img src={sclick4}></img>
      </div>
      <div>
        <img src={sclick5}></img>
      </div>
      <div>
        <img src={sclick6}></img>
      </div>
      <div>
        <img src={sclick7}></img>
      </div>
      <div>
        <img src={sclick8}></img>
      </div>
    </Slider>
  );
}