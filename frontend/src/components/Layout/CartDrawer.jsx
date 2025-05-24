import React from 'react'
import {IoMdClose} from "react-icons/io"
import CartContents from '../Cart/CartContents'

const CartDrawer = ({drawerOpen, toggleCartDrawer }) => {

    
  return (
    <div className={`fixed top-0 right-0 w-2/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-xol z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
    }` }>
        <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600" />
            </button>

        </div>
        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className='text-xl font-semibold mb-4'>Your Saved</h2>
            <CartContents />
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 z-50 shadow border-t border-gray-200">
  <p className="text-sm tracking-tighter text-gray-700 text-center">
    Report It Before Someone Else Gets Paid.
  </p>
</div>


    </div>
  )
}

export default CartDrawer