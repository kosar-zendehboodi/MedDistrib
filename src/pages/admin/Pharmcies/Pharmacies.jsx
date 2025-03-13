import React, { useState } from "react";
import Modal from "../../../Ui/Modal";
import { HiOutlinePencilAlt } from "react-icons/hi";

// PharmacyAccordion Component
const PharmacyAccordion = ({ pharmacy, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingDrug, setEditingDrug] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleEdit = (drug) => {
    setIsEditing(true);
    setEditingDrug({ ...drug });
  };

  const handleSave = () => {
    onUpdate(pharmacy.id, editingDrug);
    setIsEditing(false);
    setEditingDrug(null);
  };

  return (
    <div className="border-b border-gray-300 mb-2">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
        onClick={handleToggle}
      >
        <span>{pharmacy.name}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          {pharmacy.drugs.map((drug) => (
            <div key={drug.name} className="flex justify-between items-center mb-2">
              <div>
                <span className="font-bold">نام دارو:</span> {drug.name} | 
                <span className="font-bold">تعداد:</span> {drug.quantity}
              </div>
              <button onClick={() => handleEdit(drug)} className="text-blue-500 hover:text-blue-700">
                <HiOutlinePencilAlt />
              </button>
            </div>
          ))}

          {isEditing && (
            <Modal open={isEditing} onClose={() => setIsEditing(false)} title="ویرایش دارو">
              <div>
                <label>نام دارو</label>
                <input
                  type="text"
                  value={editingDrug.name}
                  onChange={(e) => setEditingDrug({ ...editingDrug, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
              </div>
              <div>
                <label>تعداد دارو</label>
                <input
                  type="number"
                  value={editingDrug.quantity}
                  onChange={(e) => setEditingDrug({ ...editingDrug, quantity: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
              </div>
              <div className="flex justify-end">
                <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-xl">ذخیره</button>
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-red-500 text-white rounded-xl ml-2">لغو</button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

// Sample Data
const sampleData = [
  {
    id: 1,
    name: "داروخانه مرکزی",
    drugs: [
      { name: "آموکسی سیلین", quantity: 10 },
      { name: "اسپری آسم", quantity: 5 },
      { name: "پاراستامول", quantity: 20 },
    ],
  },
  {
    id: 2,
    name: "داروخانه شرق",
    drugs: [
      { name: "ایبوپروفن", quantity: 15 },
      { name: "آنتی بیوتیک", quantity: 8 },
    ],
  },
  {
    id: 3,
    name: "داروخانه غرب",
    drugs: [
      { name: "آنسوپرولول", quantity: 12 },
      { name: "ویتامین D", quantity: 25 },
    ],
  },
];

// Main App Component
const App = () => {
  const [pharmacies, setPharmacies] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState("");
  const [newPharmacyName, setNewPharmacyName] = useState("");
  const [newPharmacyDrugs, setNewPharmacyDrugs] = useState([{ name: "", quantity: 0 }]);

  const handleUpdate = (pharmacyId, updatedDrug) => {
    const updatedPharmacies = pharmacies.map((pharmacy) =>
      pharmacy.id === pharmacyId
        ? {
            ...pharmacy,
            drugs: pharmacy.drugs.map((drug) =>
              drug.name === updatedDrug.name ? updatedDrug : drug
            ),
          }
        : pharmacy
    );
    setPharmacies(updatedPharmacies);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddPharmacy = () => {
    const newPharmacy = {
      id: pharmacies.length + 1,
      name: newPharmacyName,
      drugs: newPharmacyDrugs,
    };
    setPharmacies([...pharmacies, newPharmacy]);
    setNewPharmacyName("");
    setNewPharmacyDrugs([{ name: "", quantity: 0 }]);
  };

  const filteredPharmacies = pharmacies.filter((pharmacy) =>
    pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="جستجو در داروخانه‌ها..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />
      </div>

      <div className="mb-4">
        <h2>افزودن داروخانه جدید</h2>
        <input
          type="text"
          value={newPharmacyName}
          onChange={(e) => setNewPharmacyName(e.target.value)}
          placeholder="نام داروخانه"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
        />
        {/* قابلیت افزودن دارو به داروخانه جدید */}
        {newPharmacyDrugs.map((drug, index) => (
          <div key={index} className="flex space-x-2 mb-2">
            <input
              type="text"
              value={drug.name}
              onChange={(e) => {
                const updatedDrugs = [...newPharmacyDrugs];
                updatedDrugs[index].name = e.target.value;
                setNewPharmacyDrugs(updatedDrugs);
              }}
              placeholder="نام دارو"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              value={drug.quantity}
              onChange={(e) => {
                const updatedDrugs = [...newPharmacyDrugs];
                updatedDrugs[index].quantity = e.target.value;
                setNewPharmacyDrugs(updatedDrugs);
              }}
              placeholder="تعداد"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
        <button
          onClick={() => setNewPharmacyDrugs([...newPharmacyDrugs, { name: "", quantity: 0 }])}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
        >
          افزودن دارو
        </button>
        <button
          onClick={handleAddPharmacy}
          className="px-4 py-2 bg-green-500 text-white rounded-xl ml-2"
        >
          افزودن داروخانه
        </button>
      </div>

      {filteredPharmacies.map((pharmacy) => (
        <PharmacyAccordion key={pharmacy.id} pharmacy={pharmacy} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default App;
