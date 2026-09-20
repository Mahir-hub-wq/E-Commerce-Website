import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Hero_2 from '../components/Hero_2';
import Hero_3 from '../components/Hero_3';
import { lazy, Suspense } from 'react';

const Home = () => {
  
  return (
    <>
      <Hero />
      <ProductCard />
      <Hero_2 />
      <Hero_3 />
 
    
    </>
  )
}

export default Home
