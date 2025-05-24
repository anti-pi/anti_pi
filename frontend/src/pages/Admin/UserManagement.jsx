import { useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Aditya",
            email: "Aditya@example.com", 
            role: "Admin"
        }
    ]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Customer"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            ...formData
        };
        setUsers([...users, newUser]);
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "Customer"
        });
    };

    const handleRoleChange = (userId, newRole) => {
        const updatedUsers = users.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    const handleDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            
            {/* Display Users Table */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Current Users</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-gray-500">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="py-3 px-4">Name</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{user.name}</td>
                                    <td className="py-3 px-4">{user.email}</td>
                                    <td className="py-3 px-4">{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add User Form */}
            <div className="p-6 rounded-lg mb-6 bg-white shadow">
                <h3 className="text-lg font-semibold mb-4">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select 
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button 
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Add User
                    </button>
                </form>
            </div>

            {/* User List Table */}
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <h3 className="text-lg font-semibold p-4">User List</h3>
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="p-4">
                                    {user.email}
                                </td>
                                <td className="p-4">
                                    <select 
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        className="p-2 border rounded"
                                    >
                                        <option value="Customer">Customer</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <button 
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete
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

export default UserManagement;
