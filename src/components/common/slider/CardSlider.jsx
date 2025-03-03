import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = ({children}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
