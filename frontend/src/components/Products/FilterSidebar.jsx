import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    reports: "",
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["A", "B"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      price: params.price || "",
      reports: params.reports || "",
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([Number(params.minPrice) || 0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  // Handler for price sorting
  const handlePriceSort = (e) => {
    setSearchParams({
      ...filters,
      price: e.target.value,
      reports: filters.reports // keep current reports sort
    });
  };

  // Handler for submitted reports sorting
  const handleReportsSort = (e) => {
    setSearchParams({
      ...filters,
      reports: e.target.value,
      price: filters.price // keep current price sort
    });
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Sort by Price</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={filters.price}
          onChange={handlePriceSort}
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Sort by Submitted Reports</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={filters.reports}
          onChange={handleReportsSort}
        >
          <option value="">Select</option>
          <option value="asc">Fewest to Most</option>
          <option value="desc">Most to Fewest</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSidebar;