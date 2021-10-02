import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {list.map((el, i) => (
          <div key={i}>
            <img style={{ width: "100%" }} src={el} alt={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
