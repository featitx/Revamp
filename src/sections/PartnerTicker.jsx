import Ticker from "../components/Tiker";

export default function LogoTicker() {
 
const demoLogos = [
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/wildcraft.png?v=1741779993', alt: 'Wildcraft' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Lafolie.png?v=1741779993', alt: 'Lafolie' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Assembly.png?v=1741779993', alt: 'Assembly' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/BlueTokai.png?v=1741779993', alt: 'Blue Tokai' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Boat.png?v=1741779993', alt: 'Boat' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Borosil.png?v=1741779993', alt: 'Borosil' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Carvaan.png?v=1741779993', alt: 'Carvaan' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Cross.png?v=1741779993', alt: 'Cross' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Entisi.png?v=1741779993', alt: 'Entisi' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Milton.png?v=1741779993', alt: 'Milton' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Mokobara.png?v=1741779993', alt: 'Mokobara' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/parker.png?v=1741779993', alt: 'Parker' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/PierreCardin.png?v=1741779993', alt: 'Pierre Cardin' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/puma.png?v=1741779993', alt: 'Puma' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Reebok.png?v=1741779993', alt: 'Reebok' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/UCB.png?v=1741779993', alt: 'UCB' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Uppercase.png?v=1741779993', alt: 'Uppercase' }
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