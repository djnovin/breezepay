import React from 'react';
import { useParams } from 'react-router';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProduct } from '../api';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { productId } = useParams();
  const queryClient = useQueryClient();
  const query = useQuery(['product', productId], () => getProduct(productId), {
    onSuccess: (data) => {
      queryClient.setQueryData(['product', productId], data);
    },
  });

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {query.isSuccess && (
        <>
          <motion.img
            variants={imageVariants}
            initial='hidden'
            animate='visible'
            src={query.data.image_url}
            alt={query.data.name}
          />
          <motion.div
            variants={textVariants}
            initial='hidden'
            animate='visible'
          >
            <h2>{query.data.name}</h2>
            <p>{query.data.description}</p>
            <p>{query.data.price}</p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default ProductDetail;
