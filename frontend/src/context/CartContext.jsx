import React, { createContext, useContext, useState } from 'react';
import img1 from "../assets/apnaclg.jpg";
const CartContext = createContext();

const defaultProducts = [
  {
    productId: 1,
    name: "Scaler DSA in Java",
    reward: "100₹ - 500₹",
    image: "https://system32.ink/attachments/1736586223189-webp.178/",
    submits: 5,
  },
  {
    productId: 2,
    name: "Scaler DSA in C++",
    reward: "200₹ - 1000₹",
    image: "https://system32.ink/attachments/1736585801037-webp.177/",
    submits: 2,
  },
  {
    productId: 3,
    name: "Sigma 7.0 2025 Apna College",
    reward: "100₹ - 500₹",
    image: img1,
    submits: 2,
  }
];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([...defaultProducts]);

  const addToCart = (product) => {
    const alreadyInCart = cartItems.find(item => item.productId === product.productId);
    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.productId !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
