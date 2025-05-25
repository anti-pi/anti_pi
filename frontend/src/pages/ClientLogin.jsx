import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { loginUser } from '../redux/slices/authSlice';
import login from '../assets/partner.jpeg';

const ClientLogin = () => {
  const [email, setEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, brandName })).unwrap();
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(error?.message || 'Login failed!');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Main heading */}
      <h1 className="text-3xl font-bold text-center mt-10 mb-8">Contact Us</h1>
      <div className="flex flex-1">
        {/* Left (form) side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
            <div className="flex justify-center mb-6">
              <h2 className="text-xl font-medium">Anti-pi</h2>
            </div>
            
            

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Brand Name</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter your brand name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter a description"
                rows={3}
              />
            </div>

            <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
              Contact Us
            </button>

            
          </form>
        </div>

        {/* Right (image) side */}
        <div className="hidden md:flex w-1/2  justify-center items-center">
          <img src={login} alt="login" className="h-[750px] w-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
