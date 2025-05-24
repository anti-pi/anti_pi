import React from 'react';

const AdminOrders = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Orders Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-blue-800 font-medium mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600">2</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-green-800 font-medium mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">$110</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h3 className="text-purple-800 font-medium mb-2">Average Order</h3>
          <p className="text-2xl font-bold text-purple-600">$10</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-gray-800 text-lg">View and manage customer orders here.</p>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Recent Orders: 2</span>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Export Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders; 