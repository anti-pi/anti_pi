import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

   const [isLoggedIn] = useState(false);
return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
            <Link to="/" className="text-2xl font-medium">
                Anti-Pi
            </Link>
        </div>
        <div className='hidden md:flex space-x-6'>
        
            <Link to='/collections/all' className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                All
            </Link>
            <Link to='/collections/software' className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Softwares
            </Link>
            <Link to='/collections/movies' className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Movies
            </Link>
            <Link to='/collections/courses' className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Courses
            </Link>
            <Link to='/collections/others' className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Others
            </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/Admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
              <FaRegBookmark className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
                4
              </span>
            </button>
            <div className="overflow-hidden">
              <SearchBar />
            </div>
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex justify-end p-4'>
            <button onClick={toggleNavDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600" />
            </button>
        </div>
        <div className='p-4'>
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <nav className='space-y-4'>
                <Link to="/collections/all" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">All</Link>
                <Link to="/collections/software" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Softwares</Link>
                <Link to="/collections/movies" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Movies</Link>
                <Link to="/collections/courses" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Courses</Link>
                <Link to="/collections/others" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Others</Link>

            </nav>

        </div>
    </div>
    </>
  );
};

export default Navbar;