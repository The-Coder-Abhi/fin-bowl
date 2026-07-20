export const disbursementsData = [
  {
    id: "1",
    disbursementDate: "2024-04-30",
    loanId: "LN002-24-1001",
    loanType:"Personal Loan",
    status: "Draft",
    applicantName: "Arjun Mehta",
    bankName: "HDFC Bank",
    sanctionedAmount: 7500000,
    verifiedAmount: 7000000,
    referralPercentage: 0.15,
    creditExecutive: { name: "Arjun Mehta", avatarUrl: "/avatars/arjun.jpg" },
    bankExecutive: { name: "Siddharth", avatarUrl: "/avatars/siddharth.jpg" }
    ,
    
    applicants: [
      { id: "a1", name: "Rahul Verma", type: "Applicant", email: "rahul.verma@gmail.com", phone: "+91 9876543210" },
      { id: "a2", name: "Priya Sharma", type: "Co-Applicant", email: "priya.sharma@gmail.com", phone: "+91 9123456789" },
      { id: "a3", name: "Neha Gupta", type: "Co-Applicant", email: "neha.gupta@gmail.com", phone: "+91 9988776655" }
    ],

    loanDetails: {
      stage: "Lead",
      sanctionedDate: "22/11/2024",
      source: "Ramesh Kumar"
    },

    disbursementSchedule: [
      { id: "DB002-24-1001", date: "22-11-2024", amount: 480000, verifiedAmount: 480000, utr: "426715893247", tranche: "Full", status: "Processed" },
      { id: "DB002-24-1002", date: "23-11-2024", amount: 525000, verifiedAmount: 525000, utr: "426715893248", tranche: "Full", status: "Processed" },
      { id: "DB002-24-1003", date: "24-11-2024", amount: 600000, verifiedAmount: 600000, utr: "426715893249", tranche: "Full", status: "Processed" },
      { id: "DB002-24-1004", date: "25-11-2024", amount: 675000, verifiedAmount: 700000, utr: "426715893250", tranche: "Full", status: "Processed" }
    ],

    commissions: {
      total: 28640.00,
      breakdown: [
        { id: "c1", partyName: "Amit Sharma", netPercent: 0.7500, grossPercent: 0.7500, amount: 3400.00, invoiceNo: "RMS-INV-2026-00156", status: "Paid" },
        { id: "c2", partyName: "Anjali Mehta", netPercent: 0.8500, grossPercent: 1.2500, amount: 4200.00, invoiceNo: "RMS-INV-2026-00157", status: "Paid" },
        { id: "c3", partyName: "Ravi Kumar", netPercent: 0.9000, grossPercent: 1.5000, amount: 5000.00, invoiceNo: "RMS-INV-2026-00158", status: "Paid" },
        { id: "c4", partyName: "Sneha Iyer", netPercent: 1.0000, grossPercent: 2.0000, amount: 6300.00, invoiceNo: "RMS-INV-2026-00159", status: "Paid" }
      ]
    },

    brokers: {
      totalReferralFee: 8640,
      breakdown: [
        { id: "b1", name: "Amit Sharma", code: "CON-001", type: "Aggregator", commissionPercent: 0.7500, fee: 3020.00, poNo: "RMS-PO-2026-00089", poDate: "22-11-2024", status: "Paid" },
        { id: "b2", name: "Ravi Patel", code: "CON-002", type: "Sub-connector", commissionPercent: 0.8500, fee: 2875.00, poNo: "RMS-PO-2026-00090", poDate: "23-11-2024", status: "Paid" },
        { id: "b3", name: "Amit Sharma", code: "CON-001", type: "Aggregator", commissionPercent: 0.9000, fee: 2980.00, poNo: "RMS-PO-2026-00091", poDate: "24-11-2024", status: "Paid" },
        { id: "b4", name: "Sita Verma", code: "CON-003", type: "Aggregator", commissionPercent: 1.0000, fee: 3150.00, poNo: "RMS-PO-2026-00091", poDate: "24-11-2024", status: "Paid" }
      ]
    },

    notes: "Party applied for a home loan for property purchase in Chennai. Documents verified successfully and income proof has been submitted. Awaiting final bank approval and disbursement confirmation.",

    documents: [
      { id: "d1", fileName: "Invoices.pdf", size: "800 KB" },
      { id: "d2", fileName: "Invoices.pdf", size: "800 KB" },
      { id: "d3", fileName: "Invoices.pdf", size: "800 KB" },
      { id: "d4", fileName: "Invoices.pdf", size: "800 KB" }
    ]
  },
  {
    id: "2",
    disbursementDate: "2024-09-30",
    loanId: "LN003-24-1002",
    loanType:"Home Loan",
    status: "Submitted",
    applicantName: "Mohit Agarwal",
    bankName: "ICICI Bank",
    sanctionedAmount: 12000000,
    verifiedAmount: null, // Represented as '--' in UI
    referralPercentage: 0.25,
    creditExecutive: { name: "Mohit Agarwal", avatarUrl: "/avatars/mohit.jpg" },
    bankExecutive: { name: "Tanvi", avatarUrl: "/avatars/tanvi.jpg" }
  },
  {
    id: "3",
    disbursementDate: "2024-05-12",
    loanId: "LN004-24-1003",
    loanType:"Auto Loan",
    status: "Submitted",
    applicantName: "Priya Singh",
    bankName: "Axis Bank",
    sanctionedAmount: 15000000,
    verifiedAmount: null,
    referralPercentage: 0.35,
    creditExecutive: { name: "Priya Singh", avatarUrl: "/avatars/priya.jpg" },
    bankExecutive: { name: "Deepa", avatarUrl: "/avatars/deepa.jpg" }
  },
  {
    id: "4",
    disbursementDate: "2024-01-15",
    loanId: "LN005-24-1004",
    loanType:"Business Loan",
    status: "Submitted",
    applicantName: "Simran Anand",
    bankName: "State Bank of India",
    sanctionedAmount: 22000000,
    verifiedAmount: null,
    referralPercentage: 0.45,
    creditExecutive: { name: "Simran Anand", avatarUrl: "/avatars/simran.jpg" },
    bankExecutive: { name: "Suresh", avatarUrl: "/avatars/suresh.jpg" }
  },
  {
    id: "5",
    disbursementDate: "2024-02-20",
    loanId: "LN006-24-1005",
    loanType:"Personal Loan",
    status: "Submitted",
    applicantName: "Ravi Sharma",
    bankName: "Kotak Mahindra Bank",
    sanctionedAmount: 30000000,
    verifiedAmount: null,
    referralPercentage: 0.55,
    creditExecutive: { name: "Ravi Sharma", avatarUrl: "/avatars/ravi.jpg" },
    bankExecutive: { name: "Rahul", avatarUrl: "/avatars/rahul.jpg" }
  },
  {
    id: "6",
    disbursementDate: "2024-02-20",
    loanId: "LN007-24-1006",
    loanType:"Home Loan",
    status: "Submitted",
    applicantName: "Sneha Joshi",
    bankName: "Punjab National Bank",
    sanctionedAmount: 40000000,
    verifiedAmount: null,
    referralPercentage: 0.65,
    creditExecutive: { name: "Sneha Joshi", avatarUrl: "/avatars/sneha.jpg" },
    bankExecutive: { name: "Pooja", avatarUrl: "/avatars/pooja.jpg" }
  },
  {
    id: "7",
    disbursementDate: "2024-02-20",
    loanId: "LN001-24-1004",
    loanType:"Auto Loan",
    status: "Verified",
    applicantName: "Vikram Desai",
    bankName: "Canara Bank",
    sanctionedAmount: 18000000,
    verifiedAmount: 1578901,
    referralPercentage: 0.75,
    creditExecutive: { name: "Vikram Desai", avatarUrl: "/avatars/vikram.jpg" },
    bankExecutive: { name: "Manish", avatarUrl: "/avatars/manish.jpg" }
  },
  {
    id: "8",
    disbursementDate: "2024-02-20",
    loanId: "LN008-24-1007",
    loanType:"Business Loan",
    status: "Audited",
    applicantName: "Anjali Rao",
    bankName: "Bank of Baroda",
    sanctionedAmount: 20000000,
    verifiedAmount: 1689012,
    referralPercentage: 0.85,
    creditExecutive: { name: "Anjali Rao", avatarUrl: "/avatars/anjali.jpg" },
    bankExecutive: { name: "Kavita", avatarUrl: "/avatars/kavita.jpg" }
  },
  {
    id: "9",
    disbursementDate: "2024-02-20",
    loanId: "LN009-24-1008",
    loanType:"Personal Loan",
    status: "Audited",
    applicantName: "Karan Iyer",
    bankName: "Union Bank of India",
    sanctionedAmount: 25000000,
    verifiedAmount: 1700123,
    referralPercentage: 0.95,
    creditExecutive: { name: "Karan Iyer", avatarUrl: "/avatars/karan.jpg" },
    bankExecutive: { name: "Ankit", avatarUrl: "/avatars/ankit.jpg" }
  },
  {
    id: "10",
    disbursementDate: "2024-02-20",
    loanId: "LN010-24-1009",
    loanType:"Home Loan",
    status: "Verified",
    applicantName: "Neha Gupta",
    bankName: "IDFC FIRST Bank",
    sanctionedAmount: 15000000,
    verifiedAmount: 1811234,
    referralPercentage: 1.15,
    creditExecutive: { name: "Neha Gupta", avatarUrl: "/avatars/neha.jpg" },
    bankExecutive: { name: "Ritika", avatarUrl: "/avatars/ritika.jpg" }
  }
];

//function to generate 100 records
export const getExpandedData = () => {
  let expandedData = [];
  
  // Loop 10 times
  for (let i = 0; i < 10; i++) {
    const batchedRecords = disbursementsData.map((record) => {
      return {
        ...record,
        baseId: record.id,
        // Append the loop index to guarantee unique React keys
        id: `${record.id}-${i}`, 
        // Slightly modify the loanId so the UI looks dynamic
        loanId: `${record.loanId}-${i}`, 
      };
    });
    
    expandedData = [...expandedData, ...batchedRecords];
  }
  
  return expandedData;
};

// Array of 100 items 
const allTransactions = getExpandedData();

//get data by id
export const  getRecordById = (id) => {
  return disbursementsData.find(item => item.id === id);
}

