import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import AppLayout from "./Ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/admin/Users/Users";
import Drugs from "./pages/admin/Drugs/Drugs";
import Orders from "./pages/admin/Orders/Orders";
import DoctorVisits from "./pages/medrep/Doctor/Doctor";
import SalesPerformance from "./pages/medrep/Sales/Sales";
import Feedback from "./pages/medrep/Feedback/Feedback";
import Regions from "./pages/admin/Regions/Regions";
import {  useDarkMode } from "./context/DarkmodeContext";
function App() {
  const [role, setRole] = useState("admin");
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AppLayout role={role} />}>
        <Route path="dashboard" element={<Dashboard role={role} />} />
        <Route path="users" element={<Users />} />
        <Route path="Regions" element={<Regions />} />
        <Route path="drugs" element={<Drugs />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      <Route path="/medrep" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="doctor-visit" element={<DoctorVisits />} />
        <Route path="sales-performance" element={<SalesPerformance />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
    
  );
}

export default App;
