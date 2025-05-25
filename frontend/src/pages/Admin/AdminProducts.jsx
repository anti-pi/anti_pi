import React from 'react';

const AdminProducts = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Products Management</h1>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-800 text-lg">Manage products here.</p>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total Products: 0</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add New Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts; 