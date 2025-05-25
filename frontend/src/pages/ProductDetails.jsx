import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { productList } from "../data/products"; // Adjust the path as needed

const ProductDetails = () => {
  const { id } = useParams();
  const product = productList.find((p) => p._id.toString() === id);

  const [mainImage, setMainImage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (product?.images?.length > 0 && !mainImage) {
      setMainImage(product.images[0].url);
    }
  }, [product, mainImage]);

  const handleAddToSave = () => {
    setIsButtonDisabled(true);
    toast.success("Product is saved!", { duration: 1000 });
    setTimeout(() => setIsButtonDisabled(false), 500);
  };

  const handleReport = () => {
    toast.success("Report submitted successfully!", { duration: 1000 });
  };

  if (!product) {
    return (
      <div className="text-center text-red-500 font-bold p-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Left side: thumbnails and main image */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Image ${idx + 1}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Main"
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Loading image...</span>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnails for mobile */}
          <div className="md:hidden flex overflow-x-auto gap-4 my-4">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Image ${idx + 1}`}
                onClick={() => setMainImage(image.url)}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Right side: details */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {product.brand}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              Price: ₹{product.price} | Reports: {product.submits}
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4 flex gap-2">
              <button
                onClick={handleReport}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Report
              </button>
              <button
                onClick={handleAddToSave}
                disabled={isButtonDisabled}
                className={`bg-gray-700 text-white px-4 py-2 rounded transition ${
                  isButtonDisabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-black"
                }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
