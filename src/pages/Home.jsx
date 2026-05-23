import React from "react";
import { useProducts } from "@/context/ProductsContext";
import { useState } from "react";
import Slideshow from "@/components/Slideshow";
import { Link } from "react-router-dom";

function Home() {
  const { products } = useProducts();
  return (
    <div>
      <div>
        <Slideshow />
      </div>
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
        <div className="relative border rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300">
          <Link to="/products?category=laptops" className="w-full h-full">
            <img
              src="/assets/apple14.jpeg"
              alt="Laptops"
              className="w-full h-48 object-contain"
            />

            <h2 className="text-center font-semibold py-3">Laptops</h2>
          </Link>
        </div>
        <div className="relative border rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300">
          <Link to="/products?category=smartphones" className="w-full h-full">
            <img
              src="/assets/second/iphone15.webp"
              alt="Smartphone"
              className="w-full h-48 object-contain"
            />

            <h2 className="text-center font-semibold py-3">Smartphones</h2>
          </Link>
        </div>
        <div className="relative border rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300">
          <Link to="/products?category=printers" className="w-full h-full">
            <img
              src="/assets/second/epsoneco.jpeg"
              alt="Printers"
              className="w-full h-48 object-contain"
            />

            <h2 className="text-center font-semibold py-3">Printers</h2>
          </Link>
        </div>
        <div className="relative border rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300">
          <Link to="/products?category=accessories" className="w-full h-full">
            <img
              src="/assets/second/mousew.jpeg"
              alt="Accessories"
              className="w-full h-48 object-contain"
            />

            <h2 className="text-center font-semibold py-3">Accessories</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
