import React from 'react';
import { flexiGiftData } from '../data/FlexiGift'
import ProdFeatures from '../components/ProdFeatures';
import ProdWorks from '../components/ProdWorks';
import ProdHero from '../components/ProdHero';
import ProdSignup from '../components/ProdSignup';

const FlexiGift = () => {
  const { hero, features, howItWorks, signupCTA } = flexiGiftData;

  return (
     <div className="fg-wrapper-page">
      <ProdHero
        title={hero.title}
        subtitle={hero.subtitle}
        primaryButtonText={hero.primaryButtonText}
        primaryButtonLink={hero.primaryButtonLink}
        backgroundColor={hero.backgroundColor}
        heroImage={features.heroImage}

      />
      
      <ProdFeatures
        features={features.items}
        backgroundColor={features.backgroundColor}
      />
      
      <ProdWorks
        title={howItWorks.title}
        steps={howItWorks.steps}
        backgroundColor={howItWorks.backgroundColor}
        titleColor={howItWorks.titleColor}

      />
      
      <ProdSignup
        heading={signupCTA.heading}
        buttonText={signupCTA.buttonText}
        buttonLink={signupCTA.buttonLink}
        backgroundColor={signupCTA.backgroundColor}
      />
   </div>
  );
};

export default FlexiGift;