import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  ClipboardList,
  Store,
  Map,
  ShoppingCart,
  LogOut,
  StoreIcon,
} from "lucide-react";
import { useDarkMode } from "../../../context/DarkmodeContext"; // وارد کردن useDarkMode برای استفاده از وضعیت دارک مود

const Sidebar = ({ role = "admin" }) => {
  const { isDarkMode } = useDarkMode(); // گرفتن وضعیت دارک مود

  const adminLinks = [
    {
      key: "Dashboard",
      name: "داشبورد",
      path: "/admin/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      key: "ProfileUser",
      name: "پروفایل کاربری",
      path: "/admin/profile",
      icon: <User className="w-5 h-5" />,
    },
    {
      key: "Users",
      name: "کاربران",
      path: "/admin/users",
      icon: <User className="w-5 h-5" />,
    },
    {
      key: "AreaAdmin",
      name: "مناطق",
      path: "/admin/Regions",
      icon: <Map className="w-5 h-5" />,
    },
    {
      key: "Drugs",
      name: "دارو",
      path: "/admin/drugs",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      key: "Orders",
      name: "سفارشات",
      path: "/admin/orders",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
  ];

  const medrepLinks = [
    {
      key: "Dashboard",
      name: "داشبورد",
      path: "/medrep/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      key: "Area",
      name: "منطقه",
      path: "/medrep/area",
      icon: <User className="w-5 h-5" />,
    },
    {
      key: "Doctor Visits",
      name: "پزشک",
      path: "/medrep/doctor-visit",
      icon: <User className="w-5 h-5" />,
    },
    {
      key: "Sales Performance",
      name: "فروش",
      path: "/medrep/sales-performance",
      icon: <ClipboardList className="w-5 h-5" />,
    },
    {
      key: "pharamacy",
      name: "داروخانه",
      path: "/medrep/pharmacy",
      icon: <StoreIcon className="w-5 h-5" />,
    },
    {
      key: "Feedback",
      name: "بازخورد",
      path: "/medrep/feedback",
      icon: <ShoppingCart className="w-5 h-5" />,
    },
  ];

  const links = role === "admin" ? adminLinks : medrepLinks;

  return (
    <div
      className={`h-full w-80 shadow-lg flex flex-col p-4 border ${
        isDarkMode
          ? "bg-gray-800 text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        PharmaTrack
      </div>
      <nav className="flex-1">
        {links.map((link) => (
          <NavLink
            key={link.key}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-4 rounded-lg my-2 ${
                isActive
                  ? "bg-blue-200 text-white dark:bg-blue-200 dark:text-white"
                  : "text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-200"
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <NavLink
          to="/auth"
          className="flex items-center gap-3 py-2 px-4 rounded-lg text-red-500 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-600"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
