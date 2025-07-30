import React, { useState } from 'react';
import Navbar from '../MainDashboardPages/Navbar';
import SideBar from '../homecomponent/SideBar';

const Transaction = () => {
      const [activeTab, setActiveTab] = useState("All");
      
  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Withdraw", count: 213 },
    { name: "Trade", count: 22 },
  ];

  const transactions = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      subType: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      time: "02:48 PM",
      type: "INR Withdraw",
      subType: "Wire Transfer",
      amount: "- ₹81,123.10",
      status: "Processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-04",
      time: "09:21 AM",
      type: "Buy",
      subType: "",
      amount: "+ 12.48513391 BTC",
      status: "Cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "01:32 PM",
      type: "Sell",
      subType: "",
      amount: "- 0.36401628 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-03",
      time: "09:02 AM",
      type: "BTC Deposit",
      subType: "",
      amount: "+ 4.13946104 BTC",
      status: "Completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-01",
      time: "01:56 PM",
      type: "BTC Withdraw",
      subType: "",
      amount: "- 10.00000000 BTC",
      status: "Completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-gray-400";
      case "Processing":
        return "bg-yellow-400";
      case "Completed":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

    return (
       
            
      <div className='flex'>
        <SideBar></SideBar>
               <div className=" w-full mx-auto">
              <Navbar></Navbar>
     <div className='max-w-6xl mx-auto mt-5'>
       {/* Tabs */}
      <div className="flex flex-wrap gap-3  items-center mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              activeTab === tab.name
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.name} <span className="ml-1 text-xs">({tab.count})</span>
          </button>
        ))}
        <button className="ml-auto bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full min-w-[600px] text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{tx.id}</td>
                <td className="p-3">
                  <div>{tx.date}</div>
                  <div className="text-xs text-gray-500">{tx.time}</div>
                </td>
                <td className="p-3">
                  <div>{tx.type}</div>
                  {tx.subType && (
                    <div className="text-xs text-gray-500">{tx.subType}</div>
                  )}
                </td>
                <td className="p-3">{tx.amount}</td>
                <td className="p-3">
                  <span
                    className={`text-white text-xs px-2 py-1 rounded-full ${getStatusColor(
                      tx.status
                    )}`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
    </div>

      </div>
       
    );
};

export default Transaction;