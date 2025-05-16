import { useState, useEffect } from 'react';
import '../scss/component/ticker.scss';


const Ticker = ({ 
  logos = [], 
  backgroundColor = '#96af7c', 
  speed = 30, 
  title = 'Our conscious clientele',
  pauseOnHover = true
}) => {
  
  const duplicatedLogos = [...logos, ...logos];
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <div 
      className="logo-ticker-container gap" 
      style={{ backgroundColor }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="container">
      {title && <h2 className="logo-ticker-title title">{title}</h2>}
      </div>
      <div className="logo-ticker">
        <div 
          className={`logo-ticker-track ${isPaused ? 'paused' : ''}`}
          style={{ animationDuration: `${logos.length * speed}s` }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div className="logo-ticker-item" key={index}>
              <img 
                src={logo.src} 
                alt={logo.alt || 'Brand logo'} 
                className="logo-ticker-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker ;


