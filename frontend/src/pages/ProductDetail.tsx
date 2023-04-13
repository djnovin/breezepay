import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
  let { productId } = useParams();

  return <div>ProductDetail</div>;
};

export default ProductDetail;
