import ProductItem from './ProductItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });

  console.log(query);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
        {query.data?.map((products: any) => (
          <Link
            to={`/${products.id}`}
            key={products.id}
          >
            <motion.div
              // iterate through products and create animation for each
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductItem
                key={products.id}
                product={{
                  id: products.id,
                  image: products.image_url,
                  title: products.name,
                  price: products.price,
                }}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGrid;
