import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Sample Product",
            price: 99.99,
            category: "Electronics",
            stock: "Brand 1"
        },
        {
            id: 2,
            name: "Sample Product 2",
            price: 199.99,
            category: "Electronics",
            stock: "Brand 2"
        }
    ]);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        stock: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock)
        };
        setProducts([...products, newProduct]);
        setFormData({
            name: "",
            price: "",
            category: "",
            stock: ""
        });
    };

    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Product Management</h2>
            
            {/* Add Product Form */}
            <div className="p-6 rounded-lg mb-6 bg-white shadow">
                <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Product Name</label>
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
                        <label className="block text-gray-700">Reward</label>
                        <input 
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Category</label>
                        <input 
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Brand</label>
                        <input 
                            type="text"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            min="0"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Add Product
                    </button>
                </form>
            </div>

            {/* Product List Table */}
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <h3 className="text-lg font-semibold p-4">Product List</h3>
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Reward</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Brand</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                        {product.name}
                                    </td>
                                    <td className="p-4">
                                        ${product.price.toFixed(2)}
                                    </td>
                                    <td className="p-4">
                                        {product.category}
                                    </td>
                                    <td className="p-4">
                                        {product.stock}
                                    </td>
                                    <td className="p-4 space-x-2">
                                        <Link 
                                            to={`/admin/products/${product.id}/edit`}
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(product.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-4 text-center text-gray-500">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
