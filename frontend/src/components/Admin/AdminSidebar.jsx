import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaClipboardList, FaStore, FaSignOutAlt, FaUser } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate("/"); // navigate to home page
  };

  return (
    <div>
      <div className="p-6 h-screen flex flex-col">
        <div className="mb-6"></div>
        <Link to="/admin" className="text-2xl font-medium block mb-8">
          Admin
        </Link>
        <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink 
            to="/admin/users" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2" 
                : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded flex items-center space-x-2"
            }
          > 
            <FaUser />
            <span>Users</span>
          </NavLink>
          
          <NavLink 
            to="/admin/products" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2" 
                : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded flex items-center space-x-2"
            }
          > 
            <FaBoxOpen />
            <span>Products</span>
          </NavLink>
          
          <NavLink 
            to="/admin/orders" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2" 
                : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded flex items-center space-x-2"
            }
          > 
            <FaClipboardList />
            <span>Orders</span>
          </NavLink>
          
          <NavLink 
            to="/admin/shop" 
            className={({ isActive }) => 
              isActive 
                ? "bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2" 
                : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded flex items-center space-x-2"
            }
          > 
            <FaStore />
            <span>Shop</span>
          </NavLink>
        </nav>
        <div className="mt-auto">
          <button 
            onClick={handleLogout} 
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center justify-center space-x-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
