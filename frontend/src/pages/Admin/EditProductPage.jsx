import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        stock: ""
    });

    useEffect(() => {
        // Simulating fetching product data
        // In a real application, you would fetch the product data from an API
        const mockProduct = {
            id: parseInt(id),
            name: "Sample Product",
            price: "99.99",
            category: "Electronics",
            stock: "10"
        };
        setFormData(mockProduct);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Edit Product</h2>
                <button
                    onClick={() => navigate('/admin/products')}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Back to Products
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Product Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Price</label>
                    <input 
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        step="0.01"
                        min="0"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Category</label>
                    <input 
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Stock</label>
                    <input 
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        min="0"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default EditProductPage;