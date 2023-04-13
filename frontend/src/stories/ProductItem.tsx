import React from 'react';
import { Button } from './Button';

type Props = {
  product: {
    image: string;
    title: string;
    price: number;
  };
};

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className='flex flex-col gap-2 justify-center'>
      <div className='overflow-clip'>
        <img
          className='transform cursor-pointer hover:rotate-6 hover:scale-[90%] hover:-translate-y-8 transition duration-300 ease-in-out w-full'
          src={product.image}
          alt={product.title}
        />
      </div>
      <div>
        <h1 className='text-lg font-normal mb-2'>{product.title}</h1>
        <p className='text-base font-bold mb-2'>${product.price}</p>
      </div>
      <div>
        <Button label={'Buy Now'} />
      </div>
    </div>
  );
};

export default ProductItem;
