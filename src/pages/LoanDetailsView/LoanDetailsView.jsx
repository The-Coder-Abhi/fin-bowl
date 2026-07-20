import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { LuChevronsUpDown, LuHistory } from "react-icons/lu";
import LoanHeader from "../../components/LoanHeader/LoanHeader";
import SummaryTiles from "../../components/SummaryTiles/SummaryTiles";
import AccordionPanel from "../../components/AccordionPanel/AccordionPanel";
import { getRecordById } from "../../data/data";
import ActivityLogPanel from "../../components/ActivityLogPanel/ActivityLogPanel";
import { ActivityContext } from "../../context/ActivityContext";
import "./LoanDetailsView.css";
import SectionNav from "../../components/SectionNav/SectionNav";

const LoanDetailsView = () => {
  const { id } = useParams();
  const [visibility, setVisibility] = useState();
  const { showActivity, setShowActivity } = useContext(ActivityContext);

  const [data] = useState(getRecordById(id));
  const [applicants, setApplicants] = useState(data?.applicants || []);

  const handleVisibility = (value) => {
    setVisibility(value);
  };

  return (
    <div className="loan-details-view-wrapper">
      <div className="loan-details-view-container">
        <div className="loan-details-view-header">
          <LoanHeader id={id} onDataChange={handleVisibility} />
          {visibility && <SummaryTiles />}
        </div>
        <div className="loan-details-view-main">
          
          {/* Side Navigation */}
          <SectionNav />

          {showActivity && (
            <div className="activity-overlay">
              <ActivityLogPanel onClose={() => setShowActivity(false)} />
            </div>
          )}
          
          <div className="accordion-wrapper">
            <div className="accordion-content">
              
              {/* Added ID: applicant-information */}
              <div id="applicant-information">
                <AccordionPanel title="Applicant Information" defaultOpen={true}>
                  <div className="table-wrapper nested-table-wrapper">
                    <table className="disbursement-table">
                      <thead>
                        <tr>
                          <th>Name <LuChevronsUpDown className="icon-action" /></th>
                          <th>Type <LuChevronsUpDown className="icon-action" /></th>
                          <th>Email <LuChevronsUpDown className="icon-action" /></th>
                          <th>Phone Number <LuChevronsUpDown className="icon-action" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {applicants.map((person) => (
                          <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>
                              <span className={`badge-pill badge-${person.type.toLowerCase()}`}>
                                {person.type}
                              </span>
                            </td>
                            <td>{person.email}</td>
                            <td>{person.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionPanel>
              </div>

              {/* Added ID: loan-details */}
              <div id="loan-details">
                <AccordionPanel title="Loan Details" defaultOpen={true}>
                  <div className="loan-details-grid">
                    <div className="detail-block">
                      <span className="detail-label">Loan ID</span>
                      <span className="detail-value font-medium">{data?.loanId}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Loan Type</span>
                      <span className="badge-pill badge-loan">{data?.loanType}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Bank</span>
                      <span className="detail-value font-medium">{data?.bankName}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Stage</span>
                      <span className="detail-value font-medium">{data?.loanDetails?.stage}</span>
                    </div>
                    
                    <div className="detail-section-title">Sanction Details:</div>
                    <div className="detail-block">
                      <span className="detail-label">Sanctioned Date</span>
                      <span className="detail-value font-medium">{data?.loanDetails?.sanctionedDate}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Loan Sanctioned Amount</span>
                      <span className="detail-value text-danger font-medium">
                        ₹{data?.sanctionedAmount?.toLocaleString("en-IN")}.00
                      </span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Verified Sanctioned Amount</span>
                      <span className="detail-value text-danger font-medium">
                        ₹{data?.verifiedAmount?.toLocaleString("en-IN")}.00
                      </span>
                    </div>
                    <div></div>

                    <div className="detail-section-title">Team Details:</div>
                    <div className="detail-block">
                      <span className="detail-label">Bank Executive Name</span>
                      <span className="detail-value font-medium">{data?.bankExecutive?.name}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Credit Executive Details</span>
                      <span className="detail-value font-medium">{data?.creditExecutive?.name}</span>
                    </div>
                    <div className="detail-block">
                      <span className="detail-label">Source</span>
                      <span className="detail-value font-medium">{data?.loanDetails?.source}</span>
                    </div>
                  </div>
                </AccordionPanel>
              </div>

              {/* Added ID: disbursements-information */}
              <div id="disbursements-information">
                <AccordionPanel title="Disbursements Information" defaultOpen={true}>
                  <div className="table-wrapper nested-table-wrapper">
                    <table className="disbursement-table">
                      <thead>
                        <tr>
                          <th>Disbursement ID <LuChevronsUpDown /></th>
                          <th>Disbursement Date <LuChevronsUpDown /></th>
                          <th>Disbursement Amount <LuChevronsUpDown /></th>
                          <th>Verified Disbursement Amount <LuChevronsUpDown /></th>
                          <th>UTR Number <LuChevronsUpDown /></th>
                          <th>Tranche <LuChevronsUpDown /></th>
                          <th>Disbursement Status <LuChevronsUpDown /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.disbursementSchedule?.map((row) => (
                          <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.date}</td>
                            <td className={`font-medium ${row.amount > 600000 ? "text-danger" : "text-success"}`}>
                              ₹{row.amount.toLocaleString("en-IN")}.00
                            </td>
                            <td className={`font-medium ${row.verifiedAmount > 600000 ? "text-danger" : "text-success"}`}>
                              ₹{row.verifiedAmount.toLocaleString("en-IN")}.00
                            </td>
                            <td>{row.utr}</td>
                            <td>{row.tranche}</td>
                            <td>
                              <span className="status-badge status-processed">{row.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionPanel>
              </div>

              {/* Added ID: commission */}
              <div id="commission">
                <AccordionPanel
                  title="Commission"
                  defaultOpen={false}
                  badge={`Total Commission : ₹${data?.totalCommission?.toLocaleString("en-IN")}.00`}
                >
                  <div className="table-wrapper nested-table-wrapper">
                    <table className="disbursement-table">
                      <thead>
                        <tr>
                          <th>Party Name (Used Code) <LuChevronsUpDown /></th>
                          <th>Sub-Code Commission (Net)% <LuChevronsUpDown /></th>
                          <th>Gross Commission % <LuChevronsUpDown /></th>
                          <th>Commission Amount <LuChevronsUpDown /></th>
                          <th>Invoice No <LuChevronsUpDown /></th>
                          <th>Invoice Status <LuChevronsUpDown /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data?.commissions?.breakdown || []).map((item) => (
                          <tr key={item.id}>
                            <td>{item.partyName}</td>
                            <td>{item.netPercent.toFixed(4)}%</td>
                            <td>{item.grossPercent.toFixed(4)}%</td>
                            <td className="text-success">₹{item.amount.toLocaleString("en-IN")}.00</td>
                            <td className="text-primary">{item.invoiceNo}</td>
                            <td>
                              <span className="status-badge status-processed">{item.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionPanel>
              </div>

              {/* Added ID: broker-information */}
              <div id="broker-information">
                <AccordionPanel
                  title="Broker Information"
                  defaultOpen={false}
                  badge={`Total Referral Fee: ₹${data?.totalReferralFee?.toLocaleString("en-IN")}.00`}
                >
                  <div className="table-wrapper nested-table-wrapper">
                    <table className="disbursement-table">
                      <thead>
                        <tr>
                          <th>Broker Name / Code <LuChevronsUpDown /></th>
                          <th>Broker Commission % <LuChevronsUpDown /></th>
                          <th>Referral Fee <LuChevronsUpDown /></th>
                          <th>PO No & Date <LuChevronsUpDown /></th>
                          <th>PO Status <LuChevronsUpDown /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data?.brokers?.breakdown || []).map((broker) => (
                          <tr key={broker.id}>
                            <td>
                              <div>{broker.name}</div>
                              <div className="text-muted">{broker.code}</div>
                              <span className="badge-pill badge-co-applicant">{broker.type}</span>
                            </td>
                            <td>{broker.commissionPercent.toFixed(4)}%</td>
                            <td>₹{broker.fee.toLocaleString("en-IN")}.00</td>
                            <td>
                              <div className="text-primary">{broker.poNo}</div>
                              <div className="text-muted">{broker.poDate}</div>
                            </td>
                            <td>
                              <span className="status-badge status-processed">{broker.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionPanel>
              </div>

              {/* Added ID: additional-information (Wrapping both Notes and Documents) */}
              <div id="additional-information">
                <AccordionPanel title="Notes / Additional Information" defaultOpen={false}>
                  <p className="note-text">{data?.notes}</p>
                </AccordionPanel>

                <AccordionPanel title="Documents" defaultOpen={false}>
                  <div className="document-grid">
                    {data?.documents?.map((doc) => (
                      <div key={doc.id} className="document-card">
                        <div className="doc-icon">📄</div>
                        <div>
                          <div className="doc-name">{doc.fileName}</div>
                          <div className="doc-size">{doc.size}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionPanel>
              </div>

            </div>
          </div>
        </div>
      </div>
      {showActivity && (
        <div className="activity-overlay">
          <ActivityLogPanel onClose={() => setShowActivity(false)} />
        </div>
      )}
    </div>
  );
};

export default LoanDetailsView;