import React from 'react';
import { useCart } from '../../context/CartContext';

const CartContents = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4">
      {cartItems.map((product) => (
        <div key={product.productId} className="flex items-start space-x-4 py-4 border-b">
          <img src={product.image} alt={product.name} className="w-40 h-24 object-cover rounded" />
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-md font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Reward: {product.reward} | Submitted: {product.submits}
              </p>
            </div>
            <div className="mt-3">
              <button
                onClick={() => removeFromCart(product.productId)}
                className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
