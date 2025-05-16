import React from 'react';
import '../scss/component/prodfeatures.scss';

const ProdFeatures = ({ features, heroImage, backgroundColor }) => {
  const featuresStyle = {
    backgroundColor: backgroundColor || '#fff'
  };

  return (
    <section className="fg-features" style={featuresStyle}>
      <div className="fg-container">
        {features.map((feature, index) => (
          <div className="fg-feature" key={index}>
            <div className="fg-feature-icon" style={{ backgroundColor: feature.iconBgColor || '#92AB74' }}>
              {feature.icon || (
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG content would go here */}
                </svg>
              )}
            </div>
            <div className="fg-feature-text">
              <h3 style={{ color: feature.titleColor || '#125946' }}>{feature.title}</h3>
              <p style={{ color: feature.textColor || '#0C4A39' }}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* {heroImage && (
        <div className="fg-hero-img">
          <img src={heroImage} alt="feature-illustration" />
        </div>
      )} */}
    </section>
  );
};

export default ProdFeatures;