import { useState, useRef, useEffect } from 'react';
import '../scss/section/gallerycarousel.scss';

const Gallery = ({
  title = "Our gift hampers are stunning. See for yourself!",
  items = []
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [maxIndex, setMaxIndex] = useState(items.length - 1);

  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.children[0]?.offsetWidth || 1;
      const containerWidth = trackRef.current.offsetWidth;
      const visibleSlides = Math.floor(containerWidth / slideWidth);
      setMaxIndex(items.length - visibleSlides);
    }
  }, [items]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    const diff = startX - currentX;

    if (diff > 50 && currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }

    setIsSwiping(false);
  };

  const getTransform = () => {
    if (!trackRef.current) return 'translateX(0)';
    const slideWidth = trackRef.current.children[0]?.offsetWidth || 0;
    return `translateX(-${currentIndex * slideWidth}px)`;
  };

  return (
    <section className="gallery-section gap">
      <div className="gallery-card-container">
        <div className="container">
          <div className="gallery-top-card-section">
            <h2>{title}</h2>
            <div className="gallery-carousel-dots">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>

          <div className="gallery-carousel-container">
            <button
              className="gallery-prev-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                <path d="M8 1L1 7.5L8 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div
              className="gallery-carousel-track"
              ref={trackRef}
              style={{ transform: getTransform() }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {items.map((item, index) => (
                <div className="gallery-carousel-slide" key={index}>
                  <a href={item.link} className="gallery-card">
                    <img src={item.imageSrc} alt={item.title} />
                    <div className="gallery-card-content">
                      <h3 className="gallery-card-title">{item.title}</h3>
                      <p className="gallery-card-description">{item.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <button
              className="gallery-next-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                <path d="M1 14L8 7.5L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
