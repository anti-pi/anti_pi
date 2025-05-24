import React, { useEffect, useState } from "react";
import img1 from "../../assets/apnaclg.jpg";
import img2 from "../../assets/apnaclgss.png";
import { toast } from "sonner";

const selectedProduct = {
  name: "Sigma 7.0 2025 Apna College",
  reward: "100₹-300₹",
  average: "200₹",
  description:
    "Sigma 7.0 is Apna College's flagship coding program, designed to transform beginners into top-tier software engineers. Covering Data Structures & Algorithms, System Design, Development, and Interview Preparation, Sigma 7.0 offers a complete roadmap to crack internships and placements at top tech companies. The program is led by Shraddha Didi and the Apna College team, featuring structured lectures, real-world projects, doubt support, resume building sessions, and mock interviews. Whether you're preparing for product-based companies or aiming to master core skills, Sigma 7.0 is your gateway to achieving your tech dreams.",
  brand: "Apna College",
  submits: 3,
  images: [
    {
      url: img1,
      altText: "Apna Clg Delta 7",
    },
    {
      url: img2,
      altText: "Apna Clg Delta 7",
    },
  ],
};
const ProductDetails = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [mainImage, setMainImage] = useState(selectedProduct?.images?.[0]?.url || null);
  
  useEffect(() => {
    if (selectedProduct?.images?.length > 0 && !mainImage) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct, mainImage]);
  
  const handleAddToSave = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product is Saved!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };
  const handleReport = () => {
    toast.success("Report submitted successfully!", {
        duration: 1000,
    });
    setTimeout(() => {
        window.location.href = 'http://localhost:5173/product/1';
    }, 1000);
}
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image.url)}
                key={index}
                src={image.url || ''}
                alt={image.altText || `Product thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="md:w-1/2">
            <div className="mb-4">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Main Product View"
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Loading image...</span>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden flex overscroll-x-scroll space-x">
            {selectedProduct.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image.url)}
                key={index}
                src={image.url || ''}
                alt={image.altText || `Product thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-1000 mb-1 font-semibold">
              {selectedProduct.brand && `${selectedProduct.brand}`}
            </p>
            <p className="text-xl text-gray-700 mb-2">
              Average Reward: {selectedProduct.average} | Submitted Reports:{" "}
              {selectedProduct.submits}
            </p>
            <p className="text-gray-600 mb-4">
              {selectedProduct.description.slice(0, 200)}...
            </p>

            <div className="mb-4">
              <button onClick={handleReport} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mr-2">
                Report
              </button>
              <button
                onClick={handleAddToSave}
                disabled={isButtonDisabled}
                className={`bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition ${
                  isButtonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
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
