import { HashRouter, Route, Routes } from "react-router-dom";
import Disbursement from "./pages/Disbursement/Disbursement";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import RMS from "./pages/RMS/RMS";
import Invoice from "./pages/Invoice/Invoice";
import LoanDetailsView from "./pages/LoanDetailsView/LoanDetailsView";
import { ActivityProvider } from "./context/ActivityContext";

function App() {
  return (
    <ActivityProvider>
      <HashRouter>
        <div className="App">
          <Sidebar />

          <Routes>
            <Route path="/" element={<RMS />} />
            <Route path="/finance" element={<div>Finance Page</div>} />
            <Route path="/sales-crm" element={<div>Sales CRM Page</div>} />

            {/* Nested RMS Routes - Make sure RMS.jsx includes an <Outlet /> */}
            <Route path="/rms" element={<RMS />}>
              <Route index element={<Disbursement />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="disbursement" element={<Disbursement />} />
              <Route path="disbursement/:id" element={<LoanDetailsView />} />
              <Route path="invoices" element={<Invoice />} />
              <Route path="po" element={<div>PO</div>} />
              <Route path="reports" element={<div>RMS Reports Page</div>} />
            </Route>

            <Route path="/compliance" element={<div>Compliance Page</div>} />
            <Route path="/vendors" element={<div>Vendors Page</div>} />
            <Route path="/ai" element={<div>AI Page</div>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            
          </Routes>
        </div>
      </HashRouter>
    </ActivityProvider>
  );
}

export default App;