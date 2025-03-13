import React, { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi'; 
import Modal from '../../../Ui/Modal'; 

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    email: 'email@example.com',
    phone: '+09 363 398 46',
    bio: 'مدیر تیم',
    country: 'ایالات متحده',
    city: 'آریزونا',
    postalCode: 'ERT 2489',
    taxId: 'AS4568384',
    profileImage: 'https://cdn.vectorstock.com/i/2000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.avif', 
  });

  const [editedData, setEditedData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfileData(editedData);
    setIsModalOpen(false);
  };

  const handleImageChange = () => {
  

    setProfileData((prevData) => ({
      ...prevData,
      profileImage: 'https://cdn.vectorstock.com/i/2000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.avif', // مثلا تغییر عکس
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-300 hover:border-gray-400">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full"
              src={profileData.profileImage}
              alt="Profile"
            />
          
            <button
              onClick={handleImageChange}
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <HiOutlinePencil className="w-5 h-5" />
            </button>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{profileData.firstName} {profileData.lastName}</h2>
          <p className="text-gray-600">مدیر تیم</p>
          <p className="text-gray-600">آریزونا، ایالات متحده</p>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-lg font-medium text-gray-800">اطلاعات شخصی</h3>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">نام: </span>{profileData.firstName}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">نام خانوادگی: </span>{profileData.lastName}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">ایمیل: </span>{profileData.email}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">تلفن: </span>{profileData.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">بیوگرافی: </span>{profileData.bio}
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-lg font-medium text-gray-800">آدرس</h3>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">کشور: </span>{profileData.country}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">شهر/استان: </span>{profileData.city}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">کد پستی: </span>{profileData.postalCode}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">شناسه مالیاتی: </span>{profileData.taxId}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent text-gray-600 px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100"
          >
            ویرایش
          </button>
          <button className="bg-transparent text-gray-600 px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100">
            خروج
          </button>
        </div>
      </div>

    
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="ویرایش اطلاعات">
        <div>
          
          <div className="mt-4">
            <label className="block text-gray-600">نام</label>
            <input
              type="text"
              name="firstName"
              value={editedData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">نام خانوادگی</label>
            <input
              type="text"
              name="lastName"
              value={editedData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">ایمیل</label>
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">تلفن</label>
            <input
              type="text"
              name="phone"
              value={editedData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">بیوگرافی</label>
            <textarea
              name="bio"
              value={editedData.bio}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          
          <div className="mt-4">
            <label className="block text-gray-600">کشور</label>
            <input
              type="text"
              name="country"
              value={editedData.country}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">شهر/استان</label>
            <input
              type="text"
              name="city"
              value={editedData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">کد پستی</label>
            <input
              type="text"
              name="postalCode"
              value={editedData.postalCode}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">شناسه مالیاتی</label>
            <input
              type="text"
              name="taxId"
              value={editedData.taxId}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              ذخیره
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              بستن
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
