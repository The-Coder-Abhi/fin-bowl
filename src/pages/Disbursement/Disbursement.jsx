import React from 'react'
import Header from '../../components/Header/Header'
import "./Disbursement.css"
import SummaryMetrics from '../../components/SummaryMetrics/SummaryMetrics'
import DisbursementTable from '../../components/DisbursementTable/DisbursementTable'
import LoanHeader from '../../components/LoanHeader/LoanHeader'

const Disbursement = () => {
  return (
    <div className='disbursement-wrapper'>
      <div className="disbursement-content">
        <SummaryMetrics/>
        <DisbursementTable/>
      </div>
      {/* <LoanHeader id="2"/> */}
    </div>
  )
}

export default Disbursement
