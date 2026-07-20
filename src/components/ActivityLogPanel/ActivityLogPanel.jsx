import React from 'react';
import { LuX } from "react-icons/lu";
import "./ActivityLogPanel.css";

const ActivityLogPanel = ({ onClose }) => {
  // Mock data representing the activity feed
  const activities = [
    {
      id: 1,
      title: "Loan Created",
      user: "Amit Sharma",
      date: "20 May (9:20 AM)",
      type: "create"
    },
    {
      id: 2,
      title: "Status Updated",
      user: "Amit Sharma",
      date: "20 May (9:20 AM)",
      type: "update",
      from: "Verified",
      to: "Processed"
    },
    {
      id: 3,
      title: "Updated",
      user: "Amit Sharma",
      date: "20 May (9:20 AM)",
      type: "amount_update",
      from: "₹30,00,000.00",
      to: "₹31,00,000.00",
      description: "Disbursed Amount"
    }
  ];

  return (
    <div className="activity-log-panel">
      <div className="activity-header">
        <h3>Activity Log</h3>
        <button className="close-btn" onClick={onClose}><LuX size={20} /></button>
      </div>

      <div className="activity-list">
        {activities.map((act) => (
          <div key={act.id} className="activity-item">
            <div className="activity-meta">
              <div className="user-avatar">{act.user[0]}</div>
              <div className="activity-info">
                <p className="activity-title">{act.title}</p>
                <p className="activity-user">{act.user}</p>
              </div>
              <span className="activity-date">{act.date}</span>
            </div>

            {(act.from || act.to) && (
              <div className="change-details">
                {act.description && <p className="desc">{act.description}</p>}
                
                <div className="change-box">
                  
                  <div className="change-col">
                    <span className="change-label">From</span>
                    
                    {act.type === 'update' ? (
                      <div className={`status-badge status-${act.from.toLowerCase()}`}>
                        {act.from}
                      </div>
                    ) : (
                      <span className="change-value">{act.from}</span>
                    )}
                  </div>

                  <div className="change-col">
                    <span className="change-label">To</span>
                    {act.type === 'update' ? (
                      <div className={`status-badge status-${act.to.toLowerCase()}`}>
                        {act.to}
                      </div>
                    ) : (
                      <span className="change-value">{act.to}</span>
                    )}
                  </div>

                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLogPanel;