import React from 'react'

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "Scaler DSA in Java, DBMS, OS, CN Low and High Level System Design",
            reward: "100₹ - 500₹",
            image: "https://system32.ink/attachments/1736586223189-webp.178/",
            submits: 5
        },
        {
            productId: 2,
            name: "Scaler DSA in C++, DBMS, OS, CN, Development, Low and High Level System Design",
            reward: "200₹ - 1000₹",
            image: "https://system32.ink/attachments/1736585801037-webp.177/",
            submits: 2
        }
    ]
    
    return (
        <div className="p-4">
            {
                cartProducts.map((product, index) => (
                    <div key={index} className="flex items-start space-x-4 py-4 border-b">
                        
                        {/* Image */}
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-40 h-24 object-cover rounded" 
                        />
                        
                        {/* Text Content */}
                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-md font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Reward: {product.reward} | Submitted: {product.submits}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-3">
                                <button className="bg-red-500 text-white border rounded px-3 py-1 text-sm font-medium hover:bg-red-700">
                                    Report
                                </button>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default CartContents
