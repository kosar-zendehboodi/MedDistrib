import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Header from "../components/common/Header/Header";
import { useDarkMode } from "../context/DarkmodeContext";

const AppLayout = ({ role = "admin" }) => {
  const { isDarkMode } = useDarkMode();
  
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // فعال کردن دارک مود
    } else {
      document.documentElement.classList.remove("dark"); // غیرفعال کردن دارک مود
    }
  }, [isDarkMode]);

  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-900 text-white flex h-screen w-screen"
          : "bg-white text-black flex h-screen w-screen"
      }
    >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto max-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
