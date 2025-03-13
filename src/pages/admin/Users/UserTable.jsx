import React, { useState } from "react";
import Modal from "../../../Ui/Modal";
import { Plus } from "lucide-react";
import Filter from "../../../Ui/Filter";
import { useDarkMode } from "../../../context/DarkmodeContext";
import { useSearchParams } from "react-router-dom";

const UserTable = () => {
  const { isDarkMode } = useDarkMode();
  const [search, setSearch] = useState(""); 
  const [users, setUsers] = useState([
    { id: 1, name: "علی رضایی", email: "ali@gmail.com", role: "ادمین", status: "فعال" },
    { id: 2, name: "سارا محمدی", email: "sara@gmail.com", role: "مد رپ", status: "غیرفعال" },
    { id: 3, name: "حسین عباسی", email: "hossein@gmail.com", role: "ادمین", status: "فعال" },
    { id: 4, name: "فاطمه حسینی", email: "fatemeh@gmail.com", role: "مد رپ", status: "فعال" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "" });
  const [editUserId, setEditUserId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("status") || "all";

  const toggleModal = () => setIsModalOpen(!isModalOpen); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUserId === null) {
      const newUserData = { ...newUser, id: Date.now() };
      setUsers([...users, newUserData]);
    } else {
      const updatedUsers = users.map((user) =>
        user.id === editUserId ? { ...user, ...newUser } : user
      );
      setUsers(updatedUsers);
    }
    setNewUser({ name: "", email: "", role: "", status: "" }); 
    setEditUserId(null); 
    toggleModal(); 
  };

  const handleEdit = (user) => {
    setNewUser(user);
    setEditUserId(user.id); 
    toggleModal();
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  
  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) || // جستجو بر اساس نام
        user.email.toLowerCase().includes(search.toLowerCase()) // جستجو بر اساس ایمیل
    )
    .filter((user) => filterStatus && filterStatus !== "all" ? user.status === filterStatus : true); // فیلتر وضعیت

  // highlight text searching 
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-300 font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">مدیریت کاربران</h2>
       
      </div>

      {/* Modal for Adding/Editing User */}
      <Modal open={isModalOpen} onClose={toggleModal} title={editUserId === null ? "افزودن کاربر جدید" : "ویرایش کاربر"} isDarkMode={isDarkMode}>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">نام</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ایمیل</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نقش</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
            >
              <option value="ادمین">ادمین</option>
              <option value="مد رپ">مد رپ</option>
              <option value="مدیر سیستم">مدیر سیستم</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">وضعیت</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newUser.status}
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
              required
            >
              <option value="فعال">فعال</option>
              <option value="غیرفعال">غیرفعال</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded ml-4 cursor-pointer"
              onClick={toggleModal}
            >
              بستن
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
              {editUserId === null ? "ذخیره" : "ویرایش"}
            </button>
          </div>
        </form>
      </Modal>

      {/* جستجو */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجو بر اساس نام یا ایمیل..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // تغییر جستجو
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
      </div>

      {/* status filter*/}
      <div className="flex justify-between">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "همه" },
          { value: "فعال", label: "فعال" },
          { value: "غیرفعال", label: "غیرفعال" },
        ]}
      />
       <button
          onClick={toggleModal}
          className="flex items-center m-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          افزودن کاربر جدید
        </button>
        </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className={`min-w-full border border-gray-200 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <thead>
            <tr className={`text-gray-700 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}>
              <th className="py-3 px-6 text-right">نام</th>
              <th className="py-3 px-6 text-right">ایمیل</th>
              <th className="py-3 px-6 text-right">نقش</th>
              <th className="py-3 px-6 text-right">وضعیت</th>
              <th className="py-3 px-6 text-right">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className={`border-b border-gray-200 hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-600' : ''}`}>
                <td className="py-3 px-6">{highlightText(user.name, search)}</td>
                <td className="py-3 px-6">{highlightText(user.email, search)}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${user.status === 'فعال' ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    className="text-blue-500 ml-4 hover:text-blue-700"
                    onClick={() => handleEdit(user)} 
                  >
                    ویرایش
                  </button>
                  <button 
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(user.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
