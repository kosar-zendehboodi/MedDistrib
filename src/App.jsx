import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import AppLayout from "./Ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/admin/Users/Users";
import Drugs from "./pages/admin/Drugs/Drugs";
import Product from "./pages/admin/Product/Product";
import DoctorVisits from "./pages/medrep/Doctor/Doctor";
import SalesPerformance from "./pages/medrep/Sales/Sales";
import Feedback from "./pages/medrep/Feedback/Feedback";
import Regions from "./pages/admin/Regions/Regions";
import ProfilePage from "./pages/admin/Profile/Prodileuser";
import Pharmacies from "./pages/admin/Pharmcies/Pharmacies";
// import Reports from "./pages/admin/Report/Reports";
import RolesPermissions from "./pages/admin/Rolepermission/Rolepermissions";
import MedRepsManagement from "./pages/admin/Medreps/Medreps";
import Notifications from "./pages/admin/Notifications/Notifications";
import Settings from "./pages/admin/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/admin" element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Profile" element={<ProfilePage />} />
        <Route path="users" element={<Users />} />
        <Route path="regions" element={<Regions />} />
        <Route path="drugs" element={<Drugs />} />
        <Route path="product" element={<Product />} />
        <Route path="pharmacies" element={<Pharmacies />} />
        <Route path="roles-permissions" element={<RolesPermissions />} />
        <Route path="medreps" element={<MedRepsManagement />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
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
