import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { loginUser } from '../redux/slices/authSlice';
import login from '../assets/partner.jpeg';

const ClientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState(''); // Add this line
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(error?.message || 'Login failed!');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left (form) side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Anti-pi</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hello There!</h2>
          <p className="text-center mb-6">Enter your username and password to login</p>

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
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
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
            Sign In
          </button>

          <p className="mt-6 text-center text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </form>
      </div>

      {/* Right (image) side */}
      <div className="hidden md:flex w-1/2  justify-center items-center">
        <img src={login} alt="login" className="h-[750px] w-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ClientLogin;
