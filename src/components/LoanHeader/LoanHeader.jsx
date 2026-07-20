import { useState } from 'react'
import {getRecordById} from '../../data/data'
import "./LoanHeader.css"

const LoanHeader = ({id, onDataChange}) => {
    const [data] = useState(getRecordById(id));
    const [isChecked, setIsChecked] = useState(true);

    onDataChange(isChecked);

    const getStatusClass = (status) => {
      switch (status.toLowerCase()) {
        case "submitted":
          return "status-submitted";
        case "verified":
          return "status-verified";
        case "processed":
          return "status-processed";
        case "audited":
          return "status-audited";
        default:
          return "status-draft";
    }
  };

  if (!data) {
      return <div className='loanHeader-wrapper'><h2>Record Not Found</h2></div>;
  }

  return (
    <div className='loanHeader-wrapper'>
      <div className="loanHeader-content">
        <div className="applicant-container">
          <h1>{data.applicantName}</h1>
          <span className={`status-badge ${getStatusClass(data.status)}`}>• {data.status}</span>
        </div>
        <p>{data.loanType}</p>
      </div>
      <div className="toggle-container">
        <label className='switch'>
          <input type="checkbox" 
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}/>
          <span className="slider"></span>
        </label>
        <span className="toggle-label">Summary Titles</span>
      </div>
    </div>
  )
}

export default LoanHeader
