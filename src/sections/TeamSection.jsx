import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Shweta Jain',
      role: 'Sales & Operations',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Shweta.png?v=1741608073'
    },
    {
      name: 'Avani Mehta',
      role: 'Vendor Management & Curation',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Avani.png?v=1741608073'
    },
    {
      name: 'Tanvi Purohit',
      role: 'Design & Creative Direction',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Tanvi.png?v=1741608073'
    },
    {
      name: 'Harshad Shetty',
      role: 'Photography',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Harshad.png?v=1741608073'
    },
    {
      name: 'Lanclet Lasrado',
      role: 'Order fulfillment',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Lance.png?v=1741608072'
    },
    {
      name: 'Naveen Yadav',
      role: 'Cataloguing',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Naveen.png?v=1741608073'
    },
    {
      name: 'Ishita Singla',
      role: 'Design & Creative Execution',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Ishita.png?v=1741608073'
    },
    {
      name: 'Mehrosh Vaseem',
      role: 'Key Account Management',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Mehrosh.png?v=1741608073'
    },
    {
      name: 'Elina Fonseca',
      role: 'Procurement',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Elina.png?v=1741608073'
    },
    {
      name: 'Danish Khalifey',
      role: 'Gifting Advisor',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Danish.png?v=1741608073'
    },
    {
      name: 'Deep Shah',
      role: 'Gifting Advisor',
      image: 'https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Deep.png?v=1741608073'
    }
  ];

  return (
    <div className="teams-em-wrap">
      <div className="container">
        <h2>The Team</h2>
        <div className="teams-em">
          {teamMembers.map((member, index) => (
            <div className="team" key={index}>
              <div className="profile-pc">
                <img src={member.image} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <h3>{member.role}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;