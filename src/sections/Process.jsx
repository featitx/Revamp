import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../scss/section/process.scss';

const ProcessCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 767 && window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 767 && window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = [
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/process-2.png?v=1741169266",
      title: "Our gifting experts will understand your gifting needs",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/process-1.png?v=1741169266",
      title: "Our curation team will customize some gift hampers for you",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/process-3.png?v=1741169266",
      title: "We handle packaging and delivery logistics",
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/process-4.png?v=1741169266",
      title: "Gifts are delivered to recipients on time",
    }
  ];

  return (
    <div className="swiper-process-container gap">
      <div className="carousel-header container">
        <h2 className='title'>Our process</h2>
        <div className="navigation-buttons">
          <button 
            className="nav-button prev" 
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="nav-button next" 
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={isMobile ? 30 : isTablet ? 40 : 50}
        slidesPerView={isMobile ? 2 : isTablet ? 2 : 3}
        onSwiper={setSwiperInstance}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          // Mobile screens
          320: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          // Tablet screens
          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          // Desktop
          1400: {
            slidesPerView: 3,
            spaceBetween: 80,
          }
        }}
        loop={true}
        grabCursor={true}
        touchEventsTarget="container"
        className="process-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <div className="image-container">
                <img src={slide.image} alt={`Process step ${index + 1}`} />
                {/* Only show arrows for slides that aren't the last slide unless in loop mode */}
              </div>
                <div className="arrow-container">
                  <svg width="122" height="38" viewBox="0 0 122 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM120.768 20.7678C121.744 19.7915 121.744 18.2086 120.768 17.2322L104.858 1.32234C103.882 0.346029 102.299 0.346028 101.322 1.32234C100.346 2.29865 100.346 3.88156 101.322 4.85787L115.464 19L101.322 33.1421C100.346 34.1185 100.346 35.7014 101.322 36.6777C102.299 37.654 103.882 37.654 104.858 36.6777L120.768 20.7678ZM3 21.5L119 21.5L119 16.5L3 16.5L3 21.5Z" fill="#92AB74"/>
                  </svg>
                </div>
              <p className="slide-title">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default ProcessCarousel;