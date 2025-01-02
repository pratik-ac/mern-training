'use client';

import $axios from '@/lib/axios/axios.instance';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductCard from './ProductCard';

const SellerList = () => {
  const [productList, setProductList] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getSellerProduct = async () => {
      try {
        setIsPending(true);
        const res = await $axios.post('/product/seller/list', {
          page: page,
          limit: 2,
        });

        setIsPending(false);

        setProductList(res?.data?.productList);

        console.log(productList);
      } catch (error) {
        setError('Something went wrong.');
        setIsPending(false);
      }
    };

    getSellerProduct();
  }, [page]);

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-col justify-between items-center gap-8  ">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>

      <Pagination
        page={page}
        count={5}
        color="secondary"
        className="my-12"
        size="large"
        onChange={(_, value) => {
          setPage(value);
        }}
      />
    </div>
  );
};

export default SellerList;

// ! -------------------------OR-------------------------------------

// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import { useQuery } from '@tanstack/react-query';
// import { CircularProgress, Pagination } from '@mui/material';
// import $axios from '@/lib/axios/axios.instance';

// const SellerList = () => {
//   const [page, setPage] = useState(1);

//   const { isPending, data, error } = useQuery({
//     queryKey: ['seller-product-list', page],
//     queryFn: async () => {
//       return await $axios.post('/product/seller/list', {
//         page: page,
//         limit: 2,
//         searchText: '',
//       });
//     },
//   });

//   const productList = data?.data.productList || [];

//   if (isPending) {
//     return <CircularProgress />;
//   }

//   return (
//     <>
//       <div className="card-center">
//         {productList.length ? (
//           productList?.map((item) => {
//             return (
//               <ProductCard
//                 key={item._id}
//                 // brand={item.brand}
//                 // name={item.name}
//                 // price={item.price}
//                 // description={item.description}
//                 // image={item.image}

//                 // OR  yo garda bhayo sab lekhna bhanda
//                 {...item} //Spread Operator
//               />
//             );
//           })
//         ) : (
//           <p className="text-3xl bold text-red-500">No products</p>
//         )}
//       </div>

//       <div className="pagination-center">
//         <Pagination
//           page={page}
//           count={5}
//           color="secondary"
//           className="my-12"
//           size="large"
//           onChange={(_, value) => {
//             setPage(value);
//           }}
//         ></Pagination>
//       </div>
//     </>
//   );
// };

// export default SellerList;
