import React from 'react'
import "./SummaryTiles.css"

const SummaryTiles = () => {
  return (
    <div className='summary-tiles-wrapper'>
      <div className="tiles-card">
        <p>Total Disbursements</p>
        <h2>0</h2>
      </div>
      <div className="tiles-card">
        <p>Total Disbursed Amount</p>
        <h2>0</h2>
      </div>
      <div className="tiles-card">
        <p>Submitted</p>
        <h2>0</h2>
      </div>
      <div className="tiles-card">
        <p>Verified</p>
        <h2>0</h2>
      </div>
      <div className="tiles-card">
        <p>Processed</p>
        <h2>0</h2>
      </div>
      <div className="tiles-card">
        <p>Audited</p>
        <h2>0</h2>
      </div>
    </div>
  )
}

export default SummaryTiles
