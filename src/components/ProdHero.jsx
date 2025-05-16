import React from 'react';
import "../scss/component/prodhero.scss";

const ProdHero = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundColor , 
  heroImage
}) => {
  const heroStyle = {
    backgroundColor: backgroundColor || '#92AB74'
  };

  return (
    <section className="fg-hero" style={heroStyle}>
      {/* <div className="container"> */}
        <div className="fg-hero-text">
          {Array.isArray(title) ? (
            title.map((line, index) => <h2 key={index}>{line}</h2>)
          ) : (
            <h2>{title}</h2>
          )}
          <p className="fg-subtitle">
            {subtitle}
          </p>
          <div className="fg-buttons">
            {primaryButtonText && (
              <a href={primaryButtonLink} className="fg-btn-primary">{primaryButtonText}</a>
            )}
            {secondaryButtonText && (
              <a href={secondaryButtonLink} className="fg-btn-secondary">{secondaryButtonText}</a>
            )}
          </div>
        </div>
      {/* </div> */}

        {heroImage && (
        <div className="fg-hero-img">
          <img src={heroImage} alt="feature-illustration" />
        </div>
      )}
    </section>
  );
};

export default ProdHero;