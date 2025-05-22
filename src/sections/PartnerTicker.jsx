import Ticker from "../components/Tiker";

export default function LogoTicker() {
 
const demoLogos = [
  { src: '../public/images/partner-logo/uppercase.svg', alt: 'Uppercase' },
  { src: '../public/images/partner-logo/pierre-cardin.svg', alt: 'Pierre Cardin' },
  { src: '../public/images/partner-logo/la-folie.svg', alt: 'La Folie' },
  { src: '../public/images/partner-logo/ucb.svg', alt: 'Ucb' },
  { src: '../public/images/partner-logo/cross.svg', alt: 'Cross' },
  { src: '../public/images/partner-logo/reebok.svg', alt: 'Reebok' },
  { src: '../public/images/partner-logo/puma.svg', alt: 'Puma' },
  { src: '../public/images/partner-logo/parker.svg', alt: 'Parker' },
  { src: '../public/images/partner-logo/mokobara.svg', alt: 'Mokobara' },
  { src: '../public/images/partner-logo/Milton.svg', alt: 'Milton' },
  { src: '../public/images/partner-logo/entisi.svg', alt: 'Entisi' },
  { src: '../public/images/partner-logo/blue-tokai.svg', alt: 'Blue Tokai' },
  { src: '../public/images/partner-logo/carvaan.svg', alt: 'Carvaan' },
  { src: '../public/images/partner-logo/borosil.svg', alt: 'Borosil' },
  { src: '../public/images/partner-logo/boat.svg', alt: 'Boat' },
  { src: '../public/images/partner-logo/Assembly.svg', alt: 'Assembly' },
];

  
    return (
      
        <Ticker 
          logos={demoLogos} 
          backgroundColor="#96af7c"
          title="Our Partner"
          speed={3}
        />
    
    );
  }