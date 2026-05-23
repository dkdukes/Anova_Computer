import React from "react";
import { useProducts } from "@/context/ProductsContext";
import { useState } from "react";
import Slideshow from "@/components/Slideshow";
import { Link } from "react-router-dom";
import { useMemo } from "react";

function Home() {
  const { products } = useProducts();
  const randomProducts =useMemo(() => {
  return [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);
}, [products]);
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
      {/* Featured Products */}
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomProducts
            .map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="border rounded-lg p-4 shadow-sm group transition hover:shadow-lg"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />

                <h2 className="font-bold mt-2">{product.title}</h2>

                <p className="text-gray-700">$ {product.price}</p>
              </Link>
            ))}
        </div>
      </div>
      {/* Hot Deals */}
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-xl font-bold mb-4">Hot Deals</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomProducts
            .map((product) => {
              const discountedPrice =
                product.price * (1 - product.discount / 100);

              return (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="relative border rounded-lg p-4 shadow-sm group transition hover:shadow-lg"
                >
                  {/* Discount badge */}
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </span>

                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md"
                  />

                  <h2 className="font-bold mt-2">{product.title}</h2>

                  <p className="text-gray-700">
                    <span className="line-through mr-2">$ {product.price}</span>

                    <span className="text-red-500 font-semibold">
                      $ {discountedPrice.toFixed(2)}
                    </span>
                  </p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
