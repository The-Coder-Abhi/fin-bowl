import { useState, useRef, useEffect } from "react";
import { FaWindows } from "react-icons/fa";
import {
  LuChevronDown,
  LuChevronsUpDown,
  LuSlidersHorizontal,
  LuSearch,
  LuX,
} from "react-icons/lu";
import { MdOutlineFilterList } from "react-icons/md";
import { getExpandedData } from "../../data/data";
import { useNavigate } from "react-router-dom";
import "./DisbursementTable.css";

const DisbursementTable = () => {
  const navigate = useNavigate();
  const [tableData] = useState(getExpandedData());

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Column Visibility State
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
  const [columnSearch, setColumnSearch] = useState("");
  const dropdownRef = useRef(null);

  // --- NEW STATES FOR SAVED VIEWS & MODAL ---
  const [isSavedViewMenuOpen, setIsSavedViewMenuOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [newViewName, setNewViewName] = useState("");
  const [selectedViewId, setSelectedViewId] = useState("view1");
  const savedViewDropdownRef = useRef(null);

  // Mock data for the saved views list
  const [savedViews] = useState([
    { id: "view1", name: "My Loan View", isDefault: true },
    { id: "view2", name: "Priority Loans", isDefault: false },
    { id: "view3", name: "Submitted Loans", isDefault: false },
    { id: "view4", name: "Draft Applications", isDefault: false },
  ]);

  const [columns, setColumns] = useState([
    { id: "date", label: "Disbursement Date", visible: true },
    { id: "loanId", label: "Loan ID", visible: true },
    { id: "status", label: "Status", visible: true },
    { id: "applicant", label: "Applicant Name", visible: true },
    { id: "bank", label: "Bank Name", visible: true },
    { id: "sanctioned", label: "Sanctioned Amt", visible: true },
    { id: "verified", label: "Verified", visible: true },
    { id: "referral", label: "Referral %", visible: true },
    { id: "creditExec", label: "Credit Executive", visible: true },
    { id: "bankExec", label: "Bank Executive", visible: true },
  ]);

  // Helper to check if a column is visible
  const isVisible = (id) => columns.find((col) => col.id === id)?.visible;

  // Toggle specific column
  const toggleColumn = (id) => {
    setColumns(
      columns.map((col) =>
        col.id === id ? { ...col, visible: !col.visible } : col,
      ),
    );
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsColumnMenuOpen(false);
      }
      if (
        savedViewDropdownRef.current &&
        !savedViewDropdownRef.current.contains(event.target)
      ) {
        setIsSavedViewMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

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

  // Filter columns for the dropdown search
  const filteredColumns = columns.filter((col) =>
    col.label.toLowerCase().includes(columnSearch.toLowerCase()),
  );

  return (
    <div className="table-container">
      <div className="table-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search for Disbursement" />
          <span className="shortcut-key">
            <FaWindows /> Key
          </span>
        </div>
        <div className="action-buttons">
          <div className="saved-view-wrapper" ref={savedViewDropdownRef}>
            <div
              className={`btn-secondary ${isSavedViewMenuOpen ? "active" : ""}`}
              onClick={() => setIsSavedViewMenuOpen(!isSavedViewMenuOpen)}
            >
              <span>Saved View</span>
              <LuChevronDown className="btn-icon right" />
            </div>

            {isSavedViewMenuOpen && (
              <div className="saved-view-menu">
                <div className="saved-view-list">
                  {savedViews.map((view) => (
                    <label key={view.id} className="radio-option">
                      <input
                        type="radio"
                        name="savedViewGroup"
                        checked={selectedViewId === view.id}
                        onChange={() => setSelectedViewId(view.id)}
                      />
                      <span className="radio-label">{view.name}</span>
                      {view.isDefault && (
                        <span className="default-badge">Default View</span>
                      )}
                    </label>
                  ))}
                </div>
                <div className="dropdown-footer flex-start">
                  <button className="btn-solid-purple small">Apply</button>
                  <button
                    className="btn-text small"
                    onClick={() => setIsSavedViewMenuOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="btn-secondary">
            <span>Export All</span>
            <LuChevronDown className="btn-icon right" />
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="disbursement-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {isVisible("date") && (
                <th>
                  <div className="header-content">
                    Disbursement Date{" "}
                    <LuChevronsUpDown className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("loanId") && (
                <th>
                  <div className="header-content">
                    Loan ID <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("status") && (
                <th>
                  <div className="header-content">
                    Status <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("applicant") && (
                <th>
                  <div className="header-content">
                    Applicant Name <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("bank") && (
                <th>
                  <div className="header-content">
                    Bank Name <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("sanctioned") && (
                <th>
                  <div className="header-content">
                    Sanctioned Amt <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("verified") && (
                <th>
                  <div className="header-content">
                    Verified <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("referral") && (
                <th>
                  <div className="header-content">
                    Referral % <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("creditExec") && (
                <th>
                  <div className="header-content">
                    Credit Executive{" "}
                    <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {isVisible("bankExec") && (
                <th>
                  <div className="header-content">
                    Bank Executive <LuChevronsUpDown className="icon-action" />
                    <MdOutlineFilterList className="icon-action" />
                  </div>
                </th>
              )}
              {/* Settings Toggle Column */}
              <th className="column-toggle-th">
                <div className="column-toggle-wrapper" ref={dropdownRef}>
                  <button
                    className={`column-toggle-btn ${isColumnMenuOpen ? "active" : ""}`}
                    onClick={() => setIsColumnMenuOpen(!isColumnMenuOpen)}
                  >
                    <LuSlidersHorizontal size={16} />
                  </button>

                  {/* Dropdown Menu */}
                  {isColumnMenuOpen && (
                    <div className="column-dropdown-menu">
                      <div className="column-search-wrapper">
                        <LuSearch className="column-search-icon" />
                        <input
                          type="text"
                          placeholder="Search for Loans"
                          value={columnSearch}
                          onChange={(e) => setColumnSearch(e.target.value)}
                        />
                      </div>
                      <div className="column-list">
                        {filteredColumns.map((col) => (
                          <label key={col.id} className="column-list-item">
                            <input
                              type="checkbox"
                              checked={col.visible}
                              onChange={() => toggleColumn(col.id)}
                            />
                            <span>{col.label}</span>
                          </label>
                        ))}
                        {filteredColumns.length === 0 && (
                          <div className="no-results">No columns found</div>
                        )}
                      </div>

                      <div className="dropdown-footer flex-start">
                        <button
                          className="btn-solid-purple small"
                          onClick={() => {
                            setIsColumnMenuOpen(false);
                            setIsSaveModalOpen(true);
                          }}
                        >
                          Save View
                        </button>
                        <button
                          className="btn-text small"
                          onClick={() => setIsColumnMenuOpen(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} onClick={() => navigate(`./${row.baseId}`)}>
                <td>
                  <input type="checkbox" onClick={(e) => e.stopPropagation()} />
                </td>
                {isVisible("date") && <td>{row.disbursementDate}</td>}
                {isVisible("loanId") && (
                  <td className="text-purple">{row.loanId}</td>
                )}
                {isVisible("status") && (
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(row.status)}`}
                    >
                      • {row.status}
                    </span>
                  </td>
                )}
                {isVisible("applicant") && (
                  <td className="font-medium">{row.applicantName}</td>
                )}
                {isVisible("bank") && <td>{row.bankName}</td>}
                {isVisible("sanctioned") && (
                  <td>&#8377;{row.sanctionedAmount.toLocaleString("en-IN")}</td>
                )}
                {isVisible("verified") && (
                  <td>
                    {row.verifiedAmount
                      ? `₹${row.verifiedAmount.toLocaleString("en-In")}`
                      : "--"}
                  </td>
                )}
                {isVisible("referral") && (
                  <td>{row.referralPercentage.toFixed(4)}%</td>
                )}
                {isVisible("creditExec") && (
                  <td>
                    <div className="executive-cell">
                      <img
                        src={`https://ui-avatars.com/api/?name=${row.creditExecutive.name.replace(" ", "+")}&background=random&rounded=true&size=24`}
                        alt="avatar"
                        className="avatar"
                      />
                      {row.creditExecutive.name}
                    </div>
                  </td>
                )}
                {isVisible("bankExec") && (
                  <td>
                    <div className="executive-cell">
                      <img
                        src={`https://ui-avatars.com/api/?name=${row.bankExecutive.name.replace(" ", "+")}&background=random&rounded=true&size=24`}
                        alt="avatar"
                        className="avatar"
                      />
                      {row.bankExecutive.name}
                    </div>
                  </td>
                )}
                {/* <td className="sticky-empty-cell"></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        {/* ... [Keep your exact existing pagination footer code here] ... */}
        <div className="pagination-info">
          <span>
            Page{" "}
            <input
              type="number"
              value={currentPage}
              readOnly
              className="page-input"
            />{" "}
            of {totalPages}
          </span>
          {/* ... */}
        </div>
      </div>
      {isSaveModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Create Custom View</h3>
              <button
                className="close-btn"
                onClick={() => setIsSaveModalOpen(false)}
              >
                <LuX size={20} />
              </button>
            </div>
            <div className="modal-body">
              <label className="input-label">
                Enter View Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="modal-input"
                placeholder="Daily Review"
                value={newViewName}
                onChange={(e) => setNewViewName(e.target.value)}
              />
            </div>
            <div className="modal-actions">
              <button
                className="btn-outline"
                onClick={() => setIsSaveModalOpen(false)}
              >
                Cancel
              </button>
              <button className="btn-solid-purple">Create View</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisbursementTable;
