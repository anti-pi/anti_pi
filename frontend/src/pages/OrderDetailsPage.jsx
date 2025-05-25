import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isAccepted: true,
            reportInfo: {
                link: "https://example.com/pirated-content",
                resourcesLink: "https://drive.google.com/proof"
            },
            reportItems: [{
                productId: "1",
                name: "Scaler DSA in Java, DBMS, OS, CN Low and High Level System Design",
                reward: "100₹ - 500₹",
                submits: 0,
                brand: "Scaler",
                image: [{
                    url: "https://system32.ink/attachments/1736586223189-webp.178/",
                    altText: "Scaler DSA and Algo course",
                }]
            }]
        };
        setOrderDetails(mockOrderDetails);
    }, [id]);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>Report Details</h2>
            {!orderDetails ? (
                <p>Loading report details...</p>
            ) : (
                <div className="p-4 sm:p-6 rounded-lg border">
                    <div className='flex flex-col sm:flex-row justify-between mb-8'>
                        <div>
                            <h3 className='text-lg md:text-xl font-semibold'>
                                Report ID: #{orderDetails._id}
                            </h3>
                            <p className='text-gray-600'>
                                Date: {new Date(orderDetails.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                        <div className='mt-4 sm:mt-0'>
                            <span className={`px-4 py-2 rounded-lg ${
                                orderDetails.isAccepted 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {orderDetails.isAccepted ? 'Accepted' : 'Rejected'}
                            </span>
                        </div>
                    </div>
                    
                    <div className='mb-8'>
                        <h3 className='text-lg font-semibold mb-4'>Reported Content</h3>
                        <div className='space-y-2'>
                            <p><strong>Report Link:</strong> {orderDetails.reportInfo.link}</p>
                            <p><strong>Proof Link:</strong> {orderDetails.reportInfo.resourcesLink}</p>
                        </div>
                    </div>

                    <div className='border-t pt-6'>
                        <h3 className='text-lg font-semibold mb-4'>Product Details</h3>
                        {orderDetails.reportItems.map(item => (
                            <div key={item.productId} className='flex items-start gap-4 mb-6'>
                                <img 
                                    src={item.image[0].url} 
                                    alt={item.image[0].altText} 
                                    className='w-24 h-24 object-cover rounded-lg'
                                />
                                <div>
                                    <h4 className='text-lg font-medium'>{item.name}</h4>
                                    <p className='text-gray-600 mt-1'>{item.brand}</p>
                                    <p className='text-green-700 mt-2'>Potential Reward: {item.reward}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderDetailsPage;