import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Homepage from '../pages/Homepage';
import navigationLinks from '../data/NavLink'
import FlexiGift from '../pages/FlexiGift';
import Plp from '../pages/Plp'; 
import Pdp from '../pages/Pdp'; 
import LoopifyDefault from '../assets/images/loopify-logo.svg';
import LoopifyColored from '../assets/images/loopify-colored.svg';
import searchWhite from '../assets/images/search-white.svg'
import searchGreen from '../assets/images/search-green.svg'
import OurStory from '../pages/OurStory';
import ContactForm from '../pages/ContactFrom';




export default function AppRouter() {
 const location = useLocation();




const dashboardPaths = ['/plp', '/products'];

const isDashboard = dashboardPaths.some(path =>
  location.pathname.startsWith(path)
);

const navmainclass = `transparent-navbar ${isDashboard ? 'colored-navbar' : ''}`;
const Logo = isDashboard ? LoopifyColored : LoopifyDefault ;
const Search = isDashboard ? searchGreen : searchWhite ;
const hamburger = isDashboard ? (
<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H13" stroke="#00B29A" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M1 5H13" stroke="#00B29A" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M1 9H13" stroke="#00B29A" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg>)
: (
<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H13" stroke="white" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M1 5H13" stroke="white" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M1 9H13" stroke="white" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg>

)


  
  return (
    <>
   
      <Navbar navmainclass = {navmainclass} Logo={Logo} links={navigationLinks} search={Search} hamburger={hamburger} />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FlexiGift" element={<FlexiGift />} />
        <Route path="/plp" element={<Plp />} />
        <Route path="/products/:url" element={<Pdp />} />
        <Route path='/aboutUs' element={<OurStory/>} /> 
        <Route path='/Contact' element={<ContactForm/>} /> 
      </Routes>
      
      <Footer />

    </>
  );
}
