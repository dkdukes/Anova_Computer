import React, { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

function ProductDetails() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  // Wait until products are loaded
  if (!products || products.length === 0) {
    return (
      <div className="text-center mt-10 text-xl">
        Loading product...
      </div>
    );
  }
 const product = products.find(
  (p) => String(p.id) === String(id)
);

  // Only after loading is complete
  if (!product) {
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
  addToCart({
    ...product,
    quantity,
  });

  alert(`${product.title} added to cart`);
};
  useEffect(() => {
  console.log("Mounted ProductDetails:", id);
  return () => console.log("Unmounted ProductDetails");
}, []);
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 flex flex-col md:flex-row gap-8">
      
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <p className="text-3xl font-bold text-blue-600 mb-6">
          ${product.price}
        </p>

        {/* Specs */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          {Object.entries(product.details || {}).map(
            ([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            )
          )}
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={() =>
                setQuantity((p) => Math.max(1, p - 1))
              }
              className="px-4 py-2 bg-gray-200"
            >
              -
            </button>

            <span className="px-6">{quantity}</span>

            <button
              onClick={() =>
                setQuantity((p) => p + 1)
              }
              className="px-4 py-2 bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add to Cart
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;