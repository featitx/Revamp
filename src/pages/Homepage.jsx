import React from 'react'
import Navbar from '../sections/Navbar'
import '../scss/app.scss'
import Header from '../sections/Header';
import InfoCard from "../sections/InfoCard.jsx";
import LogoTicker from '../sections/LogoTicker.jsx';
import GalleryCarousel from '../sections/GalleryCarousel.jsx';
import Collage from '../sections/Collage.jsx';
import PartnerTicker from '../sections/PartnerTicker.jsx';
import ProcessCarousel from '../sections/Process.jsx';
import Sustainability from '../sections/Sustainability.jsx';
import ProductSection from '../sections/ProdSection.jsx';
import Warehouse from '../sections/Warehouse.jsx';
import Testimonial from '../sections/Testimonal.jsx';
import PressCoverage from '../sections/PressCoverage.jsx';
import WhyLoopify from '../sections/WhyLoopify.jsx';
import Faq from '../sections/Faq.jsx';
import Footer from '../sections/Footer.jsx';
import HamperSlider from '../sections/HamperSlideshow.jsx';



const Homepage = () => {
  

  return (
    <div className="app">
      <Header/>
      <InfoCard/>
      <LogoTicker/>
      <GalleryCarousel></GalleryCarousel>
      <Collage></Collage>
      <PartnerTicker/>  
      <ProcessCarousel/> 
      <Sustainability/>   
      <ProductSection/>
      <HamperSlider/>
      <Warehouse/>
      <Testimonial/>
      <PressCoverage/>
      <WhyLoopify/>
      <Faq/>
      <Footer/>
      
      </div>
  )
}

export default Homepage ; 