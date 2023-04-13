import { Checkout, Home, ProductDetail } from './pages';
import ProductGrid from './stories/ProductGrid';
import { Routes, Route, useParams } from 'react-router';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      >
        <Route
          path='/'
          element={<ProductGrid />}
        />
        <Route
          path=':productId'
          element={<ProductDetail />}
        />
      </Route>
      <Route
        path='/checkout'
        element={<Checkout />}
      />
    </Routes>
  );
}

export default App;
