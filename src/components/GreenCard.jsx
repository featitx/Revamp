import React from 'react'
import "../scss/component/greencard.scss"

const GreenCard = ({head , info}) => {
  return (
    <>
      <div className="green-card">
        <h2>{head}</h2>
        <p>{info}</p>
      </div>
    </>
  )
}

export default GreenCard
