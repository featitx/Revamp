import '../scss/section/hamperslideshow.scss'
// VerticalSwiper.jsx
import { Swiper, SwiperSlide } from 'swiper/react';                         
import { Mousewheel, Pagination , Autoplay } from 'swiper/modules';                     
import 'swiper/css';                                                         
import 'swiper/css/pagination';                                              
                                             

const slides = [
  { text: 'has a story', image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/new-hmp-img-1.png?v=1742368215' },
  { text: 'is made from earth-friendly materials', image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/hmp-slide-2.jpg?v=1742381760' },
  { text: 'is curated across multiple product categories', image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/hmp-slide-3.jpg?v=1742381760' }
];

export default function HamperSlider() {
  return (
    <div className="vertical-swiper__wrapper container">
      <h2 className="vertical-swiper__title">What makes a Loopify gift hamper special?</h2>
      <Swiper
        direction="vertical"                    
        slidesPerView={1}
        spaceBetween={30}
        // mousewheel={true}                       
        pagination={{ clickable: true }} 
        loop={true}
        // autoHeight={true} 
         autoplay={{
         delay: 2000,
         disableOnInteraction: false
                }}       
        modules={[Mousewheel, Pagination , Autoplay]}
        className="vertical-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="vertical-swiper__slide">
          <h2 className="swiper-static_title">Every Loopify hamper</h2>
         <p className="vertical-swiper__text">{slide.text}</p>
            <img src={slide.image} alt={slide.text}  className='vertical-slide-image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// export default HamperSlider;

