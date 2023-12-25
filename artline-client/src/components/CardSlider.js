import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowLeftImage from '../assets/arrow_left.png';
import arrowRightImage from '../assets/arrow_right.png';
import './CardSlider.css'; 

const CardSlider = ({ cardSlides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <img className="custom-prev-arrow" src={arrowLeftImage} alt="Previous" />,
    nextArrow: <img className="custom-next-arrow" src={arrowRightImage} alt="Next" />,
  };

  return (
    <div className="card-slider-block">
      <h2 className="card-slider-title">New to artline</h2>
        <div className="card-slider-container">
          <Slider {...settings}>
            {cardSlides.map((slide, index) => (
              <div key={index} className="card-slide">
                <img src={slide} alt={`card-${index}`} />
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
};

export default CardSlider;
