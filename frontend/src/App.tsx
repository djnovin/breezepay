import { useState } from 'react';
import { Checkout, Layout, ProductDetail } from './pages';
import ProductGrid from './stories/ProductGrid';
import { Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            path='/'
            element={<ProductGrid />}
          />
          <Route
            path='/:productId'
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
