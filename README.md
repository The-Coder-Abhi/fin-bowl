Fin-Bowl 🥣 | Loan Management Dashboard

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-blue?style=for-the-badge)](https://the-coder-abhi.github.io/fin-bowl/#/rms/disbursement)

A modern, responsive React web application designed to handle financial operations, including loan disbursements, invoices, and record management (RMS). This project was built as a frontend development assignment to demonstrate routing, state management, and component architecture.


![Fin-Bowl Dashboard Overview](./src/assets/img/FinBowl%201.png)

## 🎥 Video Demonstration

<video src="[src/assets/Demo/FinBowl-Demo-Vid.mp4](https://github.com/The-Coder-Abhi/fin-bowl/raw/main/src/assets/Demo/FinBowl-Demo-Vid.mp4)" width="100%" controls="controls" muted="muted" autoplay="autoplay" loop="loop">
  Your browser does not support the video tag.
</video>

🚀 Live Demo
View the Live Dashboard Here
[View the Live Dashboard Here](https://the-coder-abhi.github.io/fin-bowl/#/rms/disbursement)

🛠️ Tech Stack
Frontend Framework: React.js

Routing: React Router v6 (HashRouter optimized for static hosting)

Deployment: GitHub Pages (gh-pages)

Tooling: Create React App (CRA)

✨ Key Features
Comprehensive RMS (Record Management System): A dedicated hub for managing internal dashboard metrics.

Disbursement Tracking: View and manage loan disbursements, complete with dynamic routing for individual loan detail views.

Financial Operations: Navigate seamlessly between Invoices, Purchase Orders (POs), and Financial Reports.

Stable Routing Architecture: Utilizes HashRouter to ensure stable URLs and eliminate 404 errors on page refreshes when hosted on GitHub Pages.

Modular Component Structure: Codebase is broken down into reusable components (e.g., Sidebar, Header, DisbursementTable) for high maintainability.

## 📸 Feature Showcase

<table>
  <tr>
    <td valign="top" width="50%">
      <img src="./src/assets/img/FinBowl 2.png" alt="Fin-Bowl applicant details page with side navigation" />
      <br>
      <b>Applicant Details Dashboard</b>: <i>Features top-level KPI summary tiles and a sticky side navigation menu for rapid jumping between specific loan sections.</i>
    </td>
    <td valign="top" width="50%">
      <img src="./src/assets/img/FinBowl 3.png" alt="Fin-Bowl nested accordion components" />
      <br>
      <b>Structured Data Accordions</b>: <i>Organizes complex, nested data tables (like disbursements) within collapsible accordion panels to reduce visual clutter.</i>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%">
      <img src="./src/assets/img/FinBowl 4.png" alt="Activity Log panel overlay" />
      <br>
      <b>Activity Log Overlay</b>: <i>A context-driven side panel that slides in to display chronological loan updates, status changes, and modifications.</i>
    </td>
    <td valign="top" width="50%">
      <img src="./src/assets/img/FinBowl 5.png" alt="Active advisory group dropdown menu in header" />
      <br>
      <b>Global Header Navigation</b>: <i>A sticky top header providing quick access to primary routing modules and active advisory group dropdown selections.</i>
    </td>
  </tr>
</table>

💻 Local Development Setup
To run this project locally on your machine, follow these steps:
1. Clone the repository
   ```bash
   git clone https://github.com/The-Coder-Abhi/fin-bowl.git
   
2. Navigate to the project directory
    ```bash 
   cd fin-bowl
    
3. Install dependencies
   ```bash
   npm install
   
4. Start the development server
   ```bash
   npm start
   
The application will automatically open in your default browser at http://localhost:3000.

📦 Deployment
This project is configured to build and deploy automatically to GitHub Pages.

To deploy a new version, run the following command in your terminal:
npm run deploy

👨‍💻 Author
Abhishek Shelar

GitHub: @The-Coder-Abhi
