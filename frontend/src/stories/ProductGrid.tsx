import ProductItem from './ProductItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ['products'], queryFn: getProducts });

  console.log(query);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8'>
      {query.data?.map((products: any) => (
        <Link to={`/${products.id}`}>
          <ProductItem
            key={products.id}
            product={{
              id: products.id,
              image: products.image_url,
              title: products.name,
              price: products.price,
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
