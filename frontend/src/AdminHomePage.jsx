const AdminHomePage = () => {
    const orders = [
        {
            _id:132545,
            user:{
                name:"Aditya",
            },
            totalAmount:1000,
            status:"processing",
            createdAt:"2025-01-01",
            deliveryStatus:"pending",
            paymentStatus:"pending",
            paymentMethod:"Online",

        }
    ];
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className ="p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold ">Revenue</h2>
                        <p classname ="text-2xl">$10</p>
                    </div>
                    <div className ="p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold ">Total Orders</h2>
                        <p classname ="text-2xl">110</p>
                        <Link to ="/admin/orders" className="text-blue-500 hover:text-blue-600">View All Orders</Link>
                    </div>
                    <div className ="p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold ">Total Products</h2>
                        <p classname ="text-2xl">2</p>
                        <Link to ="/admin/orders" className="text-blue-500 hover:text-blue-600">Manage Products</Link>
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
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminHomePage;