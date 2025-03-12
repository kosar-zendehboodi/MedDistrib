import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useDarkMode } from "../../../context/DarkmodeContext";
import Modal from "../../../Ui/Modal";

const DrugTable = () => {
  const { isDarkMode } = useDarkMode();

  const [drugs, setDrugs] = useState([
    {
      id: 1,
      name: "داروی A",
      companyName: "شرکت الف",
      productCode: "P123",
      code: "D456",
      price: 1000,
      status: "موجود",
    },
    {
      id: 2,
      name: "داروی B",
      companyName: "شرکت ب",
      productCode: "P124",
      code: "D457",
      price: 2000,
      status: "موجود",
    },
    {
      id: 3,
      name: "داروی C",
      companyName: "شرکت ج",
      productCode: "P125",
      code: "D458",
      price: 1500,
      status: "ناموجود",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDrug, setNewDrug] = useState({
    name: "",
    companyName: "",
    productCode: "",
    code: "",
    price: "",
    status: "",
  });
  const [editDrugId, setEditDrugId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (e) => {
    e.preventDefault();

    // بررسی اینکه وضعیت دارو انتخاب شده باشد
    if (!newDrug.status) {
      setErrorMessage("لطفاً وضعیت دارو را انتخاب کنید.");
      return;
    }

    if (editDrugId === null) {
      // افزودن داروی جدید
      const newDrugData = { ...newDrug, id: Date.now() };
      setDrugs([...drugs, newDrugData]);
    } else {
      // ویرایش دارو
      const updatedDrugs = drugs.map((drug) =>
        drug.id === editDrugId ? { ...drug, ...newDrug } : drug
      );
      setDrugs(updatedDrugs);
    }

    setNewDrug({
      name: "",
      companyName: "",
      productCode: "",
      code: "",
      price: "",
      status: "",
    });
    setEditDrugId(null);
    setErrorMessage(""); // پاک کردن پیام خطا
    toggleModal();
  };

  const handleEdit = (drug) => {
    setNewDrug(drug);
    setEditDrugId(drug.id);
    toggleModal();
  };

  const handleDelete = (drugId) => {
    const updatedDrugs = drugs.filter((drug) => drug.id !== drugId);
    setDrugs(updatedDrugs);
  };

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">مدیریت داروها</h2>
        <button
          onClick={toggleModal}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <Plus className="w-4 h-4 mr-2" />
          افزودن داروی جدید
        </button>
      </div>

      {/* Modal for Adding/Editing Drug */}
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        title={editDrugId === null ? "افزودن داروی جدید" : "ویرایش دارو"}
        isDarkMode={isDarkMode}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">نام دارو</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.name}
              onChange={(e) => setNewDrug({ ...newDrug, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نام شرکت</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.companyName}
              onChange={(e) =>
                setNewDrug({ ...newDrug, companyName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">کد محصول در شرکت</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.productCode}
              onChange={(e) =>
                setNewDrug({ ...newDrug, productCode: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">کد محصول</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.code}
              onChange={(e) => setNewDrug({ ...newDrug, code: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">قیمت</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.price}
              onChange={(e) =>
                setNewDrug({ ...newDrug, price: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">وضعیت</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newDrug.status}
              onChange={(e) =>
                setNewDrug({ ...newDrug, status: e.target.value })
              }
              required
            >
              <option value="">انتخاب وضعیت</option>
              <option value="موجود">موجود</option>
              <option value="ناموجود">ناموجود</option>
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
              {editDrugId === null ? "ذخیره" : "ویرایش"}
            </button>
          </div>
        </form>
      </Modal>

      {/* Drug Table */}
      <div className="overflow-x-auto">
        <table
          className={`min-w-full border border-gray-200 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <thead>
            <tr
              className={`text-gray-700 ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"
              }`}
            >
              <th className="py-3 px-6 text-right">نام دارو</th>
              <th className="py-3 px-6 text-right">نام شرکت</th>
              <th className="py-3 px-6 text-right">کد محصول در شرکت</th>
              <th className="py-3 px-6 text-right">کد محصول</th>
              <th className="py-3 px-6 text-right">قیمت</th>
              <th className="py-3 px-6 text-right">وضعیت</th>
              <th className="py-3 px-6 text-right">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr
                key={drug.id}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  isDarkMode ? "hover:bg-gray-600" : ""
                }`}
              >
                <td className="py-3 px-6">{drug.name}</td>
                <td className="py-3 px-6">{drug.companyName}</td>
                <td className="py-3 px-6">{drug.productCode}</td>
                <td className="py-3 px-6">{drug.code}</td>
                <td className="py-3 px-6">{drug.price}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      drug.status === "موجود" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {drug.status}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    className="text-blue-500 ml-4 hover:text-blue-700"
                    onClick={() => handleEdit(drug)}
                  >
                    ویرایش
                  </button>
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(drug.id)}
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

export default DrugTable;
