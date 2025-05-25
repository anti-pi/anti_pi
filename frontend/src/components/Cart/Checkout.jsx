import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cartContents = {
  products: [
    {
      _id: "1",
      name: "Scaler DSA in Java, DBMS, OS, CN Low and High Level System Design",
      reward: "100₹ - 500₹",
      submits: 0,
      brand: "Scaler",
      image: [
        {
          url: "https://system32.ink/attachments/1736586223189-webp.178/",
          altText: "Scaler DSA and Algo course",
        },
      ],
    },
    {
      _id: "2",
      name: "Scaler DSA in C++, DBMS, OS, CN, Development, LLD and HLD",
      reward: "200₹ - 1000₹",
      submits: 0,
      brand: "Scaler",
      image: [
        {
          url: "https://system32.ink/attachments/1736585801037-webp.177/",
          altText: "Scaler DSA and Algo course",
        },
      ],
    },
  ],
};

const Checkout = () => {
  const navigate = useNavigate();
  const [reportInfo, setReportInfo] = useState({
    email: JSON.parse(localStorage.getItem('currentUser'))?.email || "",
    link: "",
    resourcesLink: "",
    description: "",
    upiId: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    
    // Create checkout object
    const newCheckout = {
      _id: Date.now().toString(),
      status: "reported",
      createdAt: new Date(),
      checkoutItems: cartContents.products,
      reportInfo: reportInfo
    };

    // Redirect with state
    navigate('/order-confirmation', { state: { checkout: newCheckout } });
  };

  const firstProduct = cartContents.products[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Start Reporting</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              value={reportInfo.email}
              onChange={(e) => setReportInfo({...reportInfo, email: e.target.value})}
              className="w-full p-2 border rounded"
              required
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Report</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Link</label>
              <input
                type="text"
                value={reportInfo.link}
                onChange={(e) => setReportInfo({ ...reportInfo, link: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder="Enter the Link to the Pirated File or Website"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Proof Link</label>
              <input
                type="text"
                value={reportInfo.resourcesLink}
                onChange={(e) => setReportInfo({ ...reportInfo, resourcesLink: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder="Enter shareable link to screenshot or video proof"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description / Additional Info</label>
            <input
              type="text"
              value={reportInfo.description}
              onChange={(e) => setReportInfo({ ...reportInfo, description: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Provide any extra details or context about the report"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">UPI ID for Reward</label>
            <input
              type="text"
              value={reportInfo.upiId}
              onChange={(e) => setReportInfo({ ...reportInfo, upiId: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Enter your UPI ID to receive reward payment"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800 transition"
            >
              Report
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Product Summary</h3>
        <div className="border-t py-4 mb-4">
          <div className="flex items-start justify-between py-2 border-b">
            <div className="flex items-start">
              <img
                src={firstProduct.image[0]?.url}
                alt={firstProduct.image[0]?.altText || "Product Image"}
                className="w-20 h-24 object-cover m-4"
              />
              <div>
                <h3 className="text-md">{firstProduct.name}</h3>
                <button className="text-gray-1000 bg-slate-300 rounded px-2 py-1 mt-1">
                  {firstProduct.brand}
                </button>
                <p className="text-gray-500 mt-2">
                  Reward: {firstProduct.reward}
                </p>
                <p className="text-gray-500">Submits: {firstProduct.submits}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;