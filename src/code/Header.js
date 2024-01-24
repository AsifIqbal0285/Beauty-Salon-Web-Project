import React from 'react';
import logo from '../images/photos/logo.jpeg';
import headerBg from '../images/background/headerBackgroundPhoto.jpeg';
import { Link } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import '../index.css';

export default function Header() {
  return (
    <div
      className='h-34 opacity-95 sm:grid grid-cols-3 p-4'
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className='text-white grid justify-self-start'>
        <Link to={'/'}>
          <GrHomeRounded className='absolute text-xl text-white top-4 left-2 cursor-pointer fill-green-600' />
        </Link>
      </div>

      <div className='grid justify-items-center'>
        <div className='grid content-center'>
          <h1>
            Beauty By: <span className='text-white'>Kashee</span>
            <br></br>
          </h1>
          <p className='place-self-center '>
            <a href='Mobile 0323423454' className='text-white'>
              0323423454
            </a>
          </p>
        </div>
        <div className='flex'>
          <Link to='/Hair' className='no-underline'>
            <h3 className='mr-5 sm:mr-5 cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'>
              Hair
            </h3>
          </Link>
          <Link to='/LashesAndBrows' className='no-underline'>
            <h3 className='mr-5 sm:cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'>
              Lashes & Brows
            </h3>
          </Link>
          <Link to='/Nails' className='no-underline'>
            <h3 className='mr-5 sm:mr-5 cursor-pointer transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-110 hover:text-gray-600 duration-300'>
              Nails
            </h3>
          </Link>
        </div>
      </div>

      <div className='absolute top-4 right-2 max-w-8 max-h-8'>
        <img className='h-14 w-14 ' id='logo' src={logo} alt='img' />
      </div>
    </div>
  );
}
