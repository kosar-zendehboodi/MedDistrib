import React from "react";
import { Popover } from "@headlessui/react";
import { ArrowDownCircleIcon, Bell, User, Settings, LogOut, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../../context/DarkmodeContext"; // وارد کردن hook برای استفاده از context

const Header = ({ role = "admin", username = "John Doe" }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // گرفتن وضعیت دارک مود از context

  const profileOptions = [
    { name: "پروفایل", href: "#", icon: User },
    { name: "تنظیمات", href: "#", icon: Settings },
    { name: "خروج", href: "#", icon: LogOut },
  ];

  return (
    <header className={`p-2 flex items-center justify-between border border-gray-200/95 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div>
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {role === "admin" ? "پنل ادمین" : "پنل مد رپ"}
        </h3>
      </div>

      {/* Search Bar */}
      <form className="max-w-md mx-auto w-96">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className={`block w-full p-2.5 pl-10 text-sm ${isDarkMode ? 'text-white bg-gray-800' : 'text-gray-900 bg-gray-100'} border border-gray-300 rounded-lg focus:outline-none`}
            placeholder="جستجو..."
            required
          />
          <button
            type="submit"
            className={`absolute right-2.5 bottom-1.5 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-1.5 rounded-lg text-sm`}
          >
            جستجو
          </button>
        </div>
      </form>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4 space-x-reverse">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-400" />
          ) : (
            <Moon className="h-6 w-6 text-gray-900" />
          )}
        </button>

        {/* Notification Icon */}
        <div className="relative cursor-pointer ml-5">
          <Bell className="w-6 h-6 text-gray-600 dark:text-black" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Profile Menu */}
        <Popover className="relative ml-6 text-center ">
          <Popover.Button className={`flex items-center gap-2 p-2 border border-gray-200/95 rounded-full focus:outline-none ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            <p className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{username}</p>
            <User className={`${isDarkMode ? 'text-white' : 'text-black'} h-5 w-5`} />
            <ArrowDownCircleIcon className={`${isDarkMode ? 'text-white' : 'text-black'} h-5 w-5`} />
          </Popover.Button>
          <Popover.Panel className={`absolute  mt-2 w-40 border border-gray-200/95 rounded-md shadow-lg z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {profileOptions.map((option) => (
              <a
                key={option.name}
                href={option.href}
                className={`flex items-center px-4 py-2 text-sm ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}
              >
                <option.icon className="h-5 w-5 ml-2" />
                {option.name}
              </a>
            ))}
          </Popover.Panel>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
