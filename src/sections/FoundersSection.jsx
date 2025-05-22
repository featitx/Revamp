import React from 'react';

const FoundersSection = () => {
  const founders = [
    {
      name: 'Hemal Gathani',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/hemal.png?v=1741250677',
      bio: 'With over 18 of experience in consulting and training, Hemal is an ardent wildlife photographer who enjoys seeing animals in their natural habitat. By launching Loopify, he hopes to ensure that we conserve our wildlife, our forests, our resources and the world around us.'
    },
    {
      name: 'Saurabh Gupta',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/saurabh.png?v=1741250677',
      bio: 'An alumnus of NID with 18+ years of experience in the design and innovation industry, Saurabh is working towards a trash-free world. By launching Loopify, Saurabh has combined two of his greatest passions: solving complex design problems and creating a cure for the plastic pandemic.'
    }
  ];

  return (
    <div className="teams-wrapper">
      <div className="container">
        <h2>The Founders</h2>
        
        {founders.map((founder, index) => (
          <div className="team-fd" key={index}>
            <img src={founder.image} alt={founder.name} />
            <div className="bio">
              <b>{founder.name}</b>
              <p>{founder.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersSection;