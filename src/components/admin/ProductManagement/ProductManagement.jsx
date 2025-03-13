import React, { useState, useEffect } from "react";
import Modal from "../../../Ui/Modal";
import Filter from "../../../Ui/Filter";
import { useSearchParams } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "سفارش اول", customer: "مشتری ۱", status: "تحویل داده شده" },
    { id: 2, name: "سفارش دوم", customer: "مشتری ۲", status: "در حال بررسی" },
    { id: 3, name: "سفارش سوم", customer: "مشتری ۳", status: "لغو شده" },
    { id: 4, name: "سفارش چهارم", customer: "مشتری ۴", status: "تحویل داده شده" },
  ]);
  const [search, setSearch] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("status") || "all";

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const handleAddProduct = (product) => {
    const updatedOrders = [
      ...orders,
      {
        ...product,
        id: orders.length + 1,
        status: "در حال بررسی",
        customer: "مشتری جدید",
      },
    ];
    setOrders(updatedOrders);
  };

  const filteredOrders = orders
    .filter(
      (order) =>
        order.name.toLowerCase().includes(search.toLowerCase()) ||
        order.customer.toLowerCase().includes(search.toLowerCase())
    )
    .filter((order) =>
      filterStatus && filterStatus !== "all" ? order.status === filterStatus : true
    );

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-amber-300 font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "تحویل داده شده":
        return "text-green-600";
      case "در حال بررسی":
        return "text-yellow-600";
      case "لغو شده":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجو بر اساس نام یا مشتری..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
      </div>

      <div className="flex justify-between">
        <Filter
          filterField="status"
          options={[
            { value: "all", label: "همه" },
            { value: "delivered", label: "تحویل داده شده" },
            { value: "reviewing", label: "در حال بررسی" },
            { value: "cancelled", label: "لغو شده" },
          ]}
        />
        <div className="mt-4">
          <button
            onClick={handleOpenModal}
            className="px-4 m-2 py-2 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors"
          >
            افزودن محصول جدید
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4 text-sm text-right">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">شناسه</th>
              <th className="p-3">نام سفارش</th>
              <th className="p-3">مشتری</th>
              <th className="p-3">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200/95 hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{highlightText(order.name, search)}</td>
                <td className="p-3">{highlightText(order.customer, search)}</td>
                <td className={`p-3 ${getStatusColor(order.status)}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalIsOpen} onClose={handleCloseModal} title="افزودن محصول جدید">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddProduct(newProduct);
            setNewProduct({ name: "", description: "" });
            handleCloseModal();
          }}
        >
          <div>
            <label>نام محصول</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="نام محصول"
            />
          </div>
          <div>
            <label>توضیحات</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full p-2 border border-gray-200/95 rounded-lg mb-4"
              placeholder="توضیحات محصول"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-xl">ثبت</button>
            <button onClick={handleCloseModal} className="px-4 py-2 bg-red-500 text-white rounded-xl mr-2">بستن</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OrdersManagement;
