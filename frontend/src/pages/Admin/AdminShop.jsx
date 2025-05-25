import React from 'react';

const AdminShop = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Settings</h1>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-800 text-lg">Configure settings</p>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Status: Active</span>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminShop; 