// src/components/flexigift/SignupCTA.jsx
import React from 'react';
import '../scss/component/prodsignup.scss';

const ProdSignup = ({ 
  heading, 
  buttonText, 
  buttonLink, 
  backgroundColor, 
  headingColor, 
  buttonBgColor, 
  buttonTextColor 
}) => {
  const wrapperStyle = {
    backgroundColor: backgroundColor || '#125946'
  };

  const headingStyle = {
    color: headingColor || '#fff'
  };

  const buttonStyle = {
    backgroundColor: buttonBgColor || '#fff',
    color: buttonTextColor || '#0C4A39'
  };

  return (
    <div className="fg-signup-wrap" style={wrapperStyle}>
      <div className="container">
        <div className="fg-signup">
          <h3 style={headingStyle}>{heading}</h3>
          <a href={buttonLink}>
            <button style={buttonStyle}>{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdSignup;