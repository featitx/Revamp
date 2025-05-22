import React from 'react';
import OurStoryHeader from '../sections/OurStoryHeader';
// import Timeline from './Timeline';
import FoundersSection from '../sections/FoundersSection';
import TeamSection from '../sections/TeamSection';
import '../scss/section/ourstory.scss';

const OurStory = () => {
  return (
    <div className="our-story">
      <OurStoryHeader />
      {/* <Timeline /> */}
      <FoundersSection />
      <TeamSection />
    </div>
  );
};

export default OurStory;