import React from 'react';
import ProductGrid from '../stories/ProductGrid';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <section className='px-4 pb-20 md:px-8 lg:px-12'>
      <Outlet />
    </section>
  );
};

export default Layout;
