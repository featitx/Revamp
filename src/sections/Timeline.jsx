import React from 'react';

const Timeline = () => {
  const timelineSteps = [
    {
      year: '2020',
      month: 'JULY',
      title: 'We launch as a',
      description: 'zero-plastic store for events and festivals'
    },
    {
      year: '2021',
      month: 'JULY',
      title: 'We expand our offering',
      description: 'to gifting... still keeping it zero-plastic!'
    },
    {
      year: '2022',
      month: 'JULY',
      title: 'We create our own zero-plastic space',
      description: 'in the world of gifting.'
    },
    {
      year: '2024',
      month: 'JULY',
      title: 'We face a reality check',
      description: 'that causes us to pivot - but just a little bit.'
    },
    {
      year: '2025',
      month: 'JULY',
      title: 'We are an earth-friendly gift-tech platform for conscious businesses.',
      description: ''
    }
  ];

  return (
    <div className="timeline-wrapper">
      <div className="container">
        <div className="timeline-steps">
          {timelineSteps.map((step, index) => (
            <div className="step" key={index}>
              <div className="circle">
                {step.month} <span>{step.year}</span>
              </div>
              <div className="describe">
                <b>{step.title}</b> <br />
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;