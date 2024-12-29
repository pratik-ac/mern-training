'use client';
import BuyerList from '@/components/BuyerList';
import SellerList from '@/components/SellerList';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    setUserRole(window.localStorage.getItem('userRole'));
    setFirstName(window.localStorage.getItem('firstName'));
  }, []);

  return (
    <div>
      <p className="text-5xl bold italic">Welcome {firstName}</p>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={() => {
          router.push('/add-product');
        }}
      >
        Add Product
      </Button>

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
