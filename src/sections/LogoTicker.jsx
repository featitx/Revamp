import Ticker from "../components/Tiker";

export default function LogoTicker() {
 
  const demoLogos = [
  { src: 'public/images/client-logo/google.svg', alt: 'Google' },
  { src: 'public/images/client-logo/raymond.svg', alt: 'Raymond' },
  { src: 'public/images/client-logo/Calque.svg', alt: 'Calque' },
  { src: 'public/images/client-logo/Pidilite.svg', alt: 'Pidilite' },
  { src: 'public/images/client-logo/oracle.svg', alt: 'Oracle' },
  { src: 'public/images/client-logo/Microsoft.svg', alt: 'Microsoft' },
  { src: 'public/images/client-logo/deloitte.svg', alt: 'Deloitte' },
  { src: 'public/images/client-logo/cisco.svg', alt: 'Cisco' },
  { src: 'public/images/client-logo/capgemini.svg', alt: 'Capgemini' },
  { src: 'public/images/client-logo/bosch.svg', alt: 'Bosch' },
  { src: 'public/images/client-logo/hbsc.svg', alt: 'Hbsc' },
  { src: 'public/images/client-logo/bajaj.svg', alt: 'Bajaj' },
  { src: 'public/images/client-logo/zoom.svg', alt: 'Zoom' },
  { src: 'public/images/client-logo/tata.svg', alt: 'Tata' },
  { src: 'public/images/client-logo/amazon.svg', alt: 'Amazon' },
  { src: 'public/images/client-logo/cognizant.svg', alt: 'Cognizant' },
  { src: 'public/images/client-logo/swiggy.svg', alt: 'Swiggy' },
];

  
    return (
      
        <Ticker 
          logos={demoLogos} 
          backgroundColor="#96af7c"
          title="Our conscious clientele"
          speed={3}
        />
    
    );
  }