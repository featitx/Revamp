import Ticker from "../components/Tiker";

export default function LogoTicker() {
 
  const demoLogos = [
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/swiggy.png?v=1741326130', alt: 'Swiggy' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/HSBC.png?v=1741326130', alt: 'HSBC' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/amazon.png?v=1741326130', alt: 'Amazon' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/tata.png?v=1741326130', alt: 'Tata' },
  { src: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/zoom.png?v=1741326130', alt: 'Zoom' },
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