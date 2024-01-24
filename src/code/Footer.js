import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='grid grid-cols-3 place-items-center sm:p-24 bg-gray-800 text-white relative'>
      
      <div className='mt-8 mb-8 h-88 '>
        <span className='text-blue-500'><h5 className='text-base mb-4 sm:text-xl'>Follow Us</h5></span>
        <div className='flex gap-2 '>
          <Link to='/' className='bg-white hover:bg-blue-400'>< FaFacebook className='h-6 w-6 sm:h-8 sm:w-8'/></Link>
          <Link to='/' className='bg-white hover:bg-blue-400'>< FaInstagram className='h-6 w-6 sm:h-8 sm:w-8'/></Link>
          <Link to='/' className='bg-white hover:bg-blue-400'>< FaTwitter className='h-6 w-6 sm:h-8 sm:w-8'/></Link>
        </div>
      </div>

      <div className='mt-8 mb-8 '>
        <span className='text-blue-500'><h5 className='text-base sm:text-xl'>Join Our Team</h5></span>
        <p className='text-sm '>
          <a href="kashee3@gmail.com" className='text-white'>kashee3@gmail.com</a><br></br>
          <a href="Mobile 0323434234" className='text-white'>0323434234</a>
          </p>
        </div>
      <div className='mt-8 mb-8'>
        <span className='text-blue-500'><h5 className='text-base sm:text-xl'>Address:</h5></span>
        <p className='text-sm'>
          Sukkur City<br></br>
          Near Airport Rode
        </p>
      </div>

      
      
    </div>
  )
}
