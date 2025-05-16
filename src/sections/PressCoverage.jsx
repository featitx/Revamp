import React from 'react';
import '../scss/section/press.scss';

const PressCoverage = () => {
  const pressItems = [
    {
      url: "https://www.femina.in/trending/achievers/loopify-leading-the-charge-towards-sustainable-gifting-284194.html",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Femina.png?v=1739434234",
      imageWidth: "150px",
      alt: "Femina",
      title: "Loopify: Pioneering Sustainable Gifting",
      date: "22 December 2023"
    },
    {
      url: "https://www.outlookbusiness.com/sector/e-commerce/on-track-to-achieve-200-per-cent-growth-this-fiscal-year-sustainable-gifting-platform-loopify-scouts-funding-opportunities-news-9930",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/start-up-logo.webp?v=1741675821",
      imageWidth: "90px",
      alt: "outlook business",
      title: "On track to achieve 200 per cent growth this fiscal year, sustainable gifting platform Loopify scouts funding opportunities.",
      date: "26 November 2023"
    },
    {
      url: "https://bwsustainabilityworld.com/celebrating-the-sustainable-world-torch-bearers-2023/",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/bw-main-logo.webp?v=1741675445",
      imageWidth: "180px",
      alt: "BW Sustainability World.com",
      title: "Celebrating The Sustainable World Torch-Bearers 2023",
      date: "22 November 2023"
    },
    {
      url: "https://economictimes.indiatimes.com/news/company/corporate-trends/diwali-season-gifting-companies-feel-freeze-of-it-slowdown/articleshow/105133677.cms",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/The-economic-times-logo.jpg?v=1739432436",
      imageWidth: "160px",
      alt: "The Economic Times",
      title: "Diwali season: Gifting companies feel freeze of IT slowdown",
      date: "11 November 2023"
    },
    {
      url: "https://www.financialexpress.com/lifestyle/sustainable-the-key-ingredient-in-corporate-gifting-this-season/3297290/",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/fe-logo.png?v=1741676669",
      imageWidth: "170px",
      alt: "FE Leisure",
      title: "Sustainable the key ingredient in corporate gifting this season",
      date: "06 November 2023"
    },
    {
      url: "https://www.thehindubusinessline.com/specials/clean-tech/when-green-becomes-the-colour-of-gifting/article67461289.ece",
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/hindubusiness-logo.png?v=1741677552",
      imageWidth: "150px",
      alt: "businessline",
      title: "When green becomes the colour of gifting",
      date: "29 October 2023"
    }
  ];

  return (
    <div className="press-says">
      <div className="container">
        <h2 className="title">Read about us in the news!</h2>
        <ul>
          {pressItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="image">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    style={{ width: item.imageWidth }}
                  />
                </div>
                <p>{item.title}</p>
                <div className="press-date">{item.date}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PressCoverage;