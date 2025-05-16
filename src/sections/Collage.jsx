import { useState, useEffect } from 'react';
import '../scss/section/collage.scss';

const Collage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const collageItems = [
    {
      href: "/collections/diwali-corporate-gifting",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/festival-gifting.png?v=1738829984",
      imgAlt: "Festive Gifting",
      text: "FESTIVE GIFTING"
    },
    {
      href: "/collections/employees",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/client-gifting.png?v=1738829983",
      imgAlt: "Client Gifting",
      text: "EMPLOYEES GIFTING"
    },
    {
      href: "/collections/frontpage",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/milestone-gifting.png?v=1738829984",
      imgAlt: "Milestone Gifting",
      text: "MILESTONE GIFTING"
    },
    {
      href: "/collections/employee-onboarding",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/employee-welcome-kit.png?v=1738829984",
      imgAlt: "Employee Welcome Kits",
      text: "EMPLOYEE WELCOME KITS"
    }
  ];

  // Added the fifth item for mobile view that's different from desktop
  const mobileItems = [
    ...collageItems,
    {
      href: "/collections/signature-collection-iii",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/signature-collection.png?v=1740552153",
      imgAlt: "Signature Collection",
      text: "SIGNATURE COLLECTION III"
    }
  ];

  // For desktop view we need to add Women's Day as the fifth item
  const desktopItems = [
    ...collageItems,
    {
      href: "/collections/womens-day-corporate-gifting",
      imgSrc: "https://cdn.shopify.com/s/files/1/0701/5396/1684/files/Womens-day.png?v=1738829983",
      imgAlt: "Women's Day",
      text: "WOMEN'S DAY"
    }
  ];

  return (
    <section className="section-collage gap">
      <div className="container">
        {/* Desktop View */}
        <div className="photo-collage-container-lg">
          <h2 className="photo-collage-heading title">So, what are you looking for?</h2>
          <div className="photo-collage-grid">
            {desktopItems.map((item, index) => (
              <a href={item.href} key={`desktop-${index}`}>
                <div className="photo-collage-item">
                  <img src={item.imgSrc} alt={item.imgAlt} />
                  <div className="photo-collage-text">{item.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="photo-collage-container">
          <h2>So, what are you looking for?</h2>
          <div className="photo-grid">
            {mobileItems.map((item, index) => (
              <a href={item.href} key={`mobile-${index}`}>
                <div className="grid-item">
                  <img src={item.imgSrc} alt={item.imgAlt} />
                  <div className="overlay-text">{item.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collage;