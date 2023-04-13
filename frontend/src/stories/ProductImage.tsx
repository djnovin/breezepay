import React from 'react';

type Props = {
  product: {
    image: string;
    title: string;
  };
};

const ProductImage: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
      />
    </div>
  );
};

export default ProductImage;
