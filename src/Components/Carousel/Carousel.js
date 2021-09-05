import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ()=>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img style={{width:"100%"}} src="https://imgur.com/96OnkX7.png"/>
          </div>
          <div>
            <img style={{width:"100%"}} src="https://imgur.com/KtGxwnN.png"/>
          </div>
          <div>
            <img style={{width:"100%"}} src="https://imgur.com/sfjg9R8.png"/>
          </div>
          <div>
            <img style={{width:"100%"}} src="https://imgur.com/p0wdadG.png"/>
          </div>
        
        </Slider>
      </div>
    );
  }

export default SimpleSlider