import React, { useEffect, useState } from "react";
import { useProducts } from "@/context/ProductsContext";

function Slideshow() {
  const { products } = useProducts();

  const slides = products || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      slides.length > 0 ? (prev === slides.length - 1 ? 0 : prev + 1) : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      slides.length > 0 ? (prev === 0 ? slides.length - 1 : prev - 1) : 0
    );
  };

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) {
    return <p className="text-center">No products available</p>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-gray-300 shadow-lg h-[400px]">

      {/* Title (no overlay background) */}
      <div className="absolute top-0 left-0 w-full text-center py-2 font-bold z-10 text-black mb-2">
        {slides[currentIndex]?.title}
      </div>

      {/* Image */}
      <img
        src={slides[currentIndex]?.imageUrl}
        alt={slides[currentIndex]?.title}
        className="w-full h-[400px] object-contain bg-white"
      />

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-200 text-black px-4 py-2 rounded-full"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-200 text-black px-4 py-2 rounded-full"
      >
        ❯
      </button>

      
    </div>
  );
}

export default Slideshow;