import React, { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useParams, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

function ProductDetails() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  // Prevent crash while loading
  if (!product) {
    return (
      <div className="text-center mt-10 text-xl">
        Product not found
      </div>
    );
  }

 const handleAddToCart = () => {
  addToCart({
    ...product,
    quantity,
  });
};

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 flex flex-col md:flex-row gap-8">
      
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Product Info */}
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

        {/* Specifications */}
        <h2 className="text-xl font-semibold mb-3">
          Specifications
        </h2>

        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          {Object.entries(product.details || {}).map(
            ([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            )
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>

            <span className="px-6">
              {quantity}
            </span>

            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Add to Cart
          </button>

          <Link
            to="/cart"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;