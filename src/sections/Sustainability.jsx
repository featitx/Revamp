import React, { useState } from 'react';
import '../scss/section/Sustainability.scss';
import '../scss/app.scss'

const options = [
  { key: 'zero', label: "We’re all in!", imgId: 'zero-plastic', imgSrc: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/toggle-1.png?v=1744611120', alt: 'Zero-plastic hampers', link: '/collections/zero-plastic-gift-hampers' },
  { key: 'almost', label: "We’re getting there", imgId: 'almost-plastic-free', imgSrc: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/toggle-2.png?v=1744611120', alt: 'Almost plastic-free hampers', link: '/collections/almost-plastic-free-gift-hampers' },
  { key: 'little', label: "We’re taking the first step", imgId: 'little-plastic-free', imgSrc: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/toggle-3.png?v=1744611119', alt: 'Little plastic-free hampers', link: '/collections/frontpage' }
];

export default function Sustainability() {
  const [active, setActive] = useState('zero');

  return (
    <section className="toggle-slider container gap">
      <div className="toggle-header-wrapper">
        <h2>Select your sustainability sweet spot</h2>
        <p>We are on a mission to help you build sustainable habits and it’s okay to start small.</p>
      </div>

      <div className="toggle-slider-wrapper">
        <div className="toggle-container">
          {options.map(opt => (
            <div
              key={opt.key}
              className={`toggle-option ${active === opt.key ? 'active' : 'inactive'}`}
              onClick={() => setActive(opt.key)}
            >
              {opt.label}
            </div>
          ))}
        </div>

        {options.map(opt => (
          <div
            key={opt.key}
            id={opt.imgId}
            className="toggle-image-section"
            style={{ display: active === opt.key ? 'block' : 'none' }}
          >
            <img src={opt.imgSrc} alt={opt.alt} />
            <div className="toggle-content-wrapper">
              <a href={opt.link}>View all &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}