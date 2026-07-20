import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  LuHistory,
  LuCloudDownload,
  LuChevronDown,
  LuChevronRight,
} from "react-icons/lu";
import { getRecordById } from "../../data/data";
import { ActivityContext } from "../../context/ActivityContext";
import { MdArchive } from "react-icons/md";
import "./PageHeader.css";

const routeDictionary = {
  "/rms/dashboard": { title: "Dashboard", parent: "RMS" },
  "/rms/disbursement": { title: "Disbursement", parent: "RMS" },
  "/rms/invoices": { title: "Invoices", parent: "RMS" },
  "/rms/po": { title: "Purchase Orders", parent: "RMS" },
  "/rms/reports": { title: "RMS Reports", parent: "RMS" },
  "/finance": { title: "Finance Overview", parent: "FinBowl" },
  "/compliance": { title: "Compliance", parent: "FinBowl" },
};

const PageHeader = () => {
  const { toggleActivity } = useContext(ActivityContext);
  const location = useLocation();
  const currentPath = location.pathname;

  let isLoanDetails = false;

  let currentPageInfo = routeDictionary[currentPath] || {
    title: "Dashboard",
    parent: "RMS",
  };
  let actionButtonText = `Add ${currentPageInfo.title}`;

  let middleCrumb = null;
  let activeCrumb = currentPageInfo.title;

  if (
    currentPath.startsWith("/rms/disbursement/") &&
    currentPath !== "/rms/disbursement"
  ) {
    const id = currentPath.split("/").pop();
    const record = getRecordById(id);

    if (record) {
      isLoanDetails = true;
      currentPageInfo = {
        title: `Loan - ${record.loanId}`,
        parent: "RMS",
      };
      middleCrumb = "Disbursement";
      activeCrumb = record.applicantName;
      actionButtonText = "Edit Loan";
    }
  }

  return (
    <header className="header-container">
      {/* Left: Typography Stack */}
      <div className="title-stack">
        <h1 className="page-title">{currentPageInfo.title}</h1>
        <nav className="breadcrumb-nav">
          <span className="crumb-parent">{currentPageInfo.parent}</span>
          <LuChevronRight className="crumb-divider" />
          {middleCrumb && (
            <>
              <span className="crumb-parent">{middleCrumb}</span>
              <LuChevronRight className="crumb-divider" />
            </>
          )}
          <span className="crumb-current">{activeCrumb}</span>
        </nav>
      </div>

      {/* Right: Modern Action Controls */}
      <div className="action-group">
        {isLoanDetails ? (
          <>
            <button className="btn btn-outline">
              <MdArchive className="btn-icon"/>
              <span>Archive</span>
            </button>
            <button className="btn btn-outline" onClick={toggleActivity}>
              <LuHistory className="btn-icon" />
              <span>Activity Log</span>
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline">
              <LuHistory className="btn-icon" />
              <span>Activity</span>
            </button>
            <button className="btn btn-outline">
              <LuCloudDownload className="btn-icon" />
              <span>Import Excel</span>
            </button>
          </>
        )}

        <button className="btn btn-solid">
          <span>{actionButtonText}</span>
          <LuChevronDown className="btn-icon right" />
        </button>
      </div>
    </header>
  );
};

export default PageHeader;
