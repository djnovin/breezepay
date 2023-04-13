import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-4 w-full'>
      <div className='flex flex-row items-center'>
        <Link
          to='/'
          className='flex flex-row items-center'
        >
          <span className='text-2xl font-medium'>SneakerHead.</span>
        </Link>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <div className='font-medium'>Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
