// InfoCard.jsx
import React from 'react';
import statsData from '../data/InfoCard.json';
import GreenCard from '../components/GreenCard';
import "../scss/section/infocard.scss"

const InfoCard = () => {
  const { stats } = statsData;

  return (
    <div className="stats-section gap">
      <div className="card-wrapper">
        <div className="info-card">
        {stats.map(({ id, value, unit, label }) => (
            <GreenCard head={value} unit={unit} info = {label} key={id} className="green-card"/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
