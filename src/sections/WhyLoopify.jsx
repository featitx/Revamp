import React from 'react';
import '../scss/section/whyloopify.scss';

const WhyLoopify = () => {
  const featureItems = [
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/leaf.png?v=1739341064",
      alt: "Earth-friendly products",
      title: "Earth-friendly products"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/India.png?v=1739341063",
      alt: "Proudly made in India",
      title: "Proudly made in India"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/bag.png?v=1739341064",
      alt: "Supports small businesses",
      title: "Supports small businesses"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/gift.png?v=1739341063",
      alt: "Curation of unique gift hampers",
      title: "Curation of unique gift\nhampers that tell a story"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/settings.png?v=1739341064",
      alt: "Custom branding available",
      title: "Custom curation and\nbranding available"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Earth.png?v=1739341064",
      alt: "Measurable impact with SDGs",
      title: "Measurable impact in line with Sustainable Development Goals"
    }
  ];

  const renderTitle = (title) => {
    if (title.includes('\n')) {
      const [firstLine, secondLine] = title.split('\n');
      return (
        <>
          {firstLine}<br />{secondLine}
        </>
      );
    }
    return title;
  };

  return (
    <div className="home-bottom gap">
      <div className="container">
        <div className="home-about">
          <div className="loopify-about">
            <h2>Level up your gifting game</h2>
            <p>From design to delivery, our team is with you every step of the way.</p>
          </div>
          <div className="wrep">
            <div className="info">
              {featureItems.map((item, index) => (
                <div className="item" key={index}>
                  <div className="images">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="text">
                    <h3>{renderTitle(item.title)}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLoopify;