'use client';

import $axios from '@/lib/axios/axios.instance';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from './Loader';
import { Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { isBuyer } from '@/utils/check.role';

const BuyerList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useQuery({
    queryKey: ['buyer-product-list', page],
    queryFn: async () => {
      return await $axios.post('/product/buyer/list', {
        page: page,
        limit: 3,
      });
    },

    onError: (error) => {
      console.log(error);
    },

    enabled: isBuyer(),
  });

  const productList = data?.data?.productList;

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col justify-between items-center gap-8  ">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>
      <div>
        <Pagination
          page={page}
          count={5}
          color="secondary"
          className="my-12"
          size="large"
          onChange={(_, value) => {
            setPage(value);
          }}
        ></Pagination>
      </div>
    </div>
  );
};

export default BuyerList;
