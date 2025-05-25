import React, { useEffect, useState } from 'react';
import {FaFilter} from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import { useSearchParams, useParams } from "react-router-dom";


function CollectionPage() {
    const [products, setProducts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = React.useRef(null);
    const [searchParams] = useSearchParams();
    const { collection } = useParams();

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    // Close sidebar when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        }
        if (isSidebarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: "Product One",
                    brand: "Scaler",
                    type: "Others",
                    price: 199,
                    submits: 5,
                    images: [
                        { url: "https://system32.ink/attachments/1736585801037-webp.177/", alt: "Product One" }
                    ]
                },
                {
                    _id: 2,
                    name: "Product Two",
                    brand: "Apna College",
                    type: "Movies",
                    price: 299,
                    submits: 2,
                    images: [
                        { url: "https://dizipro.in/wp-content/uploads/2024/11/Netflix-Premium.webp", alt: "Product Two" }
                    ]
                },
                {
                    _id: 3,
                    name: "Product Three",
                    brand: "Scaler",
                    type: "Movies",
                    price: 399,
                    submits: 8,
                    images: [
                        { url: "https://i.ytimg.com/vi/KmTYgOkY8zc/sddefault.jpg", alt: "Product Three" }
                    ]
                },
                {
                    _id: 4,
                    name: "Product Four",
                    brand: "Scaler",
                    type: "Software",
                    price: 150,
                    submits: 1,
                    images: [
                        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmyyn0TJme1JcGM9ZsnRIGY3lrxcFODCd5A&s", alt: "Product Four" }
                    ]
                },
                {
                    _id: 5,
                    name: "Product Five",
                    brand: "Apna College",
                    type: "Courses",
                    price: 499,
                    submits: 10,
                    images: [
                        { url: "https://picsum.photos/200/200?random=5", alt: "Product Five" }
                    ]
                },
                {
                    _id: 6,
                    name: "Product Six",
                    brand: "Newton",
                    type: "Software",
                    price: 250,
                    submits: 3,
                    images: [
                        { url: "https://s3.envato.com/files/372169923/Theme-Preview/00_preview.jpg", alt: "Product Six" }
                    ]
                },
                {
                    _id: 7,
                    name: "Product Seven",
                    brand: "Newton",
                    type: "Courses",
                    price: 350,
                    submits: 7,
                    images: [
                        { url: "https://i.ytimg.com/vi/Srh0GVv2cAM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGrsaCaQL1ih4Kb6mcAMFkPu98KQ", alt: "Product Seven" }
                    ]
                },
                {
                    _id: 8,
                    name: "Product Eight",
                    brand: "Apna College",
                    type: "Software",
                    price: 175,
                    submits: 4,
                    images: [
                        { url: "https://i.ytimg.com/vi/KXTANzN1hfE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCA6-lEkp2KeIXzJ5oCuTDTefTr8g", alt: "Product Eight" }
                    ]
                }
            ];
            setProducts(fetchedProducts);
        }, 1000);
    }, []);

    // --- SORT PRODUCTS BASED ON URL PARAM ---
    const priceSort = searchParams.get("price");
    const reportsSort = searchParams.get("reports");
    let sortedProducts = [...products];

    if (priceSort === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (reportsSort === "asc") {
        sortedProducts.sort((a, b) => a.submits - b.submits);
    } else if (reportsSort === "desc") {
        sortedProducts.sort((a, b) => b.submits - a.submits);
    }

    let filteredProducts = sortedProducts;
    if (collection && collection !== "all") {
        filteredProducts = sortedProducts.filter(
            product => product.type && product.type.toLowerCase() === collection.toLowerCase()
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 relative">
            {/* Filters section above products, inline */}
            <div className="flex items-center gap-4 mb-6">
                <button
                    onClick={toggleSidebar}
                    className="flex items-center gap-2 px-4 py-2 border rounded bg-white shadow hover:bg-gray-100 transition"
                >
                    <FaFilter className="text-xl" />
                    <span className="font-semibold text-lg">Filters</span>
                </button>
                {/* Add more filter controls here if needed */}
            </div>

            {/* Sidebar overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity">
                    <div
                        ref={sidebarRef}
                        className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 p-6 transition-transform"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg">Filters</span>
                            <button
                                onClick={toggleSidebar}
                                className="text-gray-500 hover:text-black text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                        <FilterSidebar />
                    </div>
                </div>
            )}

            <SortOptions/>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500">No products found.</div>
                ) : (
                    filteredProducts.map(product => (
                        <div key={product._id} className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition relative flex flex-col h-full">
  <img
    src={product.images[0].url}
    alt={product.name}
    className="w-full h-40 object-cover rounded mb-3"
  />
  <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
    {product.name}
    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">{product.brand}</span>
    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{product.type}</span>
  </h3>
  <p className="text-gray-700 mb-2">₹{product.price}</p>
  <p className="text-gray-500 mb-2">Submitted Reports: {product.submits}</p>

  <div className="mt-auto flex justify-between">
    <button
      onClick={() => addToCart(product)}
      className="bg-gray-800 text-white px-4 py-1 rounded hover:bg-black transition text-sm"
    >
      Add to Save
    </button>
    <button
      className="bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600 text-sm"
    >
      Report
    </button>
  </div>
</div>

                    ))
                )}
            </div>
        </div>
    );
}

export default CollectionPage;