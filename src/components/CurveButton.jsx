import React from 'react';
import '../scss/component/curvebutton.scss';

const CurveButton = ({ text, textColor = '#fff', onClick , backgroundclr = '#fff' , border="none" }) => {
  return (
    <button
      className="curve-button"
      style={{ color: textColor  , backgroundColor: backgroundclr , border: border}}
    >
      {text}

    </button>
  );
};

export default CurveButton;
