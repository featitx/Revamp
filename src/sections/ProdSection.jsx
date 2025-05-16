import React, { useState } from 'react';
import '../scss/section/prod.scss';
const header = {
    heading: "We are India's first gift-tech platform",
    text: 'Gifting is meant to spread joy, and Loopify’s 2 proprietary tech platforms helps you do exactly that - with a generous dollop of efficiency.'
  };
  
  const features = [
    {
      key: 'flexi',
      title: 'FlexiGift Portal',
      imgSrc: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/flexi-gifting.png?v=1741342468',
      steps: [
        { counter: '1', name: 'You curate', subtitle: 'HR chooses a selection of gifts within a set budget, giving employees plenty of options.' },
        { counter: '2', name: 'We set up', subtitle: 'We create a custom webpage for your company, accessible to employees through their official e-mail.' },
        { counter: '3', name: 'Your team selects', subtitle: 'Employees log in, browse the curated selection, pick their favourite gift and place their orders.' },
        { counter: '4', name: 'We deliver', subtitle: 'We handle packing, logistics, and deliver the gifts straight to your employee’s doorstep!' }
      ],
      knowMore: { text: 'Why should you choose FlexiGifts?', link: '/pages/flexigift' }
    },
    {
      key: 'giftingconsole',
      title: 'Gifting Console',
      imgSrc: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/gifting-console.png?v=1741342468',
      steps: [
        { counter: '1', name: 'You get access', subtitle: 'Access orders placed on FlexiGift - whether it’s by you or your team' },
        { counter: '2', name: 'You customize', subtitle: 'Customize products and packaging on gifts or merch that you want to send to your team' },
        { counter: '3', name: 'You track', subtitle: 'Track gifting and merch orders and get updates seamlessly' },
        { counter: '4', name: 'You manage', subtitle: 'Manage the FlexiGift Portal - from look and feel to products' },
        { counter: '5', name: 'We deliver', subtitle: 'Whether it’s help with your orders or delivery of your orders... we ALWAYS deliver.' }
      ],
      knowMore: { text: 'Why should you choose Gifting Console?', link: '/pages/contact' }
    }
  ];
  
  export default function ProductSection() {
    const [active, setActive] = useState('flexi');
    const feature = features.find(f => f.key === active);
  
    return (
      <section className="prod-section gap">
        {/* Top Green Header + Selector */}
        <div className="prod-top-green">
          <div className="container">
            <div className="prod-header ">
              <h2 className='title'>{header.heading}</h2>
              <p>{header.text}</p>
            </div>
          </div>
          <div className="prod-feature-selector">
            {features.map(f => (
              <button
                key={f.key}
                className={`prod-feature-btn ${active === f.key ? 'prod-active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.title}
              </button>
            ))}
          </div>
        </div>
  
        {/* Images */}
        <div className="prod-image-container">
          {features.map(f => (
            <img
              key={f.key}
              src={f.imgSrc}
              alt={f.title}
              className={`prod-laptop-image ${active === f.key ? 'prod-active' : ''}`}
            />
          ))}
        </div>
  
        {/* Stepper */}
        <div className="container prod-stepper-container">
          <div className="prod-stepper-wrapper">
            {feature.steps.map((step, i) => (
              <div key={i} className="prod-stepper-item completed">
                <div className="prod-step-counter">{step.counter}</div>
                <div className="prod-description">
                  <div className="prod-step-name">{step.name}</div>
                  <div className="prod-step-subtitle">{step.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Know More */}
        <div className="know-more-wrapper">
          <div className="prod-know-more">
            <h3>{feature.knowMore.text}</h3>
            <button><a href={feature.knowMore.link}>Know more</a></button>
          </div>
        </div>
      </section>
    );
  }