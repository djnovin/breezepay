import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
  };
};

const ProductItem: React.FC<Props> = ({ product }) => {
  let navigate = useNavigate();

  const handleBuyNow = () => {
    const url = '/checkout?product=' + JSON.stringify(product);
    navigate(url);
  };

  return (
    <div className='flex flex-col gap-2 justify-center'>
      <div className='overflow-clip'>
        <img
          className='transform cursor-pointer w-full'
          src={product.image}
          alt={product.title}
        />
      </div>
      <div>
        <h1 className='text-lg font-normal mb-2'>{product.title}</h1>
        <p className='text-base font-bold mb-2'>${product.price}</p>
      </div>
      <div>
        <Button
          onClick={handleBuyNow}
          label={'Buy Now'}
        />
      </div>
    </div>
  );
};

export default ProductItem;
