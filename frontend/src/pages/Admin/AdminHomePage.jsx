import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
    const orders = [
        {
            _id: 132545,
            user: {
                name: "Aditya",
            },
            totalPrice: 1000,
            status: "completed"
        },
        {
            _id: 132445,
            user: {
                name: "Anzar",
            },
            totalPrice: 10,
            status: "processing"
        },
        {
            _id: 132645,
            user: {
                name: "Farzeen",
            },
            totalPrice: 1000,
            status: "processing"
        }
    ];

    const getStatusStyle = (status) => {
        return status === "completed" 
            ? "px-2 py-1 text-xs rounded-full bg-green-100 text-green-800"
            : "px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800";
    };

    const formatPrice = (price) => {
        return `$${price.toLocaleString()}`;
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Total Reports</h2>
                    <p className="text-2xl font-bold mb-2">110</p>
                    <Link 
                        to="/admin/orders" 
                        className="text-blue-500 hover:text-blue-600"
                    >
                        View All Reports
                    </Link>
                </div>

                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Average Rewards</h2>
                    <p className="text-2xl font-bold mb-2">$10</p>
                    <Link 
                        to="/admin/orders" 
                        className="text-blue-500 hover:text-blue-600"
                    >
                        View Orders
                    </Link>
                </div>

                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
                    <p className="text-2xl font-bold mb-2">$2</p>
                    <Link 
                        to="/admin/orders" 
                        className="text-blue-500 hover:text-blue-600"
                    >
                        View Revenue
                    </Link>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-gray-500">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="py-3 px-4">Order ID</th>
                                <th className="py-3 px-4">User</th>
                                <th className="py-3 px-4">Total Price</th>
                                <th className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                                        <td className="p-4">{order._id}</td>
                                        <td className="p-4">{order.user.name}</td>
                                        <td className="p-4">{formatPrice(order.totalPrice)}</td>
                                        <td className="p-4">
                                            <span className={getStatusStyle(order.status)}>
                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-4 text-center text-gray-500">No orders found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage; 