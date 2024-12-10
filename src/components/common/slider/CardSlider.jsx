import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = ({children}) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint:769,  
        settings: {
          slidesToShow:2,
        },
      },
      {
        breakpoint:480,  
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default CardSlider;
