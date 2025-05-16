import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Homepage from '../pages/Homepage';
import navigationLinks from '../data/NavLink'
import FlexiGift from '../pages/FlexiGift';
import Plp from '../pages/Plp'; 
import Pdp from '../pages/Pdp'; 


export default function AppRouter() {
  
  return (
    <>
    <Router>
      <Navbar links={navigationLinks} />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FlexiGift" element={<FlexiGift />} />
        <Route path="/plp" element={<Plp />} />
        <Route path="/products/:url" element={<Pdp />} />



      </Routes>
      
      <Footer />

    </Router>
    </>
  );
}
