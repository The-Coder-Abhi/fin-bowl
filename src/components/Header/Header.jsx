import { useState, useEffect, useRef } from "react";
import { div } from "react-router-dom";
import { LuBell, LuChevronDown, LuChevronUp } from "react-icons/lu";
import RMSIcon from "../../assets/icons/bank.svg";
import DashboardIcon2 from "../../assets/icons/bar-chart-square-02.svg";
import DisbursementIcon from "../../assets/icons/coins-hand.svg";
import InvoicesIcon from "../../assets/icons/receipt-check.svg";
import POIcon from "../../assets/icons/receipt.svg";
import RMSReportsIcon from "../../assets/icons/bar-chart-square-02.svg";
import ProfileIcon from "../../assets/icons/User.png";
import BuildingIcon1 from "../../assets/icons/building-06.svg";
import BuildingIcon2 from "../../assets/icons/building-06.svg";
import "./Header.css";

const Header = () => {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If a dropdown is open, AND the click happened outside our referenced div...
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null); // ...close the dropdown!
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-wrapper">
      <div className="dropdown-wrapper" ref={dropdownRef}>
        <div className="dropdown-container">
          <button
            className={`header-item dropdown-toggle ${openDropdown === "gracia" ? "active-parent" : ""}`}
            onClick={() => toggleDropdown("gracia")}
          >
            <div className="headeritem-content">
              <img src={BuildingIcon1} alt="Gracia Advisory Group Icon" />
              <span>Gracia Advisory Group</span>
            </div>
            {openDropdown === "gracia" ? (
              <LuChevronUp className="chevron-icon" />
            ) : (
              <LuChevronDown className="chevron-icon" />
            )}
          </button>
          {openDropdown === "gracia" && (
            <div className="dropdown-menu">
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Dashboard</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Disbursement</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Invoices</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>PO</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>RMS Reports</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="dropdown-container">
          <button
            className={`header-item dropdown-toggle ${openDropdown === "abc" ? "active-parent" : ""}`}
            onClick={() => toggleDropdown("abc")}
          >
            <div className="headeritem-content">
              <img src={BuildingIcon2} alt="ABC Advisory Group Icon" />
              <span>ABC Advisory Group</span>
            </div>
            {openDropdown === "abc" ? (
              <LuChevronUp className="chevron-icon" />
            ) : (
              <LuChevronDown className="chevron-icon" />
            )}
          </button>
          {openDropdown === "abc" && (
            <div className="dropdown-menu">
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Dashboard</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Disbursement</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>Invoices</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>PO</span>
                </div>
              </div>
              <div className="sub-menu-container">
                <div className="dropdown-item">
                  <span>RMS Reports</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="profile-wrapper">
        <LuBell className="bell-icon" />
        <img src={ProfileIcon} alt="Profile Icon" />
      </div>
    </div>
  );
};

export default Header;
