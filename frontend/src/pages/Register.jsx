import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import register from "../assets/register.png";
import { registerUser } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] =useState("");
     const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
        toast.success("Registered Successfully");
    };
  return (
    <div className="flex min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
            <form 
    className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
    onSubmit={handleSubmit}
>
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-medium">Anti-pi</h2>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Hello There! </h2>
                <p className="text-center mb-6">
                    Enter your username and password to login 
                </p>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your Name"
                    />
                </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
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
                    />
                </div>
                <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">Sign Up</button>
                <p className="mt-6 text-center text-sm">
                    Don't have an account? {" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </form>
        </div>
        <div className="hidden md:flex w-1/2 bg-gray-800 justify-center items-center">
            <img src={register} alt="login logo" className="h-[750px] w-full object-cover rounded-lg" />
        </div>
    </div>
  )
}

export default Register