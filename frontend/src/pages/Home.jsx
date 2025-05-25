import React from 'react'
import Hero from "../components/Layout/Hero";
import ClientOrUser from '../components/Products/ClientOrUser';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
const Home = () => {
  return (
    <div>
      <Hero />
      <ClientOrUser />
      <NewArrivals />
      <h2 className='text-3xl text-center font-bold mb-4'>Trending Now</h2>
      <ProductDetails />
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>
          START REPORTING     |      START PROTECTING
        </h2>
      </div>
      
    </div>
  )
}

export default Home