// src/components/Dashboard.jsx
import React from "react";
import AdminDashboard from "../components/admin/AdminDashboard/AdminDashboard";
import MedRepDashboard from "../components/medrep/MedRepDashboard/MedRepDashboard";
import { useDarkMode } from "../context/DarkmodeContext";

const Dashboard = ({ role = "admin" }) => {
  const { isDarkMode } = useDarkMode(); // گرفتن وضعیت دارک مود

  return (
    <div
      className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
    >
      {role === "admin" ? (
        <AdminDashboard />
      ) : role === "medrep" ? (
        <MedRepDashboard />
      ) : (
        <div> رول تعریف نشده </div>
      )}
    </div>
  );
};

export default Dashboard;
