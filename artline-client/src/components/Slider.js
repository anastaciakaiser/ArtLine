import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides, mainBanners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesElementRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const autoMoveIntervalRef = useRef(null);

  const handleSlideChange = (index) => {
    if (isTransitioningRef.current) {
      return;
    }

    const slidesElement = slidesElementRef.current;
    if (!slidesElement) return;

    isTransitioningRef.current = true;

    setCurrentSlide(index);
    slidesElement.style.transition = 'transform 0.5s ease-in-out';
    slidesElement.style.transform = `translateX(${-index * 100}%)`;
  };

  const handleTransitionEnd = () => {
    const slidesElement = slidesElementRef.current;
    if (!slidesElement) return;

    slidesElement.style.transition = '';
    isTransitioningRef.current = false;
  };

  useEffect(() => {
    const slidesElement = slidesElementRef.current;
    if (!slidesElement) return;

    slidesElement.addEventListener('transitionend', handleTransitionEnd);

    // Clear interval on component unmount
    return () => {
      slidesElement.removeEventListener('transitionend', handleTransitionEnd);
      clearInterval(autoMoveIntervalRef.current);
    };
  }, []);

  // Auto-advancement interval
  useEffect(() => {
    autoMoveIntervalRef.current = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      handleSlideChange(nextSlide);
    }, 5000); 

    // Clear interval on component unmount
    return () => {
      clearInterval(autoMoveIntervalRef.current);
    };
  }, [currentSlide, slides.length]);

  return (
    <div className="slider-container">      
      <div className="slider">
        <div
          ref={slidesElementRef}
          className="slides"
          style={{
            transform: `translateX(${-currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            >

            <div className="main-banners-container">
              <img className='main-banner' src={mainBanners[currentSlide]} 
              alt={`Main Banner ${currentSlide + 1}`} />
            </div>

            </div>
          ))}
        </div>

        <div className="slide-menu">
          <div className="pagination">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slide-button ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
              >
                Slide {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
