import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className='hiddem md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'></TbBrandMeta>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-4 w-4'></RiTwitterXLine>
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>See It. Report It. Earn From It.</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="tel:+917498874119" className='hover:text-gray-300'>
                    +91 7498874119
                </a>
            </div>
        </div>
    </div>

  )
}

export default Topbar;