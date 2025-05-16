import React from 'react';
import '../scss/component/prodworks.scss';

const ProdWorks = ({ title, steps, backgroundColor, titleColor }) => {
  const howItWorksStyle = {
    backgroundColor: backgroundColor || '#F7F6F6'
  };

  const titleStyle = {
    color: titleColor || '#125946'
  };

  return (
    <section className="fg-how" style={howItWorksStyle}>
      <div className="container">
        <h2 style={titleStyle}>{title}</h2>
        <div className="fg-stepper-wrap">
          {steps.map((step, index) => (
            <div className="fg-step-item completed" key={index}>
              <div className="fg-step-counter" style={{ background: step.counterColor || '#92AB74' }}>{index + 1}</div>
              <div className="fg-step-desc">
                <div className="fg-step-name" style={{ color: step.nameColor || '#125946' }}>{step.name}</div>
                <div className="fg-step-subtitle" style={{ color: step.subtitleColor || '#125946' }}>
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default ProdWorks ;