import React, { useState, useEffect } from 'react';
import '../scss/header.scss';
import carouselDataFile from '../data/carouselData.json';
import CurveButton from '../components/CurveButton';

const FullWidthCarousel = () => {
  const carouselData = carouselDataFile.carouselData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const goToSlide = (index) => {
    if (index === currentSlide || isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const goToNextSlide = () => {
    const next = (currentSlide + 1) % carouselData.length;
    goToSlide(next);
  };

  return (
    <div className="full-width-carousel">
      <div className="carousel-container">
        {carouselData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="content-container">
              <div className="text-content">
                <div className="header-content">
                  <h1>Earth-friendly gifting solutions for businesses that give a damn!</h1>
                  <img src="https://cdn.shopify.com/s/files/1/0701/5396/1684/files/hd-award.png?v=1739873942" alt="" className='award-logo' width="140px"/>
                </div>
                <div className="btn-wrapper">
                  <CurveButton text="Speak to a Gifting Advisor" textColor="#125946" backgroundclr='#FFFFFF'/>
                  <CurveButton text="See what’s in store" backgroundclr='transparent' border='3px solid #fff'/>
                </div>
                <div className="paragraph-nav-container">
                  <p>{slide.paragraph}</p>
                  <div className="carousel-dots">
                    {carouselData.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        className={`carousel-dot ${dotIndex === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(dotIndex)}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullWidthCarousel;
