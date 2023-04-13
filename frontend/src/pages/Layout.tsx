import React from 'react';
import ProductGrid from '../stories/ProductGrid';
import { Outlet } from 'react-router';
import Navbar from '../stories/Navbar';
import Footer from '../stories/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className='px-4 pb-20 md:px-8 lg:px-12'>
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
