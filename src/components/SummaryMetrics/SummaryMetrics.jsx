import React from 'react' 
import './SummaryMetrics.css'
import { getExpandedData } from '../../data/data';

const SummaryMetrics = () => {
  const data = getExpandedData();

  const totalDisbursements = data.length;
  
  const totalDisbursedAmount = data.reduce((sum, item) => sum + (item.sanctionedAmount || 0), 0);

  const statusCounts = data.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status

    ] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className='summary-metrics-wrapper'>
      <div className="metrics-card">
        <p>Total Disbursements</p>
        <h2>{totalDisbursements}</h2>
      </div>
      <div className="metrics-card">
        <p>Total Disbursed Amount</p>
        <h2 title={`₹${totalDisbursedAmount.toLocaleString('en-IN')}`}>
          ₹{totalDisbursedAmount.toLocaleString('en-IN')}
        </h2>
      </div>
      <div className="metrics-card">
        <p>Submitted</p>
        <h2>{statusCounts['Submitted'] || 0}</h2>
      </div>
      <div className="metrics-card">
        <p>Verified</p>
        <h2>{statusCounts['Verified'] || 0}</h2>
      </div>
      <div className="metrics-card">
        <p>Processed</p>
        <h2>{statusCounts['Processed'] || 0}</h2>
      </div>
      <div className="metrics-card">
        <p>Audited</p>
        <h2>{statusCounts['Audited'] || 0}</h2>
      </div>
    </div>
  )
}

export default SummaryMetrics
