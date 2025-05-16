import React, { useRef } from 'react';
import '../scss/section/testimonal.scss';

const Testimonal = () => {
  const testimonialImages = [
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-01.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-02.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-03.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-04.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-05.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-06.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-07.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-08.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-09.jpg',
    'https://d371c3ugbb3pk.cloudfront.net/pub/media/wysiwyg/corporate-gifting/testimonial-graphic/testimonial-graphic-10_v2.jpg'
  ];


  
  return (
    <section className="testimonial-carousel-section gap">
      <div className="container-fluid">
        <div id="testimonial-carousel" className="">
          <div className="testimonial-slider">
            <div className="testimonials">
              {testimonialImages.map((src, index) => (
                <div key={index} className="testimonal-slides">
                  <img 
                    src={src} 
                    alt={`Testimonial graphic ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;