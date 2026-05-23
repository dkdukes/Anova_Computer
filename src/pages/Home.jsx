import React from 'react'
import { useProducts } from "@/context/ProductsContext";
import { useState } from 'react';
import Slideshow from '@/components/Slideshow';

function Home() {
    const { products } = useProducts();
  return (
    <div>
        <div>
            <Slideshow />
        </div>
    </div>
  )
}

export default Home