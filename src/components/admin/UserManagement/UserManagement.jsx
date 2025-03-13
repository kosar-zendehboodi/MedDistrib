import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useDarkMode } from "../../../context/DarkmodeContext";
import Modal from "../../../Ui/Modal";

const AccessTable = () => {
  const { isDarkMode } = useDarkMode();

  const [accessLevels, setAccessLevels] = useState([
    {
      id: 1,
      name: "مدیر",
      viewAbility: "دسترسی به همه بخش‌ها",
      editAbility: "مدیریت کامل",
      isActive: true,
    },
    {
      id: 2,
      name: "کاربر عادی",
      viewAbility: "فقط خواندن",
      editAbility: "ویرایش",
      isActive: false,
    },
    {
      id: 3,
      name: "تحلیلگر",
      viewAbility: "دیدن و جستجو",
      editAbility: "ویرایش و حذف",
      isActive: true,
    },
    {
      id: 4,
      name: "مهمان",
      viewAbility: "مشاهده و نمایش",
      editAbility: "هیچ‌کدام",
      isActive: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAccess, setNewAccess] = useState({
    name: "",
    viewAbility: "",
    editAbility: "",
    isActive: false,
  });
  const [editAccessId, setEditAccessId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newAccess.viewAbility || !newAccess.editAbility) {
      setErrorMessage("لطفاً توانایی دیدن و توانایی ویرایش را انتخاب کنید.");
      return;
    }

    if (editAccessId === null) {
      // افزودن سطح دسترسی جدید
      const newAccessData = { ...newAccess, id: Date.now() };
      setAccessLevels([...accessLevels, newAccessData]);
    } else {
      // ویرایش سطح دسترسی
      const updatedAccessLevels = accessLevels.map((access) =>
        access.id === editAccessId ? { ...access, ...newAccess } : access
      );
      setAccessLevels(updatedAccessLevels);
    }

    setNewAccess({
      name: "",
      viewAbility: "",
      editAbility: "",
      isActive: false,
    });
    setEditAccessId(null);
    setErrorMessage("");
    toggleModal();
  };

  const handleEdit = (access) => {
    setNewAccess(access);
    setEditAccessId(access.id);
    toggleModal();
  };

  const handleDelete = (accessId) => {
    const updatedAccessLevels = accessLevels.filter(
      (access) => access.id !== accessId
    );
    setAccessLevels(updatedAccessLevels);
  };

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">مدیریت سطوح دسترسی</h2>
        <button
          onClick={toggleModal}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          افزودن سطح دسترسی جدید
        </button>
      </div>

      {/* Modal for Adding/Editing Access */}
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        title={editAccessId === null ? "افزودن سطح دسترسی جدید" : "ویرایش سطح دسترسی"}
        isDarkMode={isDarkMode}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">نام سطح دسترسی</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newAccess.name}
              onChange={(e) => setNewAccess({ ...newAccess, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">توانایی دیدن</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newAccess.viewAbility}
              onChange={(e) => setNewAccess({ ...newAccess, viewAbility: e.target.value })}
              required
            >
              <option value="">انتخاب توانایی دیدن</option>
              <option value="دسترسی به همه بخش‌ها">دسترسی به همه بخش‌ها</option>
              <option value="فقط خواندن">فقط خواندن</option>
              <option value="دیدن و جستجو">دیدن و جستجو</option>
              <option value="مشاهده و نمایش">مشاهده و نمایش</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">توانایی ویرایش</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newAccess.editAbility}
              onChange={(e) => setNewAccess({ ...newAccess, editAbility: e.target.value })}
              required
            >
              <option value="">انتخاب توانایی ویرایش</option>
              <option value="مدیریت کامل">مدیریت کامل</option>
              <option value="ویرایش">ویرایش</option>
              <option value="ویرایش و حذف">ویرایش و حذف</option>
              <option value="هیچ‌کدام">هیچ‌کدام</option>
            </select>
          </div>

          {/* نمایش پیام خطا */}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              className=" px-4 py-2 bg-gray-500 text-white rounded  mr-2 cursor-pointer  "
              onClick={toggleModal}
            >
              بستن
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded mr-4 cursor-pointer"
            >
              {editAccessId === null ? "ذخیره" : "ویرایش"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Access Table */}
      <div className="overflow-x-auto">
        <table
          className={`min-w-full border border-gray-200 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <thead>
            <tr
              className={`text-gray-700 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"}`}
            >
              <th className="py-3 px-6 text-right">نام سطح دسترسی</th>
              <th className="py-3 px-6 text-right">توانایی دیدن</th>
              <th className="py-3 px-6 text-right">توانایی ویرایش</th>
              <th className="py-3 px-6 text-right">وضعیت فعال</th>
              <th className="py-3 px-6 text-right">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {accessLevels.map((access) => (
              <tr
                key={access.id}
                className={`border-b border-gray-200 hover:bg-gray-100 ${isDarkMode ? "hover:bg-gray-600" : ""}`}
              >
                <td className="py-3 px-6">{access.name}</td>
                <td className="py-3 px-6">{access.viewAbility}</td>
                <td className="py-3 px-6">{access.editAbility}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${access.isActive ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {access.isActive ? "فعال" : "غیرفعال"}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    className="text-blue-500 ml-4 hover:text-blue-700"
                    onClick={() => handleEdit(access)}
                  >
                    ویرایش
                  </button>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(access.id)}
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

export default AccessTable;
