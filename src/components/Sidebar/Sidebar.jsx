import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logomark.svg";
import { LuSearch, LuChevronDown, LuChevronUp } from "react-icons/lu";
import DashboardIcon from "../../assets/icons/home-line.svg";
import FinanceIcon from "../../assets/icons/wallet-03.svg";
import SalesCRMIcon from "../../assets/icons/pie-chart-03.svg";
import RMSIcon from "../../assets/icons/bank.svg";
import ComplianceIcon from "../../assets/icons/shield-tick.svg";
import VendorsIcon from "../../assets/icons/users-02.svg";
import AIIcon from "../../assets/icons/magic-wand-01.svg";
import ReportsIcon from "../../assets/icons/file-05.svg";
import DashboardIcon2 from "../../assets/icons/bar-chart-square-02.svg";
import DisbursementIcon from "../../assets/icons/coins-hand.svg";
import InvoicesIcon from "../../assets/icons/receipt-check.svg";
import POIcon from "../../assets/icons/receipt.svg";
import RMSReportsIcon from "../../assets/icons/bar-chart-square-02.svg";
import "./Sidebar.css";

const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // State to toggle dropdown
  const [isRmsOpen, setIsRmsOpen] = useState(false);

  return (
    <div className="sidebar-wrapper">
      <div className="logo-section">
        <img src={logo} alt="Logo" />
        <h3 className="logo-text">FinBowl</h3>
      </div>

      <div className="divider divider-normal"></div>

      <div className="menu-wrapper">
        <div className="search-bar">
          <LuSearch className="input-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img
              src={DashboardIcon}
              alt="Dashboard Icon"
              className="menu-icon"
            />
            <span>Dashboard</span>
          </button>
        </div>

        <div className="divider divider-tight"></div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img src={FinanceIcon} alt="Finance Icon" className="menu-icon" />
            <span>Finance</span>
          </button>
        </div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img
              src={SalesCRMIcon}
              alt="Sales CRM Icon"
              className="menu-icon"
            />
            <span>Sales CRM</span>
          </button>
        </div>

        <div className="dropdown-container">
          <button
            className={`menu-item dropdown-toggle ${isRmsOpen ? "active-parent" : ""}`}
            onClick={() => setIsRmsOpen(!isRmsOpen)}
          >
            <div className="menu-item-content">
              <img src={RMSIcon} alt="RMS Icon" className="menu-icon" />
              <span>RMS</span>
            </div>
            {isRmsOpen ? (
              <LuChevronUp className="chevron-icon" />
            ) : (
              <LuChevronDown className="chevron-icon" />
            )}
          </button>
        </div>
        {isRmsOpen && (
          <div className="dropdown-menu">
            <NavLink
              to="/rms/dashboard"
              className={({ isActive }) =>
                `sub-menu-container ${isActive ? "active" : ""}`
              }
            >
              <div className="sub-menu-item">
                <img src={DashboardIcon2} alt="Dashboard Icon 2" className="sub-menu-icon" />
                <span>Dashboard</span>
              </div>
            </NavLink>
            <NavLink
              to="/rms/disbursement"
              className={({ isActive }) =>
                `sub-menu-container ${isActive ? "active" : ""}`
              }
            >
              <div className="sub-menu-item">
                <img src={DisbursementIcon} alt="Disbursement Icon" className="sub-menu-icon" />
                <span>Disbursement</span>
              </div>
            </NavLink>
            <NavLink
              to="/rms/invoices"
              className={({ isActive }) =>
                `sub-menu-container ${isActive ? "active" : ""}`
              }
            >
              <div className="sub-menu-item">
                <img src={InvoicesIcon} alt="Invoices Icon" className="sub-menu-icon" />
                <span>Invoices</span>
              </div>
            </NavLink>
            <NavLink
              to="/rms/po"
              className={({ isActive }) =>
                `sub-menu-container ${isActive ? "active" : ""}`
              }
            >
              <div className="sub-menu-item">
                <img src={POIcon} alt="PO Icon" className="sub-menu-icon" />
                <span>PO</span>
              </div>
            </NavLink>
            <NavLink
              to="/rms/report"
              className={({ isActive }) =>
                `sub-menu-container ${isActive ? "active" : ""}`
              }
            >
              <div className="sub-menu-item">
                <img src={RMSReportsIcon} alt="RMS Reports Icon" className="sub-menu-icon" />
                <span>RMS Reports</span>
              </div>
            </NavLink>
          </div>
        )}

        <div className="dropdown-container">
          <button className="menu-item">
            <img
              src={ComplianceIcon}
              alt="Compliance Icon"
              className="menu-icon"
            />
            <span>Compliance</span>
          </button>
        </div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img src={VendorsIcon} alt="Vendors Icon" className="menu-icon" />
            <span>Vendors</span>
          </button>
        </div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img src={AIIcon} alt="AI Icon" className="menu-icon" />
            <span>AI Suite</span>
          </button>
        </div>

        <div className="dropdown-container">
          <button className="menu-item">
            <img src={ReportsIcon} alt="Reports Icon" className="menu-icon" />
            <span>Reports</span>
          </button>
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="footer-item">
            Version 1.0
        </div>
      </div>
    </div>
  );
};

export default SideBar;
